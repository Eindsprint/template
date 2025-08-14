'use client';

import { Inter, Geist_Mono } from "next/font/google";
import { MantineProvider, Container, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { DoubleNavbar } from '@/components/DoubleNavbar';
import { usePathname } from 'next/navigation';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const theme = createTheme({
  primaryColor: 'customBlue',
  colors: {
    customBlue: [
      '#E6F8F9', // 0 - lightest
      '#C7F0F2', // 1
      '#A3E7EB', // 2
      '#7FDDE4', // 3
      '#5BD3DD', // 4
      '#37C9D6', // 5
      '#08BCC1', // 6 - main primary blue
      '#00A1A6', // 7 - dark blue
      '#008A8E', // 8
      '#007377', // 9 - darkest
    ],
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme} defaultColorScheme="light">
          {isLoginPage ? (
            children
          ) : (
            <>
              <DoubleNavbar />
              <main style={{ marginLeft: '300px', minHeight: '100vh' }}>
                <Container size="fluid" p="xl" style={{ maxWidth: '1600px' }}>
                  {children}
                </Container>
              </main>
            </>
          )}
        </MantineProvider>
      </body>
    </html>
  );
}
