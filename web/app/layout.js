import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eendenrace Leiden 2025",
  description: "Eendenrace Leiden 2025",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Navbar />
        <main className={inter.className}>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
