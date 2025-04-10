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

        if (!user || user.password !== credentials.password) {
          return null;
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
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        try {
          const { provider, providerAccountId } = account;
          const { email: userEmail, image, name } = user;
          const info = { userEmail, image, name, provider, providerAccountId };
          // console.log("from singIn Callback for info ", info);
          // console.log("from singIn Callback for user ", user);
          // console.log("from singIn Callback for account ", account);
          // console.log("from singIn Callback for profile ", profile);
          // console.log("from singIn Callback for email ", email);
          // console.log("from singIn Callback for credentials ",  credentials);


          const client = await clientPromise;
          const db = client.db("mydatabase");

          const isExistingUser = await db.collection("users").findOne({ providerAccountId: info.providerAccountId })
          // console.log("user does exist" , isExistingUser);

          if (!isExistingUser) {
            await db.collection("users").insertOne(info)
          }


        } catch (error) {
          console.log(error);
          return false
        }

      }
      return true
    },

    async session({ session, token }) {
      if (token) {
        if (token) {
          session.user.id = token.id;
          session.user.name = token.name;
          session.user.email = token.email;
          session.user.role = token.role;
          session.user.image = token.image;
        }
      }
      return session;
    },
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.image = user.image;
      }
      return token;
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
