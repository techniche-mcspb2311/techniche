import NextAuth from 'next-auth';
// import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from 'next-auth/providers/email';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import { conn, getDb } from '@/db';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(conn, {
        databaseName: process.env.DB
    }),
    providers: [
        EmailProvider({
            server: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: true,
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASSWORD
                },
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    callbacks: {
        // we can override specific behaviors that next-auth uses:
        // https://authjs.dev/guides/basics/callbacks
        async signIn({ user, account, profile, email, credentials }) {
            if (email && email.verificationRequest) {
                console.log('verification request', user, account, profile, email, credentials);
                const db = await getDb();
                const users = db.collection('users');
                const foundUser = await users.findOne({ email: user.email });
                console.log('user', foundUser);
                // don't let people register when logging in
                if (!foundUser) return false;
            }
            return true;
        },
        async session({ session, token, user }) {
            session.user = user;
            return session;
        }
    },
    pages: {
        // lets us override the default pages:
        // https://authjs.dev/guides/basics/pages
        signIn: '/login',
    }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
