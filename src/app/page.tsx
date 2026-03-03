'use client'


import dynamic from "next/dynamic";
import About from "@/components/home/about/About";
import Products from "@/components/home/products/Products";
import Preloader from "@/components/Preloader/Preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Hero = dynamic(() => import("@/components/home/hero/Hero"), { ssr: false })

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 1500)
      }
    )()
  }, [])

  return (
    <div className="h-full w-screen relative">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Hero />
      <About />
      <Products />
    </div>
  );
}
