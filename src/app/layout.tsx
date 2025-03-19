import "./globals.css";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { baseUrl } from "@/app/sitemap";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | tomocat",
    default: "tomocat",
  },
  description: "簡介",
  openGraph: {
    url: `/`,
    images: "/og?title=楊光地&subtitle=簡介",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant">
      <body className={`${inter.className}`}>
        <GoogleAnalytics gaId="G-" />
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
