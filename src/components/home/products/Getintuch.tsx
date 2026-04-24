'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useRef } from 'react';
import { useT } from '@/lib/i18n/useT';

function Getintuch() {
    const t = useT()
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const x1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

    const handleScrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            ref={containerRef}
            onClick={handleScrollToContact}
            className='relative w-full py-24 md:py-40 bg-[#F9F9F6] overflow-hidden flex flex-col justify-center items-center cursor-pointer group'
        >
            {/* Spinning Circular Badge */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute z-20 w-24 h-24 md:w-32 md:h-32 text-[#8C1D20] pointer-events-none"
            >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="transparent"
                    />
                    <text className="text-[14px] font-bold uppercase tracking-[0.2em]" fill="currentColor">
                        <textPath href="#circlePath" startOffset="0%">
                            {t('getintouch_badge')}
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Central Animated Arrow */}
            <motion.div className="absolute z-20 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-[#8C1D20] text-white rounded-full transition-transform duration-500 ease-out group-hover:scale-125">
                <ArrowDown className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:translate-y-1" />
            </motion.div>

            {/* Kinetic Typography */}
            <div className='flex flex-col items-center justify-center font-black uppercase leading-[0.8] w-full pointer-events-none'>
                <motion.h2
                    style={{ x: x1 }}
                    className='text-[20vw] md:text-[15vw] whitespace-nowrap text-zinc-900 transition-colors duration-500 group-hover:text-[#8C1D20]'
                >
                    {t('getintouch_line1')}
                </motion.h2>

                <motion.h2
                    style={{ x: x2, WebkitTextStroke: '2px #18181B', color: 'transparent' }}
                    className='text-[20vw] md:text-[15vw] whitespace-nowrap text-transparent transition-all duration-500 group-hover:[-webkit-text-stroke:2px_#8C1D20]'
                >
                    {t('getintouch_line2')}
                </motion.h2>
            </div>
        </section>
    );
}

export default Getintuch;
