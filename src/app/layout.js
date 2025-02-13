"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { lato } from "@/utility/fonts-utility";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power2.out",
        onComplete: () => setLoading(false),
      });
    }, 3800);
    console.log("lodaing",loading);
    return () => clearTimeout(timer);
  }, []);
  return (
    <html lang="en" className={lato.className}>
      <head>
        {/* Basic SEO */}
        <title>SYNVIA - Dose of Hope</title>
        <meta
          name="description"
          content="SYNVIA provides high-quality pharmaceutical exports with WHO GMP certification. Your trusted partner for global healthcare solutions, offering safe and reliable manufacturing medicines. Together, we provide a 'Dose of Hope' worldwide."
        />
        <meta name="author" content="SYNVIA" />
        <meta
          name="keywords"
          content="Pharmacy, Pharmaceutical, Health, Medicine, Pharmaceutical manufacturing, Global Health"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />

        {/* Open Graph for Social Media */}
        <meta property="og:title" content="SYNVIA - Dose of Hope" />
        <meta
          property="og:description"
          content="SYNVIA provides high-quality pharmaceutical exports with WHO GMP certification. Your trusted partner for global healthcare solutions, offering safe and reliable manufacturing medicines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="SYNVIA" />

        {/* Twitter Card for Social Sharing */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SYNVIA - Dose of Hope" />
        <meta
          name="twitter:description"
          content="SYNVIA provides high-quality pharmaceutical exports with WHO GMP certification."
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://yourwebsite.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        {loading && (
          <div
            ref={loaderRef}
            className="fixed inset-0 flex items-center justify-center bg-cover bg-center backdrop-blur-sm z-20 bg-white"
          >
            <video
              src="./images/loader.mp4"
              autoPlay
              muted
              playsInline
              className="w-full h-auto object-cover"
              style={{ opacity: 1 }}
            ></video>
          </div>
        )}
        {!loading && (
          <>
            <Navbar />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
