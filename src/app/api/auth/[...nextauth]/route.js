"use server";

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../../../lib/mongodb";


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
        console.log(credentials);

        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });
        console.log(user);

        if (!user || user.password !== credentials.password) {
          return null;
        }

        return {
          name: user.username,
          role: user.role,
        };
      },
    }),

   
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        if (token) {
          session.user.name = token.name;
          session.user.role = token.role;
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.role = user.role;
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
