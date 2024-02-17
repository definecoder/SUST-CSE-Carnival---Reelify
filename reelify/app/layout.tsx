import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import "../styles/global.css";
import { Metadata } from "next";
import {NextUIProvider} from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Remotion and Next.js",
  description: "Remotion and Next.js",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505]">
        <Navbar />        
        {children}
        <Footer />
        <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/212ee31b-c6da-4807-9f74-d174dbe25e5f/webchat/config.js" defer></script>
        
      </body>
    </html>
  );
}
