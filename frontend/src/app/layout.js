import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "../context/Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AirderEase",
  description: "AI Email writer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`relative ${inter.className}`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
