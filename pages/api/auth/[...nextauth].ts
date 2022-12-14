import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authorize, Adapter } from '@zenstackhq/next-auth';
import service from '@zenstackhq/runtime/server';

export const authOptions: NextAuthOptions = {
    // use the ZenStack next-auth adapter for user identity persistence
    adapter: Adapter(service),

    session: {
        strategy: 'jwt',
    },

    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: 'Email Address',
                    type: 'email',
                    placeholder: 'Your email address',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'Your password',
                },
            },
            // use the "authorize" helper generated by ZenStack to authenticate user login
            authorize: authorize(service),
        }),
    ],

    callbacks: {
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.sub!,
                },
            };
        },
    },
};

export default NextAuth(authOptions);
