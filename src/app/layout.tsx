import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Similar Outskirts",
    default: "Similar Outskirts",
  },
  description: "Music Producer / DJ 🎧",

  openGraph: {
    title: "Similar Outskirts",
    description: "Music Producer / DJ 🎧",
    url: "https://similaroutskirts.com",
    siteName: "Similar Outskirts",
    images: [
      {
        url: "/thumbnail.jpg",
        width: 1280,
        height: 720,
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
