'use client'

import Wrapper from "@/components/home/Wrapper"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useT } from "@/lib/i18n/useT"

const translate: any = {
    initial: { y: '100%', opacity: 0 },
    enter: () => ({ y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }),
    exit: () => ({ y: '100%', opacity: 0, transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }),
}

const offerImages = [
    '/images/about/craft.jpg',
    '/images/about/prim.jpg',
    '/images/about/sustain.jpg',
    '/images/about/custom.jpg',
    '/images/about/genu.webp',
]

export default function AboutContent() {
    const t = useT()

    const offers = [
        { title: t('offer1_title'), desc: t('offer1_desc'), img: offerImages[0] },
        { title: t('offer2_title'), desc: t('offer2_desc'), img: offerImages[1] },
        { title: t('offer3_title'), desc: t('offer3_desc'), img: offerImages[2] },
        { title: t('offer4_title'), desc: t('offer4_desc'), img: offerImages[3] },
        { title: t('offer5_title'), desc: t('offer5_desc'), img: offerImages[4] },
    ]

    return (
        <div className="my-16 flex flex-col gap-16 max-w-screen">
            <Wrapper>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-[1.61fr_1fr]">
                    <div className="flex flex-col">
                        <div className="overflow-hidden">
                            <motion.h1
                                custom={[0.3, 0]}
                                variants={translate}
                                initial="initial"
                                whileInView="enter"
                                exit="exit"
                                className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                            >
                                {t('about_title')}
                            </motion.h1>
                        </div>
                        <div className="font-sans flex flex-col gap-4">
                            <p>{t('about_p1')}</p>
                            <p>{t('about_p2')}</p>
                        </div>
                    </div>
                    <div className="w-full h-full text-black p-4 md:border-l border-primary md:mt-16">
                        <div className="pb-8 border-b border-primary">
                            <h2 className="text-3xl font-bold mb-8">{t('about_vision_title')}</h2>
                            <p className="font-sans">{t('about_vision_text')}</p>
                        </div>
                        <div className="my-8">
                            <h2 className="text-3xl font-bold mb-8">{t('about_mission_title')}</h2>
                            <p className="font-sans">{t('about_mission_text')}</p>
                        </div>
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <div>
                    <div className="overflow-hidden">
                        <motion.h2
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                        >
                            {t('about_why_title')}
                        </motion.h2>
                    </div>
                    <p className="font-sans mt-8">{t('about_why_text')}</p>
                    <div className="font-sans mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {offers.map((o, i) => (
                            <div key={i} className="overflow-hidden relative py-8 gap-8 p-4 grid grid-rows-[2fr_1fr] bg-white shadow hover:scale-105 transition-all">
                                <div className="overflow-hidden border rounded-xl h-full w-full">
                                    <Image width={500} height={500} alt={o.title} className="w-full h-full object-cover" src={o.img} />
                                </div>
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-3xl">{o.title}</h3>
                                    <p className="text-primary/80">{o.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <div id="certifications">
                    <div className="overflow-hidden">
                        <motion.h2
                            custom={[0.3, 0]}
                            variants={translate}
                            initial="initial"
                            whileInView="enter"
                            exit="exit"
                            className="whitespace-nowrap w-fit text-5xl md:text-[10vw]"
                        >
                            {t('about_cert_title')}
                        </motion.h2>
                    </div>
                    <div className="font-sans mt-16 border-t border-primary flex justify-center items-center">
                        <Image width={1000} height={500} alt="Euro International BLC Leather Technology Centre UK Certification" src="/images/about/scrti.jpeg" />
                    </div>
                </div>
            </Wrapper>

            <Wrapper>
                <div className="rounded-xl border border-primary w-full h-[50vh] flex justify-center items-center gap-8 flex-col p-4">
                    <div className="bg-primary w-24 h-1 rounded-full" />
                    <h2 className="font-bold text-5xl uppercase text-center md:text-left">
                        {t('about_cta')}
                    </h2>
                    <Link className="p-4 px-16 rounded-full bg-primary text-white font-sans font-bold w-fit hover:bg-primary/50" href="/contact">
                        {t('about_cta_btn')}
                    </Link>
                </div>
            </Wrapper>
        </div>
    )
}
