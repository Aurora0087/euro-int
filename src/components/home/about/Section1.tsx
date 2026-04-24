"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useRef } from "react";
import { useT } from "@/lib/i18n/useT";

function Section1() {
  const t = useT()
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0.2, 1], [1.15, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const customEase = [0.16, 1, 0.3, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } },
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#F9F9F6] text-zinc-900 py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="max-w-screen-2xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center"
        >
          <motion.div variants={itemVariants as any} className="flex items-center gap-4 mb-8">
            <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">01</span>
            <span className="w-12 h-px bg-zinc-300"></span>
            <span className="text-sm tracking-[0.2em] text-zinc-500 uppercase">{t('section1_eyebrow')}</span>
          </motion.div>

          <motion.h2
            variants={itemVariants as any}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-10 text-zinc-900"
          >
            {t('section1_heading')}
          </motion.h2>

          <div className="flex flex-col gap-6 text-zinc-600 font-sans text-base md:text-lg leading-relaxed max-w-2xl">
            <motion.p variants={itemVariants as any}>{t('section1_p1')}</motion.p>
            <motion.p variants={itemVariants as any}>{t('section1_p2')}</motion.p>
            <motion.p variants={itemVariants as any}>{t('section1_p3')}</motion.p>
          </div>

          <motion.div variants={itemVariants as any} className="mt-12">
            <motion.a
              whileHover="hover"
              initial="initial"
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 rounded-full bg-zinc-900 text-white font-sans font-medium overflow-hidden transition-all hover:bg-zinc-800"
            >
              <span className="relative z-10">{t('section1_cta')}</span>
              <motion.span
                variants={{ initial: { x: 0 }, hover: { x: 5 } }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative z-10 flex items-center justify-center"
              >
                <MoveRight className="w-5 h-5" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Container with Parallax */}
        <div className="w-full h-[60vh] lg:h-[80vh] rounded-2xl overflow-hidden relative isolate bg-zinc-200">
          <div className="absolute inset-0 bg-black/5 z-10" />
          <motion.div style={{ scale: imageScale, y: imageY }} className="w-full h-full relative origin-bottom">
            <Image
              fill
              src="/images/productswithmodel/15.png"
              alt="Premium Leather Crafting"
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
