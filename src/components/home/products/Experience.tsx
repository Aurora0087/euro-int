'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function Experience() {
    const containerRef = useRef(null);

    // Track the scroll progress through this specific section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Move the first line to the right
    const x1 = useTransform(scrollYProgress, [0, 1],["-10%", "5%"]);
    // Move the second line to the left
    const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-10%"]);

    // Awwwards-style easing for the reveal
    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease:[0.16, 1, 0.3, 1] } 
        }
    };

    return (
        <section 
            ref={containerRef} 
            className='relative w-full py-32 md:py-48 bg-[#F9F9F6] overflow-hidden flex flex-col justify-center'
        >
            {/* Eyebrow Label */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textVariants as any}
                className="absolute top-16 md:top-24 left-6 md:left-12 lg:left-24 flex items-center gap-4 z-10"
            >
                <span className="text-sm font-semibold tracking-widest text-zinc-500 uppercase">03</span>
                <span className="w-12 h-[1px] bg-zinc-300"></span>
                <span className="text-sm tracking-[0.2em] text-zinc-500 uppercase">Our Legacy</span>
            </motion.div>

            {/* Kinetic Typography Container */}
            <div className='flex flex-col items-center justify-center font-extrabold uppercase leading-[0.85]  w-full'>
                
                {/* Line 1: Solid Fill */}
                <motion.h1 
                    style={{ x: x1 }} 
                    className='text-[18vw] md:text-[13vw] whitespace-nowrap'
                >
                    27+ years
                </motion.h1>

                {/* Overlapping Detail Text */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="z-10 w-full max-w-screen-2xl mx-auto flex justify-end px-6 md:px-24 my-2 md:-my-4"
                >
                    <p className="max-w-xs text-xs md:text-sm font-sans text-zinc-600 leading-relaxed normal-case font-normal text-right bg-[#F9F9F6]/80 backdrop-blur-sm p-4 rounded-xl border border-zinc-200">
                        Over two decades of mastering the art of premium leather craftsmanship, driving global trends, and delivering uncompromising quality.
                    </p>
                </motion.div>
                
                {/* Line 2: Outline / Stroke Effect */}
                <motion.h1 
                    style={{ 
                        x: x2,
                        // Using WebkitTextStroke for the precise outline look 
                        WebkitTextStroke: '2px #8C1D20',
                        color: 'transparent' 
                    }} 
                    className='text-[18vw] md:text-[13vw] whitespace-nowrap text-transparent opacity-90'
                >
                    Experience
                </motion.h1>

            </div>
        </section>
    );
}

export default Experience;