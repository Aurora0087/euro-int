'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';
import { useT } from '@/lib/i18n/useT';

function Section2() {
    const t = useT()
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    const customEase = [0.16, 1, 0.3, 1];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
    };

    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: customEase } }
    };

    return (
        <section
            ref={sectionRef}
            className='relative w-full min-h-screen bg-zinc-950 text-white py-24 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden'
        >
            <div className='max-w-screen-2xl mx-auto'>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-12 md:mb-20"
                >
                    <motion.div variants={textVariants as any} className="flex items-center gap-4 mb-8">
                        <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">02</span>
                        <span className="w-12 h-px bg-zinc-700"></span>
                        <span className="text-sm tracking-[0.2em] text-zinc-500 uppercase">{t('section2_eyebrow')}</span>
                    </motion.div>

                    <motion.h2
                        variants={textVariants as any}
                        className='text-5xl md:text-7xl lg:text-[7vw] font-bold leading-[0.9] text-zinc-100 uppercase max-w-5xl'
                    >
                        {t('section2_heading_1')} <br /> {t('section2_heading_2')}
                    </motion.h2>
                </motion.div>

                {/* Parallax Image Banner */}
                <motion.div
                    initial={{ opacity: 0, clipPath: 'inset(10% 0 10% 0)' }}
                    whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0% 0)' }}
                    transition={{ duration: 1.5, ease: customEase as any }}
                    viewport={{ once: true, margin: "-100px" }}
                    className='relative w-full h-[25vh] md:h-[50vh] rounded-2xl md:rounded-4xl overflow-hidden group'
                >
                    <motion.div style={{ scale: imageScale, y: imageY }} className='absolute inset-0 w-full h-full'>
                        <Image
                            fill
                            src="/images/about/b1.webp"
                            alt='Euro International Workshop'
                            className='object-cover object-center grayscale contrast-125 brightness-90 transition-all duration-1000 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100'
                            sizes="100vw"
                        />
                    </motion.div>
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-950/80 via-transparent to-transparent z-10" />
                </motion.div>

                {/* 3-Column Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-16 md:mt-24'
                >
                    <motion.div variants={textVariants as any} className="flex flex-col gap-6">
                        <div className="border-t border-zinc-800 pt-6">
                            <span className="text-xs tracking-widest text-zinc-500 mb-4 block uppercase font-semibold">{t('section2_col1_label')}</span>
                            <p className='font-sans text-zinc-400 text-base md:text-lg leading-relaxed'>{t('section2_col1_text')}</p>
                        </div>
                    </motion.div>

                    <motion.div variants={textVariants as any} className="flex flex-col gap-6">
                        <div className="border-t border-zinc-800 pt-6">
                            <span className="text-xs tracking-widest text-zinc-500 mb-4 block uppercase font-semibold">{t('section2_col2_label')}</span>
                            <p className='font-sans text-zinc-400 text-base md:text-lg leading-relaxed'>{t('section2_col2_text')}</p>
                        </div>
                    </motion.div>

                    <motion.div variants={textVariants as any} className="flex flex-col gap-6">
                        <div className="border-t border-zinc-800 pt-6">
                            <span className="text-xs tracking-widest text-zinc-500 mb-4 block uppercase font-semibold">{t('section2_col3_label')}</span>
                            <p className='font-sans text-zinc-400 text-base md:text-lg leading-relaxed'>{t('section2_col3_text')}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Section2;
