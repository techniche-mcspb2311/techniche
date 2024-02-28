import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import { authOptions } from './api/auth/[...nextauth]/route';
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
            <body className={inter.className}>
                <AppRouterCacheProvider>
                    <SessionProvider session={session}>
                        {children}
                    </SessionProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}
