import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import getDb from '@/db';
import { z } from 'zod';
import bcrypt from 'bcrypt';

// async function getUser(email) {
//     const db = await getDb();
//     const collection = db.collection('users');
//     const user = await collection.findOne({ email });
//     return user;
//     // if (user) {
//     //     return user;
//     // } else {
//     //     console.error('Couldn\'t find user', email);
//     //     throw new Error('Failed to find user');
//     // }
// }

// export const { auth, signIn, signOut } = NextAuth({
//     ...authConfig,
//     providers: [Credentials({
//         async authorize(credentials) {
//             const parsedCredentials = z
//                   .object({ email: z.string().email(), password: z.string().min(8) })
//                   .safeParse(credentials);
//             if (parsedCredentials.success) {
//                 const { email, password } = parsedCredentials.data;
//                 const user = await getUser(email);
//                 if (!user) return null;
//                 const passwordsMatch = await bcrypt.compare(password, user.password);
//                 if (passwordsMatch) return user;
//             }
//             console.warn('Invalid credentails');
//             return null;
//         }
//     })],
// });
