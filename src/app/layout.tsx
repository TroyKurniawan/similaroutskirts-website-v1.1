import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://similaroutskirts.com"),

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

const roboto = Roboto({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
