"use client"

import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard } from 'swiper/modules';
import "swiper/css"

type Product = {
    id: string
    image: string
    alt: string
}

export type ProcuctSliderProps = {
    title?: string
    products?: Product[]
    autoplayDelayMs?: number
    speedMs?: number
}

const sampleProducts: Product[] = [
    

    {
        id: "p1",
        image: "/images/products/item3.png",
        alt: "p4",
    },
    {
        id: "p2",
        image: "/images/products/beltimage.png",
        alt: "p25",
    },
    {
        id: "p3",
        image: "/images/products/item4.png",
        alt: "p11",
    },
    {
        id: "p4",
        image: "/images/products/item5.png",
        alt: "p10",
    },
    {
        id: "p5",
        image: "/images/products/item6.png",
        alt: "p25",
    },
     {
        id: "p6",
        image: "/images/products/item7.png",
        alt: "p4",
    },
    {
        id: "p7",
        image: "/images/products/item8.png",
        alt: "p11",
    },
    {
        id: "p8",
        image: "/images/products/item9.png",
        alt: "p10",
    },
    {
        id: "p9",
        image: "/images/products/bag1.png",
        alt: "p25",
    },
]

export default function ProductSlider({
    products = sampleProducts,
    autoplayDelayMs = 3000, // Slightly slower for a more luxurious feel
    speedMs = 800,          // Buttery smooth transition speed
}: ProcuctSliderProps) {
    
    // Smooth easing curve
    const customEase =[0.16, 1, 0.3, 1];

    const textVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: customEase } 
        }
    };

    return (
        <section 
            aria-label="Product showcase and sustainability" 
            className="relative w-full py-24 md:py-32 bg-white text-zinc-900 overflow-hidden"
        >
            {/* Top Typography Section - Asymmetric Grid */}
            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 mb-16 md:mb-24 flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between items-start lg:items-end">
                
                {/* Left Side: Eyebrow & Headline */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.15 }}
                    className="max-w-3xl"
                >
                    <motion.div variants={textVariants as any} className="flex items-center gap-4 mb-8">
                        <span className="text-sm font-semibold tracking-widest text-zinc-400 uppercase">04</span>
                        <span className="w-12 h-[1px] bg-zinc-300"></span>
                        <span className="text-sm tracking-[0.2em] text-zinc-400 uppercase">Sustainability</span>
                    </motion.div>

                    <motion.h3 
                        variants={textVariants as any}
                        className='text-4xl md:text-5xl lg:text-[4vw] font-bold uppercase tracking-tighter leading-[0.95] text-zinc-900'
                    >
                        At the heart of our craft is our own <span className="text-[#8C1D20]">LWG-Gold</span> Certified Tannery.
                    </motion.h3>
                </motion.div>

                {/* Right Side: Paragraph & Drag Cue */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={textVariants as any}
                    className="max-w-md lg:pb-2"
                >
                    <p className='font-sans text-zinc-500 text-base md:text-lg leading-relaxed mb-8'>
                        By managing our own production, we ensure complete transparency and superior quality in every hide. Our dedicated global team sources a diverse palette of materials from European and Asian markets, ensuring strict REACH safety regulations are met.
                    </p>
                    
                    {/* Micro-interaction UI */}
                    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-zinc-900">
                        <span>Drag to explore</span>
                        <MoveRight className="w-4 h-4 animate-pulse" />
                    </div>
                </motion.div>
            </div>

            {/* Bottom Slider Section - Bleeding off the right edge */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, ease: customEase as any }}
                className="w-full pl-6 md:pl-12 lg:pl-24" // Aligns left, bleeds right
            >
                <div className="relative w-full" aria-live="off">
                    <Swiper
                        modules={[Autoplay, Keyboard]}
                        loop={true}
                        grabCursor={true}
                        keyboard={{ enabled: true }}
                        // Using specific breakpoints to show partial next-slides (e.g., 2.5)
                        breakpoints={{
                            320: { slidesPerView: 1.2, spaceBetween: 16 },
                            640: { slidesPerView: 2.2, spaceBetween: 24 },
                            1024: { slidesPerView: 3.2, spaceBetween: 32 },
                            1440: { slidesPerView: 4.2, spaceBetween: 40 },
                        }}
                        autoplay={{
                            delay: autoplayDelayMs,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={speedMs}
                        className="!overflow-visible" // Crucial for letting shadows and partial slides bleed
                    >
                        {products.map((p, idx) => (
                            <SwiperSlide key={p.id || idx} className="h-auto">
                                {/* The Card */}
                                <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-[#F9F9F6] cursor-grab active:cursor-grabbing">
                                    <img 
                                        src={p.image || "/placeholder.svg"} 
                                        alt={p.alt} 
                                        // object-cover looks more premium for lifestyle. If product cutouts, use object-contain
                                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </motion.div>
        </section>
    );
}
