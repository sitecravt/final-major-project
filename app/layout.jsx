// Import necessary fonts from Google Fonts
import { Geist, Geist_Mono } from "next/font/google";
// Import global styles
import "./globals.css";
// Import layout components
import NavBar from "./components/NavBar";
import FooterPage from "./components/FooterPage";
import FAQ from "./components/_components/FaqComponent";
import SocialComponent from "./components/_components/SocialComponent";

// Configure Geist Sans font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Configure Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Define metadata for SEO and social sharing
export const metadata = {
  title: "Boom Leeds - Home",
  description: "Boom Leeds - Home is pleased to announce we have moved locations. We are no longer on Millwright Street in Leeds. Our new address is: Boom Leeds, Canalside, 5 Canal Place, Armley Road",
  openGraph: {
    images: '/logo.png',
  },
};

// Root layout component that wraps all pages
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        <link rel="icon" href="/logo.png" />
      </head>
      {/* Apply font variables and antialiasing to body */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global navigation bar */}
        <NavBar/>
        {/* Social media component */}
        <SocialComponent/>
        {/* Main content area */}
        {children}
        {/* Global footer */}
        <FooterPage/>
      </body>
    </html>
  );
}