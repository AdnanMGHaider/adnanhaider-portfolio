import "./globals.css";
import Header from "@/components/Header";

import { MonteCarlo } from "next/font/google";

const logoFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});

export const metadata = {
  title: "Adnan Haider Portfolio",
  description: "Adnan Haider’s personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${logoFont.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
