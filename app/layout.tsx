import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header/Header";


export const metadata: Metadata = {
  title: "DICEUS",
  description: "Test work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="layout-margine mt-4">
          {children}
        </div>
      </body>
    </html>
  );
}
