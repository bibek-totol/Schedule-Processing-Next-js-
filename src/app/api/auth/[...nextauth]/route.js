"use server"

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../../lib/mongodb";
// import EmailProvider from "next-auth/providers/email"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const client = await clientPromise;
        const db = client.db("mydatabase");
        console.log(credentials);

        const user = await db.collection("users").findOne({ email: credentials.email });
        console.log(user);

        if (!user || user.password !== credentials.password) {
          return null;
        }

        return {
          id: user._id,
          email: user.email,
          name: user.username,      
          image: user.photoURL,     
        }; ;

      }
    }),
    
    

  ],
  pages: {
    signIn: "/login",
    
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };