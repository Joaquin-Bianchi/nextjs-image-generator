import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Images with Dalle-2 </title>
      </head>
      <body className="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
        {children}
      </body>
    </html>
  );
}