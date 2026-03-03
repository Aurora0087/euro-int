'use client'

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

function Hero() {
    // Awwwards-style easing curve for buttery smooth animations
    const customEase = [0.16, 1, 0.3, 1];

    const textContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.6 }
        }
    };

    const textItem = {
        hidden: { y: "100%", opacity: 0 },
        show: { y: "0%", opacity: 1, transition: { duration: 1.2, ease: customEase } }
    };

    return (
        <div className='relative w-full h-[100svh] overflow-hidden bg-zinc-950'>
            {/* Background Image with Ken Burns Effect */}
            <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: 'easeOut' }}
                className='absolute inset-0 z-0'
            >
                {/* Gradient overlays for text readability & premium vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <Image
                    className='object-cover object-center z-0'
                    fill
                    priority
                    alt='Premium Leather Hero'
                    src="/images/hero/l2.jpeg" // Make sure this path is correct
                />
            </motion.div>

            {/* Header / Nav */}
            <motion.header 
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: customEase as any }}
                className='absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 z-50'
            >
                {/* Spacer for Flex Balance */}
                <div className='hidden md:block w-32'></div>

                {/* Logo */}
                <a href="/" className='group relative flex items-center justify-center overflow-hidden'>
                    <div className='relative w-32 h-10'>
                        <Image fill alt='logo' src="/logo.png" className='object-contain transition-transform duration-500 group-hover:scale-105' />
                    </div>
                </a>

                {/* Header Actions */}
                <div className='flex gap-4 md:gap-6 justify-end items-center w-fit'>
                    <motion.a 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className='hidden md:flex px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-colors duration-300 font-medium text-sm items-center gap-2' 
                        href='#contact' 
                    >
                        Contact
                    </motion.a>

                    <Sheet>
                        <SheetTrigger asChild className='w-12 h-12'>
                            <motion.button 
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                className='group flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-zinc-200 transition-colors'
                            >
                                <MapPin className='w-5 h-5 transition-transform group-hover:scale-110' />
                            </motion.button>
                        </SheetTrigger>
                        
                        <SheetContent side='left' className='w-full md:max-w-xl bg-zinc-950 border-zinc-800 text-zinc-100 p-8 md:p-12'>
                            <SheetHeader className="h-full flex flex-col justify-center">
                                <SheetTitle className='text-4xl md:text-6xl font-bold tracking-tighter mb-12 text-white'>
                                    Connect <br/> With Us.
                                </SheetTitle>
                                
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full text-zinc-300'>
                                    {/* Location 1 */}
                                    <div className='group flex flex-col gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700 transition-colors rounded-2xl p-6'>
                                        <MapPin className='w-6 h-6 text-white/50 group-hover:text-white transition-colors' />
                                        <h4 className='font-semibold text-white tracking-wide uppercase text-xs'>Office</h4>
                                        <div className='text-sm leading-relaxed'>
                                            <p>zxcrt 1245,</p>
                                            <p>4th Floor,</p>
                                            <p>hhyu-12</p>
                                        </div>
                                    </div>
                                    
                                    {/* Location 2 */}
                                    <div className='group flex flex-col gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700 transition-colors rounded-2xl p-6'>
                                        <MapPin className='w-6 h-6 text-white/50 group-hover:text-white transition-colors' />
                                        <h4 className='font-semibold text-white tracking-wide uppercase text-xs'>Workshop</h4>
                                        <div className='text-sm leading-relaxed'>
                                            <p>zxcrt 1245,</p>
                                            <p>4th Floor,</p>
                                            <p>hhyu-12</p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className='group flex flex-col gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700 transition-colors rounded-2xl p-6'>
                                        <Mail className='w-6 h-6 text-white/50 group-hover:text-white transition-colors' />
                                        <h4 className='font-semibold text-white tracking-wide uppercase text-xs'>Email Address</h4>
                                        <div className='flex flex-col gap-1 text-sm'>
                                            <a href='mailto:example@gmail.com' className='hover:text-white transition-colors'>example@gmail.com</a>
                                            <a href='mailto:contact@gmail.com' className='hover:text-white transition-colors'>contact@gmail.com</a>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className='group flex flex-col gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/50 hover:border-zinc-700 transition-colors rounded-2xl p-6'>
                                        <Phone className='w-6 h-6 text-white/50 group-hover:text-white transition-colors' />
                                        <h4 className='font-semibold text-white tracking-wide uppercase text-xs'>Phone Number</h4>
                                        <div className='flex flex-col gap-1 text-sm'>
                                            <a href='tel:+00000000000' className='hover:text-white transition-colors'>+00 0000000000</a>
                                            <a href='tel:+00000000000' className='hover:text-white transition-colors'>+00 0000000000</a>
                                        </div>
                                    </div>
                                </div>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </motion.header>

            {/* Main Hero Content */}
            <div className='absolute z-20 inset-0 flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-12'>
                <motion.div 
                    variants={textContainer}
                    initial="hidden"
                    animate="show"
                    className='max-w-7xl'
                >
                    {/* Eyebrow text */}
                    <div className="overflow-hidden mb-4">
                        <motion.div variants={textItem as any} className="flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-white/60"></span>
                            <h4 className='uppercase tracking-[0.2em] text-white/80 text-xs md:text-sm font-medium'>
                                Premium Handcrafted
                            </h4>
                        </motion.div>
                    </div>

                    {/* Main Headline (Masked Text Reveal) */}
                    <div className="overflow-hidden py-2">
                        <motion.h1 
                            variants={textItem as any} 
                            className='uppercase text-5xl md:text-[8vw] leading-[0.85] font-bold text-white tracking-tighter'
                        >
                            Leather & <br className="hidden md:block"/> Leather Goods
                        </motion.h1>
                    </div>

                    {/* Subtext */}
                    <div className="overflow-hidden mt-8 md:mt-12">
                        <motion.p 
                            variants={textItem as any}
                            className='max-w-md font-sans px-4 py-3 md:px-6 md:py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-zinc-200 text-sm md:text-base leading-relaxed'
                        >
                            Where tradition, innovation, and quality come together to create timeless pieces.
                        </motion.p>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator (Bottom Right) */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-8 right-6 md:right-12 z-20 flex flex-col items-center gap-2 text-white/50"
            >
                <span className="text-xs uppercase tracking-widest origin-center rotate-90 mb-8">Scroll</span>
                <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
                    <motion.div 
                        animate={{ y:[0, 50, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-full h-1/2 bg-white absolute top-0 left-0"
                    />
                </div>
            </motion.div>
        </div>
    );
}

export default Hero;