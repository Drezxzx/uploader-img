import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uploader",
  description: "Aplicaciíon para subir archivos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Header></Header>
        {children}
        </body>
    </html>
  );
}
