(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/LenisScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$17_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lenis@1.3.17_react@19.1.0/node_modules/lenis/dist/lenis-react.mjs [app-client] (ecmascript)");
"use client";
;
;
function LenisScroll(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lenis$40$1$2e$3$2e$17_react$40$19$2e$1$2e$0$2f$node_modules$2f$lenis$2f$dist$2f$lenis$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            lerp: 0.01,
            duration: 2.5,
            smoothWheel: true,
            touchMultiplier: 2,
            autoResize: true
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/LenisScroll.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = LenisScroll;
const __TURBOPACK__default__export__ = LenisScroll;
var _c;
__turbopack_context__.k.register(_c, "LenisScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLang",
    ()=>useLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const Ctx = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lang: 'en',
    setLang: ()=>{}
});
function LanguageProvider(param) {
    let { children } = param;
    _s();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const saved = localStorage.getItem('site-language');
            if (saved && [
                'en',
                'es',
                'fr',
                'de'
            ].includes(saved)) setLangState(saved);
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            document.documentElement.lang = lang;
        }
    }["LanguageProvider.useEffect"], [
        lang
    ]);
    const setLang = (l)=>{
        setLangState(l);
        localStorage.setItem('site-language', l);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Ctx.Provider, {
        value: {
            lang,
            setLang
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/lib/i18n/LanguageContext.tsx",
        lineNumber: 31,
        columnNumber: 10
    }, this);
}
_s(LanguageProvider, "vsi+cAwKNDLc/5QxOEKF+V7y0xo=");
_c = LanguageProvider;
function useLang() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Ctx);
}
_s1(useLang, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/i18n/translations/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero_eyebrow\":\"Premium Handcrafted\",\"hero_headline_1\":\"Leather &\",\"hero_headline_2\":\"Leather Goods\",\"hero_subtext\":\"Where tradition, innovation, and quality come together to create timeless pieces.\",\"hero_contact_btn\":\"Contact\",\"hero_connect_title\":\"Connect With Us.\",\"hero_tannery_label\":\"Tannery Address\",\"hero_factory_label\":\"Factory Address\",\"hero_email_label\":\"Email Address\",\"hero_phone_label\":\"Phone Number\",\"hero_scroll\":\"Scroll\",\"section1_eyebrow\":\"The Heritage\",\"section1_heading\":\"Crafting Excellence in Leather Goods.\",\"section1_p1\":\"Euro International was incepted in the year 1999 and is located in Kolkata. The company is one of the renowned Manufacturers, Suppliers, and Exporters of premium Leather Products.\",\"section1_p2\":\"As a Government Of India recognised manufacturing house, we are a well-knit family of experienced and knowledgeable personnel. Being professionally managed and globally accepted, we specialize in luxury leather bags, wallets, and gloves, engaging in the manufacturing and exporting of a wide range of products across various countries.\",\"section1_p3\":\"Euro International has steadily geared along the line of growth and development. Our brand name is widely acclaimed by worldwide customers for uncompromising quality and timeless craftsmanship.\",\"section1_cta\":\"Inquire Now\",\"section2_eyebrow\":\"Innovation\",\"section2_heading_1\":\"Designed To\",\"section2_heading_2\":\"Grow With You.\",\"section2_col1_label\":\"01 / Expertise\",\"section2_col1_text\":\"Innovation through collaboration. With 27+ years of sourcing and product development expertise, Euro International is the engine behind your next collection.\",\"section2_col2_label\":\"02 / Global Vision\",\"section2_col2_text\":\"From our design base in Spain to style capitals across the globe, we capture what's next so you can offer it to your audience first.\",\"section2_col3_label\":\"03 / Flexibility\",\"section2_col3_text\":\"We specialize in exclusive designs and flexible low-MOQ production, making it easier than ever to bring extraordinary ideas to life. Let's start building your brand's future today.\",\"experience_eyebrow\":\"Our Legacy\",\"experience_years\":\"27+ years\",\"experience_word\":\"Experience\",\"experience_desc\":\"Over two decades of mastering the art of premium leather craftsmanship, driving global trends, and delivering uncompromising quality.\",\"getintouch_badge\":\"• Let's Work Together • Contact Us\",\"getintouch_line1\":\"Get In\",\"getintouch_line2\":\"Touch\",\"about_title\":\"About us.\",\"about_p1\":\"Euro International is a premier leather goods manufacturer and export house of international repute based at Kolkata Leather Complex, India, engaged in the manufacture and export of high-fashion leather bags and accessories, both for men and women. Since our establishment in 1999, we have deeply embedded the principles of excellence and kaizen to provide high quality products at a reasonable cost to our customers.\",\"about_p2\":\"Given our focus on quality, we are proudly affiliated as a technical associate of BLC Leather Technology Centre, U.K. The partnership has helped us to keep a strict vigil on our quality parameters and has kept them at par with international standards. As a result of our work on quality and on-time delivery, we have been able to serve the world's leading retailers for over 20 years.\",\"about_vision_title\":\"Our Vision\",\"about_vision_text\":\"Even today, the tag 'Made in India' is looked down upon on a global level. Over the years, through our craftsmanship and strict attention to detail, we aim to change this narrative.\",\"about_mission_title\":\"Our Mission\",\"about_mission_text\":\"To help uphold the trust and relationship that brands have built with their customers over the years, and overdeliver every step of the way.\",\"about_why_title\":\"Why choose us.\",\"about_why_text\":\"We hand‑make premium leather goods using full‑grain hides and time‑tested techniques—delivering durability, comfort, and character that only improves with age.\",\"about_cert_title\":\"Certifications.\",\"about_cta\":\"ready to make something amazing?\",\"about_cta_btn\":\"Get In Touch\",\"offer1_title\":\"Generational Craftsmanship\",\"offer1_desc\":\"Hand-selected hides and hand‑stitched panels by master artisans.\",\"offer2_title\":\"Premium Materials\",\"offer2_desc\":\"Only full‑grain, responsibly tanned leather for lasting character.\",\"offer3_title\":\"Sustainable Vision\",\"offer3_desc\":\"Small‑batch production and waste‑reducing cutting patterns.\",\"offer4_title\":\"Customization at Scale\",\"offer4_desc\":\"From monograms to private‑label, we make your ideas tangible.\",\"offer5_title\":\"Lifetime Promise\",\"offer5_desc\":\"Complimentary repairs and re‑conditioning so it ages beautifully.\",\"contact_title\":\"Let's Talk.\",\"contact_subtitle\":\"Have a question or want to start a collaboration? Drop us an email or fill out the form below. We'd love to hear from you.\",\"contact_email_label\":\"Email\",\"contact_phone_label\":\"Phone\",\"contact_follow_label\":\"Follow Us\",\"contact_name_label\":\"Your Name\",\"contact_email_input\":\"Email Address\",\"contact_subject_label\":\"Subject\",\"contact_message_label\":\"Your Message\",\"contact_send_btn\":\"Send Message\",\"contact_sending_btn\":\"Opening Mail App…\",\"contact_copyright\":\"© {year} Euro International. All Rights Reserved.\",\"contact_developer\":\"Developed by BlueAurora Labs\",\"cookie_title\":\"Cookies\",\"cookie_text_before\":\"We use cookies to enhance your browsing experience and analyse site traffic. Read our\",\"cookie_policy_link\":\"Cookies Policy\",\"cookie_text_after\":\"to learn more.\",\"cookie_accept\":\"Accept All\",\"cookie_decline\":\"Decline\",\"cookie_close\":\"Close\",\"slider_eyebrow\":\"Sustainability\",\"slider_heading_before\":\"At the heart of our craft is our own\",\"slider_heading_after\":\"Certified Tannery.\",\"slider_desc\":\"By managing our own production, we ensure complete transparency and superior quality in every hide. Our dedicated global team sources a diverse palette of materials from European and Asian markets, ensuring strict REACH safety regulations are met.\",\"slider_drag\":\"Drag to explore\"}"));}),
"[project]/src/lib/i18n/translations/es.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero_eyebrow\":\"Artesanía Premium\",\"hero_headline_1\":\"Cuero y\",\"hero_headline_2\":\"Artículos de Cuero\",\"hero_subtext\":\"Donde la tradición, la innovación y la calidad se unen para crear piezas atemporales.\",\"hero_contact_btn\":\"Contacto\",\"hero_connect_title\":\"Conéctate con Nosotros.\",\"hero_tannery_label\":\"Dirección de la Curtiduría\",\"hero_factory_label\":\"Dirección de la Fábrica\",\"hero_email_label\":\"Correo Electrónico\",\"hero_phone_label\":\"Número de Teléfono\",\"hero_scroll\":\"Desplazar\",\"section1_eyebrow\":\"El Legado\",\"section1_heading\":\"Artesanía de Excelencia en Artículos de Cuero.\",\"section1_p1\":\"Euro International fue fundada en 1999 y está ubicada en Kolkata. La empresa es uno de los reconocidos fabricantes, proveedores y exportadores de productos de cuero premium.\",\"section1_p2\":\"Como casa de manufactura reconocida por el Gobierno de India, somos una familia unida de personal experimentado y capacitado. Gestionados profesionalmente y aceptados globalmente, nos especializamos en bolsos de cuero de lujo, billeteras y guantes.\",\"section1_p3\":\"Euro International ha avanzado constantemente en la senda del crecimiento y el desarrollo. Nuestro nombre de marca es ampliamente reconocido por clientes de todo el mundo por su calidad sin compromiso y artesanía atemporal.\",\"section1_cta\":\"Consultar Ahora\",\"section2_eyebrow\":\"Innovación\",\"section2_heading_1\":\"Diseñado para\",\"section2_heading_2\":\"Crecer Contigo.\",\"section2_col1_label\":\"01 / Experiencia\",\"section2_col1_text\":\"Innovación a través de la colaboración. Con más de 27 años de experiencia en abastecimiento y desarrollo de productos, Euro International es el motor detrás de tu próxima colección.\",\"section2_col2_label\":\"02 / Visión Global\",\"section2_col2_text\":\"Desde nuestra base de diseño en España hasta las capitales de la moda en todo el mundo, capturamos lo que viene para que puedas ofrecerlo a tu audiencia primero.\",\"section2_col3_label\":\"03 / Flexibilidad\",\"section2_col3_text\":\"Nos especializamos en diseños exclusivos y producción flexible con MOQ bajo. Comencemos a construir el futuro de tu marca hoy.\",\"experience_eyebrow\":\"Nuestro Legado\",\"experience_years\":\"27+ años\",\"experience_word\":\"Experiencia\",\"experience_desc\":\"Más de dos décadas dominando el arte de la artesanía en cuero premium, impulsando tendencias globales y entregando calidad sin compromiso.\",\"getintouch_badge\":\"• Trabajemos Juntos • Contáctanos\",\"getintouch_line1\":\"Ponte en\",\"getintouch_line2\":\"Contacto\",\"about_title\":\"Sobre Nosotros.\",\"about_p1\":\"Euro International es un fabricante y casa de exportación de artículos de cuero de primer nivel y reputación internacional, ubicada en el Complejo de Cuero de Kolkata, India. Desde nuestra fundación en 1999, hemos incorporado los principios de excelencia y kaizen para proporcionar productos de alta calidad a un costo razonable.\",\"about_p2\":\"Dada nuestra atención a la calidad, estamos afiliados como asociados técnicos del Centro de Tecnología del Cuero BLC, Reino Unido. Esta asociación nos ha ayudado a mantener una estricta vigilancia de nuestros parámetros de calidad al nivel de los estándares internacionales.\",\"about_vision_title\":\"Nuestra Visión\",\"about_vision_text\":\"Aún hoy, la etiqueta 'Made in India' es menospreciada a nivel global. A lo largo de los años, a través de nuestra artesanía y estricta atención al detalle, nuestro objetivo es cambiar esta narrativa.\",\"about_mission_title\":\"Nuestra Misión\",\"about_mission_text\":\"Ayudar a mantener la confianza y la relación que las marcas han construido con sus clientes a lo largo de los años, y superar las expectativas en cada paso del camino.\",\"about_why_title\":\"¿Por Qué Elegirnos?\",\"about_why_text\":\"Fabricamos artículos de cuero premium a mano usando cueros de grano completo y técnicas probadas, entregando durabilidad, comodidad y carácter que solo mejora con el tiempo.\",\"about_cert_title\":\"Certificaciones.\",\"about_cta\":\"¿Listo para crear algo increíble?\",\"about_cta_btn\":\"Ponerse en Contacto\",\"offer1_title\":\"Artesanía Generacional\",\"offer1_desc\":\"Pieles seleccionadas a mano y paneles cosidos a mano por maestros artesanos.\",\"offer2_title\":\"Materiales Premium\",\"offer2_desc\":\"Solo cuero de grano completo, curtido responsablemente para un carácter duradero.\",\"offer3_title\":\"Visión Sostenible\",\"offer3_desc\":\"Producción en pequeños lotes y patrones de corte que reducen el desperdicio.\",\"offer4_title\":\"Personalización a Escala\",\"offer4_desc\":\"De monogramas a marca privada, hacemos tangibles tus ideas.\",\"offer5_title\":\"Promesa de por Vida\",\"offer5_desc\":\"Reparaciones y reacondicionamiento gratuitos para que envejezca hermosamente.\",\"contact_title\":\"Hablemos.\",\"contact_subtitle\":\"¿Tienes una pregunta o quieres iniciar una colaboración? Envíanos un correo o completa el formulario a continuación. Nos encantaría escucharte.\",\"contact_email_label\":\"Correo\",\"contact_phone_label\":\"Teléfono\",\"contact_follow_label\":\"Síguenos\",\"contact_name_label\":\"Tu Nombre\",\"contact_email_input\":\"Correo Electrónico\",\"contact_subject_label\":\"Asunto\",\"contact_message_label\":\"Tu Mensaje\",\"contact_send_btn\":\"Enviar Mensaje\",\"contact_sending_btn\":\"Abriendo Aplicación de Correo…\",\"contact_copyright\":\"© {year} Euro International. Todos los derechos reservados.\",\"contact_developer\":\"Desarrollado por BlueAurora Labs\",\"cookie_title\":\"Cookies\",\"cookie_text_before\":\"Usamos cookies para mejorar tu experiencia de navegación y analizar el tráfico del sitio. Lee nuestra\",\"cookie_policy_link\":\"Política de Cookies\",\"cookie_text_after\":\"para saber más.\",\"cookie_accept\":\"Aceptar Todo\",\"cookie_decline\":\"Rechazar\",\"cookie_close\":\"Cerrar\",\"slider_eyebrow\":\"Sostenibilidad\",\"slider_heading_before\":\"En el corazón de nuestra artesanía está nuestra propia\",\"slider_heading_after\":\"Curtiduría Certificada.\",\"slider_desc\":\"Al gestionar nuestra propia producción, garantizamos transparencia completa y calidad superior en cada piel. Nuestro equipo global abastece materiales de mercados europeos y asiáticos, asegurando el cumplimiento de las estrictas regulaciones de seguridad REACH.\",\"slider_drag\":\"Arrastra para explorar\"}"));}),
"[project]/src/lib/i18n/translations/fr.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero_eyebrow\":\"Artisanat Premium\",\"hero_headline_1\":\"Cuir et\",\"hero_headline_2\":\"Maroquinerie\",\"hero_subtext\":\"Là où la tradition, l'innovation et la qualité se rejoignent pour créer des pièces intemporelles.\",\"hero_contact_btn\":\"Contact\",\"hero_connect_title\":\"Contactez-Nous.\",\"hero_tannery_label\":\"Adresse de la Tannerie\",\"hero_factory_label\":\"Adresse de l'Usine\",\"hero_email_label\":\"Adresse Email\",\"hero_phone_label\":\"Numéro de Téléphone\",\"hero_scroll\":\"Défiler\",\"section1_eyebrow\":\"L'Héritage\",\"section1_heading\":\"L'Excellence dans la Maroquinerie.\",\"section1_p1\":\"Euro International a été fondée en 1999 et est située à Kolkata. La société est l'un des fabricants, fournisseurs et exportateurs renommés de produits en cuir premium.\",\"section1_p2\":\"En tant que maison de fabrication reconnue par le gouvernement indien, nous sommes une équipe soudée de personnel expérimenté et compétent. Gérés professionnellement et acceptés à l'échelle mondiale, nous nous spécialisons dans les sacs en cuir de luxe, les portefeuilles et les gants.\",\"section1_p3\":\"Euro International a régulièrement progressé sur la voie de la croissance et du développement. Notre marque est largement reconnue par les clients du monde entier pour sa qualité irréprochable et son savoir-faire intemporel.\",\"section1_cta\":\"Nous Contacter\",\"section2_eyebrow\":\"Innovation\",\"section2_heading_1\":\"Conçu pour\",\"section2_heading_2\":\"Évoluer avec Vous.\",\"section2_col1_label\":\"01 / Expertise\",\"section2_col1_text\":\"Innovation par la collaboration. Avec plus de 27 ans d'expertise en approvisionnement et développement de produits, Euro International est le moteur de votre prochaine collection.\",\"section2_col2_label\":\"02 / Vision Globale\",\"section2_col2_text\":\"De notre base de conception en Espagne aux capitales de la mode du monde entier, nous capturons ce qui vient ensuite pour que vous puissiez l'offrir en premier à votre audience.\",\"section2_col3_label\":\"03 / Flexibilité\",\"section2_col3_text\":\"Nous nous spécialisons dans des designs exclusifs et une production flexible avec un MOQ faible. Commençons à construire l'avenir de votre marque aujourd'hui.\",\"experience_eyebrow\":\"Notre Héritage\",\"experience_years\":\"27+ ans\",\"experience_word\":\"Expérience\",\"experience_desc\":\"Plus de deux décennies à maîtriser l'art de la maroquinerie premium, à impulser les tendances mondiales et à livrer une qualité irréprochable.\",\"getintouch_badge\":\"• Travaillons Ensemble • Contactez-Nous\",\"getintouch_line1\":\"Entrons en\",\"getintouch_line2\":\"Contact\",\"about_title\":\"À Propos.\",\"about_p1\":\"Euro International est un fabricant de premier plan et une maison d'exportation de maroquinerie de renommée internationale, basée au Kolkata Leather Complex, en Inde. Depuis notre création en 1999, nous avons profondément intégré les principes d'excellence et de kaizen pour fournir des produits de haute qualité à un coût raisonnable à nos clients.\",\"about_p2\":\"Étant donné notre attention à la qualité, nous sommes fièrement affiliés en tant qu'associé technique du BLC Leather Technology Centre, Royaume-Uni. Ce partenariat nous a aidés à maintenir une surveillance stricte de nos paramètres de qualité au niveau des standards internationaux.\",\"about_vision_title\":\"Notre Vision\",\"about_vision_text\":\"Même aujourd'hui, l'étiquette 'Made in India' est sous-estimée à l'échelle mondiale. Au fil des années, grâce à notre savoir-faire et notre attention stricte aux détails, nous visons à changer ce récit.\",\"about_mission_title\":\"Notre Mission\",\"about_mission_text\":\"Aider à maintenir la confiance et la relation que les marques ont construite avec leurs clients au fil des années, et surpasser les attentes à chaque étape.\",\"about_why_title\":\"Pourquoi Nous Choisir?\",\"about_why_text\":\"Nous fabriquons à la main des articles en cuir premium en utilisant des peaux pleine fleur et des techniques éprouvées, offrant durabilité, confort et caractère qui ne fait que s'améliorer avec l'âge.\",\"about_cert_title\":\"Certifications.\",\"about_cta\":\"Prêt à créer quelque chose d'extraordinaire?\",\"about_cta_btn\":\"Prendre Contact\",\"offer1_title\":\"Artisanat Générationnel\",\"offer1_desc\":\"Peaux sélectionnées à la main et panneaux cousus main par des maîtres artisans.\",\"offer2_title\":\"Matériaux Premium\",\"offer2_desc\":\"Uniquement du cuir pleine fleur, tanné de façon responsable pour un caractère durable.\",\"offer3_title\":\"Vision Durable\",\"offer3_desc\":\"Production en petits lots et patrons de coupe réduisant les déchets.\",\"offer4_title\":\"Personnalisation à Grande Échelle\",\"offer4_desc\":\"Des monogrammes au label privé, nous concrétisons vos idées.\",\"offer5_title\":\"Promesse à Vie\",\"offer5_desc\":\"Réparations et reconditionnement gratuits pour qu'il vieillisse magnifiquement.\",\"contact_title\":\"Parlons.\",\"contact_subtitle\":\"Vous avez une question ou souhaitez démarrer une collaboration ? Envoyez-nous un e-mail ou remplissez le formulaire ci-dessous. Nous serions ravis de vous entendre.\",\"contact_email_label\":\"Email\",\"contact_phone_label\":\"Téléphone\",\"contact_follow_label\":\"Suivez-Nous\",\"contact_name_label\":\"Votre Nom\",\"contact_email_input\":\"Adresse Email\",\"contact_subject_label\":\"Sujet\",\"contact_message_label\":\"Votre Message\",\"contact_send_btn\":\"Envoyer le Message\",\"contact_sending_btn\":\"Ouverture de l'Application Mail…\",\"contact_copyright\":\"© {year} Euro International. Tous droits réservés.\",\"contact_developer\":\"Développé par BlueAurora Labs\",\"cookie_title\":\"Cookies\",\"cookie_text_before\":\"Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site. Lisez notre\",\"cookie_policy_link\":\"Politique de Cookies\",\"cookie_text_after\":\"pour en savoir plus.\",\"cookie_accept\":\"Tout Accepter\",\"cookie_decline\":\"Refuser\",\"cookie_close\":\"Fermer\",\"slider_eyebrow\":\"Durabilité\",\"slider_heading_before\":\"Au cœur de notre savoir-faire se trouve notre propre\",\"slider_heading_after\":\"Tannerie Certifiée.\",\"slider_desc\":\"En gérant notre propre production, nous garantissons une transparence totale et une qualité supérieure dans chaque peau. Notre équipe mondiale s'approvisionne en matériaux variés sur les marchés européens et asiatiques, garantissant le respect des réglementations de sécurité REACH.\",\"slider_drag\":\"Faites glisser pour explorer\"}"));}),
"[project]/src/lib/i18n/translations/de.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"hero_eyebrow\":\"Handgefertigte Premium-Qualität\",\"hero_headline_1\":\"Leder und\",\"hero_headline_2\":\"Lederwaren\",\"hero_subtext\":\"Wo Tradition, Innovation und Qualität zusammenkommen, um zeitlose Stücke zu schaffen.\",\"hero_contact_btn\":\"Kontakt\",\"hero_connect_title\":\"Kontaktiere Uns.\",\"hero_tannery_label\":\"Gerberei-Adresse\",\"hero_factory_label\":\"Fabrikadresse\",\"hero_email_label\":\"E-Mail-Adresse\",\"hero_phone_label\":\"Telefonnummer\",\"hero_scroll\":\"Scrollen\",\"section1_eyebrow\":\"Das Erbe\",\"section1_heading\":\"Exzellenz in der Lederwarenherstellung.\",\"section1_p1\":\"Euro International wurde 1999 gegründet und befindet sich in Kolkata. Das Unternehmen ist einer der renommierten Hersteller, Lieferanten und Exporteure von Premium-Lederwaren.\",\"section1_p2\":\"Als vom indischen Staat anerkanntes Fertigungshaus sind wir ein eingespieltes Team aus erfahrenen und sachkundigen Mitarbeitern. Professionell geführt und global anerkannt, spezialisieren wir uns auf Luxus-Ledertaschen, Geldbörsen und Handschuhe.\",\"section1_p3\":\"Euro International hat sich stetig auf dem Weg des Wachstums und der Entwicklung vorangebracht. Unser Markenname wird von Kunden weltweit für kompromisslose Qualität und zeitlose Handwerkskunst anerkannt.\",\"section1_cta\":\"Jetzt Anfragen\",\"section2_eyebrow\":\"Innovation\",\"section2_heading_1\":\"Entworfen um\",\"section2_heading_2\":\"Mit Ihnen zu Wachsen.\",\"section2_col1_label\":\"01 / Expertise\",\"section2_col1_text\":\"Innovation durch Zusammenarbeit. Mit über 27 Jahren Erfahrung in Beschaffung und Produktentwicklung ist Euro International der Motor hinter Ihrer nächsten Kollektion.\",\"section2_col2_label\":\"02 / Globale Vision\",\"section2_col2_text\":\"Von unserer Designbasis in Spanien bis zu den Modezentren der Welt erfassen wir, was als nächstes kommt, damit Sie es Ihrem Publikum als erstes anbieten können.\",\"section2_col3_label\":\"03 / Flexibilität\",\"section2_col3_text\":\"Wir spezialisieren uns auf exklusive Designs und flexible Produktion mit niedrigem MOQ. Beginnen wir heute damit, die Zukunft Ihrer Marke aufzubauen.\",\"experience_eyebrow\":\"Unser Vermächtnis\",\"experience_years\":\"27+ Jahre\",\"experience_word\":\"Erfahrung\",\"experience_desc\":\"Über zwei Jahrzehnte der Meisterschaft in der Premium-Lederhandwerkskunst, dem Antrieb globaler Trends und der Lieferung kompromissloser Qualität.\",\"getintouch_badge\":\"• Arbeiten Wir Zusammen • Kontaktieren Sie Uns\",\"getintouch_line1\":\"In Kontakt\",\"getintouch_line2\":\"Treten\",\"about_title\":\"Über Uns.\",\"about_p1\":\"Euro International ist ein erstklassiger Lederwaren-Hersteller und Exporthaus von internationalem Ruf, ansässig im Kolkata Leather Complex, Indien. Seit unserer Gründung im Jahr 1999 haben wir die Prinzipien der Exzellenz und Kaizen tief verankert, um unseren Kunden hochwertige Produkte zu einem vernünftigen Preis zu liefern.\",\"about_p2\":\"Angesichts unseres Fokus auf Qualität sind wir stolz als technischer Partner des BLC Leather Technology Centre, Großbritannien, angeschlossen. Diese Partnerschaft hat uns geholfen, unsere Qualitätsparameter streng zu überwachen und auf dem Niveau internationaler Standards zu halten.\",\"about_vision_title\":\"Unsere Vision\",\"about_vision_text\":\"Noch heute wird das Label 'Made in India' auf globaler Ebene unterschätzt. Im Laufe der Jahre möchten wir durch unsere Handwerkskunst und strenge Liebe zum Detail diese Erzählung ändern.\",\"about_mission_title\":\"Unsere Mission\",\"about_mission_text\":\"Dabei zu helfen, das Vertrauen und die Beziehung zu erhalten, die Marken im Laufe der Jahre mit ihren Kunden aufgebaut haben, und auf jedem Schritt die Erwartungen zu übertreffen.\",\"about_why_title\":\"Warum Uns Wählen?\",\"about_why_text\":\"Wir fertigen Premium-Lederwaren von Hand mit Vollnarbenleder und bewährten Techniken – und liefern Haltbarkeit, Komfort und Charakter, der mit dem Alter nur besser wird.\",\"about_cert_title\":\"Zertifizierungen.\",\"about_cta\":\"Bereit, etwas Erstaunliches zu schaffen?\",\"about_cta_btn\":\"Kontakt Aufnehmen\",\"offer1_title\":\"Generationenhandwerk\",\"offer1_desc\":\"Handverlesene Häute und handgenähte Paneele von Meisterhandwerkern.\",\"offer2_title\":\"Premium-Materialien\",\"offer2_desc\":\"Nur Vollnarbenleder, verantwortungsvoll gegerbt für dauerhaften Charakter.\",\"offer3_title\":\"Nachhaltige Vision\",\"offer3_desc\":\"Kleinserienfertigung und abfallreduzierende Schnittmuster.\",\"offer4_title\":\"Individualisierung in Großserie\",\"offer4_desc\":\"Von Monogrammen bis zur Eigenmarke – wir machen Ihre Ideen greifbar.\",\"offer5_title\":\"Lebenslange Garantie\",\"offer5_desc\":\"Kostenlose Reparaturen und Aufbereitung, damit es schön altert.\",\"contact_title\":\"Reden Wir.\",\"contact_subtitle\":\"Haben Sie eine Frage oder möchten Sie eine Zusammenarbeit starten? Schreiben Sie uns eine E-Mail oder füllen Sie das Formular unten aus. Wir freuen uns, von Ihnen zu hören.\",\"contact_email_label\":\"E-Mail\",\"contact_phone_label\":\"Telefon\",\"contact_follow_label\":\"Folgen Sie Uns\",\"contact_name_label\":\"Ihr Name\",\"contact_email_input\":\"E-Mail-Adresse\",\"contact_subject_label\":\"Betreff\",\"contact_message_label\":\"Ihre Nachricht\",\"contact_send_btn\":\"Nachricht Senden\",\"contact_sending_btn\":\"E-Mail-App wird geöffnet…\",\"contact_copyright\":\"© {year} Euro International. Alle Rechte vorbehalten.\",\"contact_developer\":\"Entwickelt von BlueAurora Labs\",\"cookie_title\":\"Cookies\",\"cookie_text_before\":\"Wir verwenden Cookies, um Ihr Browsing-Erlebnis zu verbessern und den Website-Verkehr zu analysieren. Lesen Sie unsere\",\"cookie_policy_link\":\"Cookie-Richtlinie\",\"cookie_text_after\":\"um mehr zu erfahren.\",\"cookie_accept\":\"Alle Akzeptieren\",\"cookie_decline\":\"Ablehnen\",\"cookie_close\":\"Schließen\",\"slider_eyebrow\":\"Nachhaltigkeit\",\"slider_heading_before\":\"Im Herzen unserer Handwerkskunst liegt unsere eigene\",\"slider_heading_after\":\"Zertifizierte Gerberei.\",\"slider_desc\":\"Durch die Verwaltung unserer eigenen Produktion stellen wir vollständige Transparenz und überlegene Qualität bei jeder Haut sicher. Unser engagiertes globales Team bezieht Materialien aus europäischen und asiatischen Märkten und gewährleistet die Einhaltung strenger REACH-Sicherheitsvorschriften.\",\"slider_drag\":\"Zum Erkunden ziehen\"}"));}),
"[project]/src/lib/i18n/useT.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/en.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$es$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/es.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$fr$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/fr.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$de$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/translations/de.json (json)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const dicts = {
    en: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$en$2e$json__$28$json$29$__["default"],
    es: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$es$2e$json__$28$json$29$__["default"],
    fr: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$fr$2e$json__$28$json$29$__["default"],
    de: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$de$2e$json__$28$json$29$__["default"]
};
function useT() {
    _s();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"])();
    const dict = dicts[lang];
    return (key)=>{
        var _dict_key, _ref;
        return (_ref = (_dict_key = dict[key]) !== null && _dict_key !== void 0 ? _dict_key : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$translations$2f$en$2e$json__$28$json$29$__["default"][key]) !== null && _ref !== void 0 ? _ref : key;
    };
}
_s(useT, "BpHATZRBXYqVpOgCf2HLIdSY7VA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLang"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.542.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.542.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/i18n/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CookieConsent() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            const consent = localStorage.getItem('cookie-consent');
            if (!consent) {
                const timer = setTimeout({
                    "CookieConsent.useEffect.timer": ()=>setVisible(true)
                }["CookieConsent.useEffect.timer"], 2000);
                return ({
                    "CookieConsent.useEffect": ()=>clearTimeout(timer)
                })["CookieConsent.useEffect"];
            }
        }
    }["CookieConsent.useEffect"], []);
    const accept = ()=>{
        localStorage.setItem('cookie-consent', 'accepted');
        setVisible(false);
    };
    const decline = ()=>{
        localStorage.setItem('cookie-consent', 'declined');
        setVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 24,
                scale: 0.97
            },
            animate: {
                opacity: 1,
                y: 0,
                scale: 1
            },
            exit: {
                opacity: 0,
                y: 16,
                scale: 0.97
            },
            transition: {
                duration: 0.45,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            className: "fixed bottom-6 right-6 z-9999 w-[calc(100vw-3rem)] max-w-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-zinc-950 border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black/40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between gap-3 mb-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                            className: "w-4 h-4 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CookieConsent.tsx",
                                            lineNumber: 45,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold tracking-widest text-sm uppercase",
                                        children: t('cookie_title')
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CookieConsent.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: decline,
                                "aria-label": t('cookie_close'),
                                className: "text-zinc-500 hover:text-white transition-colors mt-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CookieConsent.tsx",
                                    lineNumber: 52,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CookieConsent.tsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-zinc-400 text-sm leading-relaxed mb-4",
                        children: [
                            t('cookie_text_before'),
                            ' ',
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cookies-policy",
                                className: "text-white underline underline-offset-2 hover:text-zinc-300 transition-colors",
                                children: t('cookie_policy_link')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 58,
                                columnNumber: 15
                            }, this),
                            ' ',
                            t('cookie_text_after')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CookieConsent.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: accept,
                                className: "flex-1 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-bold font-sans uppercase tracking-widest hover:bg-zinc-200 transition-colors",
                                children: t('cookie_accept')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: decline,
                                className: "flex-1 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-xs font-sans uppercase tracking-widest hover:border-zinc-500 hover:text-white transition-colors",
                                children: t('cookie_decline')
                            }, void 0, false, {
                                fileName: "[project]/src/components/CookieConsent.tsx",
                                lineNumber: 71,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CookieConsent.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CookieConsent.tsx",
                lineNumber: 41,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/CookieConsent.tsx",
            lineNumber: 34,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/CookieConsent.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(CookieConsent, "bO8aVlCvIIxKBPISthrVzpXUAbo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$i18n$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.5.12_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.542.0_react@19.1.0/node_modules/lucide-react/dist/esm/icons/arrow-up.js [app-client] (ecmascript) <export default as ArrowUp>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScrollToTop() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            const onScroll = {
                "ScrollToTop.useEffect.onScroll": ()=>setVisible(window.scrollY > 400)
            }["ScrollToTop.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "ScrollToTop.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["ScrollToTop.useEffect"];
        }
    }["ScrollToTop.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
            initial: {
                opacity: 0,
                y: 16
            },
            animate: {
                opacity: 1,
                y: 0
            },
            exit: {
                opacity: 0,
                y: 16
            },
            transition: {
                duration: 0.3,
                ease: [
                    0.16,
                    1,
                    0.3,
                    1
                ]
            },
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: 0.95
            },
            onClick: ()=>window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                }),
            "aria-label": "Scroll to top",
            className: "fixed bottom-6 cursor-pointer left-6 z-9998 w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-white flex items-center justify-center shadow-lg hover:bg-zinc-800 transition-colors",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$5$2e$12_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$542$2e$0_react$40$19$2e$1$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUp$3e$__["ArrowUp"], {
                className: "w-5 h-5"
            }, void 0, false, {
                fileName: "[project]/src/components/ScrollToTop.tsx",
                lineNumber: 30,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScrollToTop.tsx",
            lineNumber: 19,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollToTop.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ScrollToTop, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_997325f4._.js.map