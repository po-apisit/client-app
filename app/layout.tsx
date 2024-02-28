import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/700.css';
import StoreProvider from "./_component/StoreProvider";
import { UserProvider } from '@auth0/nextjs-auth0/client';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ตั้งแคมป์ปิ้งประเทศไทย | Thai-camps.com",
  description: "เว็บไซต์ที่รวบร่วมจุดตั้งแคมป์ แคมป์ปิ้ง ท่องเที่ยว พักผ่อน หนึ่งเดียวในประเทศไทย",
  keywords: ["thaicamp","thaicamps","thai-camp","thai-camps","ตั้งแคมป์","แคมป์ปิ่ง","พักผ่อน","ท่องเที่ยว","เที่ยวประเทศไทย"],
};


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </body>
      </UserProvider>

    </html>
  );
}
