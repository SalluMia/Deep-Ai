import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs';

import { connectToDB } from '@/utils/database';
import User from '@/model/user';

export const authOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { type: 'text', placeholder: 'user@email.com' },
        password: { type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        await connectToDB();
        const user = await User.findOne({ email });

        if (!user) {
          console.log("USER NOT ");
          throw new Error("User not registered");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
          throw new Error("Invalid Password");

        }

        console.log("ABOUT TO THROW USER: ", user);
        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {

      if (trigger === 'update'|| session?.username  || session?.email) {

        console.log("Trigger update")
        token.username = session.username
        token.email = session?.email
      }

      return token
    },
    async session({ session, token }) {
      if (session.user) {
        const email = session.user.email;
        try {
          await connectToDB();
          const sessionUser = await User.findOne({ email });
          if (sessionUser) {
            session.user.id = sessionUser._id.toString();
            session.user.name = sessionUser.username
            // set email if it didnt throw
          }
        } catch (error) {
          console.error(
            "Error fetching user session data from the database: ",
            error
          );
        }
      }

      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: "/auth/error", 

  },
  session: {
    strategy: 'jwt'
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
