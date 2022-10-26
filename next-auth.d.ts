import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';

/** Extend the built-in session types */
declare module 'next-auth' {
    interface Session {
        user: { id: string; name: string; email: string; image?: string };
    }
}
