"use client";
import ScrollToTop from "@/components/common/ScrollTop";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../public/scss/main.scss";
import { DM_Sans, Poppins } from "next/font/google";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/home/home-v1/Header";
import '../style/global.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

// import '@fortawesome/fontawesome-free/css/all.min.css';
import MobileMenu from "@/components/common/mobile-menu";
import Footer from "@/components/home/home-v3/footer";

if (typeof window !== "undefined") {
  import("bootstrap");
}

// DM_Sans font
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font-family",
});

// Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--title-font-family",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <head>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />

      </head>
      <body
        className={`body  ${poppins.className} ${dmSans.className}`}
        cz-shortcut-listen="false"
      >
        <div className="wrapper ovh">
          <Header />


          <div className="MobileMenu ">

            <MobileMenu />
          </div>
          {children}

          <Footer />

        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}

