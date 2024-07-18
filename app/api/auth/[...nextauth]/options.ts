import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) :Promise<any>{
        console.log("authorize method called with credentials:", credentials);
        const user = {username:"abhishek",password:"12345",userId:'1122'};
        if(user.username === credentials?.username && user.password === credentials?.password){
          return user;
        }
        console.log("Invalid credentials provided");
        throw new Error("Invalid credentials");
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.userId = user.userId; // Ensure the token is getting the userId
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { id: token.userId,username:token.username }; // Ensure session gets the userId from token
      return session;
    }
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/'
  }
};
