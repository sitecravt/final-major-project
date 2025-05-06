import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import FooterPage from "./components/FooterPage";
import FAQ from "./components/_components/FaqComponent";
import SocialComponent from "./components/_components/SocialComponent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Boom Leeds - Home",
  description: "Boom Leeds - Home is pleased to announce we have moved locations. We are no longer on Millwright Street in Leeds. Our new address is: Boom Leeds, Canalside, 5 Canal Place, Armley Road",
  openGraph: {
    images: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="icon" href="/logo.png" />
        </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        <SocialComponent/>
        {children}
        <FooterPage/>
      </body>
    </html>
  );
}