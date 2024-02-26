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
            // credentials: {
            //     username: { label: 'Username' },
            //     password: { label: 'Password', type: 'password' }
            // },
            // async authorize(credentials) {
            //     const authResponse = await fetch("http://localhost:3000/api/users/login", {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify(credentials),
            //     });

            //     if (!authResponse.ok) {
            //         return null;
            //     }

            //     const user = await authResponse.json();

            //     return user;
            // },
        }),
    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (email && email.verificationRequest) {
                console.log('verification request', user, account, profile, email, credentials);
                const db = await getDb();
                const users = db.collection('users');
                const foundUser = await users.findOne({ email: user.email });
                console.log('user', foundUser);
                if (!foundUser) return false;
            }
            return true;
        }
    },
    pages: {
        signIn: '/login',
    }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
