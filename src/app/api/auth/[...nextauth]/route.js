"use server";

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
          id: user._id.toString(),
          name: user.username,
          email: user.email,
          role: user.role,
          image: user.image,
        };
      },
    }),

    // EmailProvider({
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,

    // }),
  ],
  callbacks: {
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
