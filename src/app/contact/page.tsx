import { Metadata } from "next";
import ContactPage from "./contactpage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send an email to Similar Outskirts.",

  openGraph: {
    title: "Contact | Similar Outskirts",
    description: "Send an email to Similar Outskirts.",
    url: "https://similaroutskirts.com/contact",
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

function Contact() {
  return <ContactPage />;
}

export default Contact;
