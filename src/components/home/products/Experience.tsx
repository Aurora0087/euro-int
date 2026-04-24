'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useT } from '@/lib/i18n/useT';

function Experience() {
    const t = useT()
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const x1 = useTransform(scrollYProgress, [0, 1], ["-10%", "5%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section
            ref={containerRef}
            className='relative w-full py-32 md:py-48 bg-[#F9F9F6] overflow-hidden flex flex-col justify-center'
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants as any}
                className="absolute top-16 md:top-24 left-6 md:left-12 lg:left-24 flex items-center gap-4 z-10"
            >
                <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">03</span>
                <span className="w-12 h-px bg-zinc-300"></span>
                <span className="text-sm tracking-[0.2em] text-zinc-500 uppercase">{t('experience_eyebrow')}</span>
            </motion.div>

            <div className='flex flex-col items-center justify-center font-extrabold uppercase leading-[0.85] w-full'>
                <motion.h2 style={{ x: x1 }} className='text-[18vw] md:text-[13vw] whitespace-nowrap'>
                    {t('experience_years')}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="z-10 w-full max-w-screen-2xl mx-auto flex justify-end px-6 md:px-24 my-2 md:-my-4"
                >
                    <p className="max-w-xs text-xs md:text-sm font-sans text-zinc-600 leading-relaxed normal-case font-normal text-right bg-[#F9F9F6]/80 backdrop-blur-sm p-4 rounded-xl border border-zinc-200">
                        {t('experience_desc')}
                    </p>
                </motion.div>

                <motion.h2
                    style={{
                        x: x2,
                        WebkitTextStroke: '2px #8C1D20',
                        color: 'transparent'
                    }}
                    className='text-[18vw] md:text-[13vw] whitespace-nowrap text-transparent opacity-90'
                >
                    {t('experience_word')}
                </motion.h2>
            </div>
        </section>
    );
}

export default Experience;
