import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
    providers: [
        CredentialsProvider({
            credentials: {
                username: { label: 'Username' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                const authResponse = await fetch("http://localhost:3000/api/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(credentials),
                });

                if (!authResponse.ok) {
                    return null;
                }

                const user = await authResponse.json();

                return user;
            },
        }),
    ],
});

export { handler as GET, handler as POST };
