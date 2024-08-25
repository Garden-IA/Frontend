import nextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { login } from '../../../../utils/api';
import { User } from '../../../../interfaces/user/User';

const handler = nextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || typeof email !== 'string') return null;
        if (!password || typeof password !== 'string') return null;

        try {
          const response = await login({ email, password });
          console.log(response);

          // Add logic here to look up the user from the credentials supplied
          const user: User = {
            id: response.id,
            email: response.email,
            name: response.name ?? null,
            // image: response.image ?? null,
            // role: response.role ?? null,
            // locale: response.locale ?? null,
            lastLogin: response.lastLogin ?? null,
          };

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;
          }
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        // token.image = user.image;
        // token.role = user.role;
        // token.locale = user.locale;
        token.lastLogin = user.lastLogin;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name ?? null;
        // session.user.image = (token.image as string) ?? null;
        // session.user.role = token.role as string;
        // session.user.locale = token.locale as string;
        session.user.lastLogin = (token.lastLogin as string) ?? null;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
