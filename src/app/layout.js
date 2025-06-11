// src/app/layout.js

import "./globals.css";

export const metadata = {
  title: "Adnan Haider Portfolio",
  description: "Adnan Haider’s personal portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
