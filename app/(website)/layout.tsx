import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Deccan Enterprises",
  description:
    "Trusted Surgical Products Supplier for Hospitals, Clinics & Healthcare Professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 <body
  className={`${inter.variable} ${poppins.variable} antialiased`}
>
  <Navbar />

  <main className="pt-4">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
} 