import "./globals.css";
import Header from "@/components/Header";

import { MonteCarlo, Noto_Sans, Rammetto_One } from "next/font/google";

export const logoFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo",
});
export const headingFont = Rammetto_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-header",
});

//Rametto_One

export const bodyFont = Noto_Sans({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL("https://adnanmghaider.dev"),
    title: "Adnan Haider Portfolio",
    description:
    "Full-stack developer portfolio showcasing projects, tech stack and contact information.",
  openGraph: {
    title: "Adnan Haider Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects, tech stack and contact information.",
    url: "https://adnanmghaider.dev",
    siteName: "Adnan Haider Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of Adnan Haider portfolio website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adnan Haider Portfolio",
    description:
      "Full-stack developer portfolio showcasing projects, tech stack and contact information.",
    images: ["/og-image.png"],
    creator: "@adnanmghaider",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${logoFont.variable} ${headingFont.variable} ${bodyFont.variable}`}
    >
      <body className="font-body antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
