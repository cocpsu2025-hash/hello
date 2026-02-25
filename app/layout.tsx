import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css"; 
import Link from "next/link";

const roboto = Roboto({
  variable: "--font-Roboto",
  weight: "400"
})

export const metadata: Metadata = {
  title: "Hello world App",
  description: "This is my first hello app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className}`}
      >
        <nav className="flex m-2 p-2 text-xl font-bold text-blue-800 border-2 shadow-lg bg-amber-100 justify-between"> 
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/foo">Foo</Link>
        </nav>
        <div className="m-8">
          {children}
        </div>
      </body>
    </html>
  );
}
