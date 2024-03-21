import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  debug: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/get-token`,
          {
            method: "POST",
            credentials: "include",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            cache: "no-cache",
            headers: { "Content-Type": "application/json" },
          }
        );
        const ress = await user.json();
        if (ress?.success) {
          return {
            error: false,
            randomKey: "Random",
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user;
        return {
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
