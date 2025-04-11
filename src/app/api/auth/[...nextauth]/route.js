"use server";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../../lib/mongodb";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        // console.log(credentials);

        const user = await db.collection("users").findOne({ email: credentials.email });
        console.log("the user", user);

        if (!user) {
          return null;
        }



        
  const now = new Date();
  if (user.lockUntil && user.lockUntil > now && user.failedAttempts>=3) {
    
    throw new Error("Account is temporarily locked. Try again later.");
  }


  if (user.lockUntil && user.lockUntil <= now) {
   
    await db.collection("users").updateOne(
      { email: credentials.email },
      { $set: { failedAttempts: 0, lockUntil: null } }
    );
  }


  if (user.password !== credentials.password) {
    let updateData = {
      $inc: { failedAttempts: 1 },
      $set: {},
    };
  
    if (user.failedAttempts + 1 >= 3) {
      const lockTime = new Date(Date.now() + 3 * 60 * 1000);
      updateData.$set.lockUntil = lockTime;
    }
  
    if (Object.keys(updateData.$set).length === 0) {
      delete updateData.$set;
    }
  
    await db.collection("users").updateOne({ email: credentials.email }, updateData);
  
    throw new Error("Invalid email or password.You can use 3 login attempts");
  }
  


  

        return {
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          role: user.role,
          image: user.photoURL,
        };
      },
    }),



    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })

  ],
  

  callbacks: {
    async signIn({ user, account }) {
      if (account) {
        try {
          const { provider, providerAccountId } = account;
          const { email, image, name } = user;
  
          const client = await clientPromise;
          const db = client.db("mydatabase");
  
          const isExistingUser = await db.collection("users").findOne({ email });
  
          if (!isExistingUser) {
            const newUser = {
              username: name,
              email,
              photoURL: image,
              provider,
              providerAccountId,
              role: "employee",
              failedAttempts: 0,
              lockUntil: null,
            };
  
            await db.collection("users").insertOne(newUser);
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
  
      return true;
    },
  
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id || token.id;
        token.name = user.name || token.name;
        token.email = user.email || token.email;
        token.image = user.image || token.image;
    
    
        if (account && (account.provider === "google" || account.provider === "github")) {
          const client = await clientPromise;
          const db = client.db("mydatabase");
          const dbUser = await db.collection("users").findOne({ email: user.email });
          token.role = dbUser?.role || "employee"; 
        } else {
          token.role = user.role; 
        }
      }
    
      return token;
    },
  
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image;
        session.user.role = token.role; 
      }
      return session;
    },
  },
  

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  jwt: {
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 60 * 60 * 24,
  },
});

export { handler as GET, handler as POST };
