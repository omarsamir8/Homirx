import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../app/components/Navbar/navbar'
import Footer from '../app/components/Footer/footer'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "HOMIRX",
  description: "We are a team of passionate and experienced civil engineers dedicated to shaping the future through innovative, sustainable, and reliable engineering solutions. At [الماسة], we specialize in designing, planning, and managing infrastructure projects that stand the test of time. From residential and commercial developments to highways, bridges, and water systems, our commitment to quality and precision drives every project we undertake.Explore our expertise in: Structural Engineering Transportation & Highway Design Water Resources & Environmental Engineering Construction Management Land Development & Urban Planning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{position:"fixed",width:"100%",zIndex:"100"}}>
          <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
