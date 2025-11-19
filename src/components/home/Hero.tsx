'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const specialties = [
        'Telecomunicaciones',
        'Infraestructura y Metalmecanica',
        'Cableado y Fibra Óptica',
        'Fabricación de tableros'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % specialties.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="home relative min-h-screen flex items-center">
            {/* Background Videos */}
            <div className="home-vid absolute inset-0 z-0">
                <div className="vid-container relative w-full h-full overflow-hidden">
                    {/* Poster image with priority - fades out when video loads */}
                    <Image
                        src="/img/A1_Inicio/telecom.jpg"
                        alt="Highcom Background"
                        fill
                        priority
                        quality={75}
                        sizes="100vw"
                        className={`object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                    />
                    {/* Video loads after */}
                    <video
                        className="background-video absolute w-full h-full object-cover opacity-0 transition-opacity duration-1000"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onLoadedData={(e) => {
                            e.currentTarget.style.opacity = '0.6';
                            setVideoLoaded(true);
                        }}
                    >
                        <source src="/vid/A1_Inicio/Video de página principal HIGHCOM.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/50 z-[1]"></div>

            {/* Content */}
            <div className="home-contect scroll-scale relative z-10 px-[10%] py-20 max-w-[800px]">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    HIGHCOM CALA SAS
                </h1>

                <div className="change-text mb-6">
                    <h3 className="text-xl md:text-2xl mb-2">Nuestras especialidades</h3>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0dc959] min-h-[60px]">
                        {specialties.map((specialty, index) => (
                            <span
                                key={index}
                                className={`word absolute transition-opacity duration-500 ${index === currentWordIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                {specialty}
                            </span>
                        ))}
                    </h3>
                </div>

                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    HIGHCOM ® inicia operaciones en la ciudad de Bogotá en el mes de Septiembre del 2009
                    con el objeto de brindar soluciones de comunicaciones para clientes del sector gubernamental
                    y para algunas multinacionales que operan en el sector industrial colombiano.
                </p>

                <div className="info-box mb-6">
                    <div className="email-info">
                        <h5 className="text-sm font-semibold mb-1">Email:</h5>
                        <span className="text-[#0dc959]">info@highcom.co</span>
                    </div>
                </div>

                <div className="btn-box flex flex-wrap gap-4 mb-8">
                    <a
                        href="/pdf/portafoliohighcom.pdf"
                        download="PRESENTACIÓN HIGHCOM"
                        className="btn px-8 py-3 bg-[#0dc959] text-white font-bold rounded-lg hover:bg-[#0ba047] transition-colors"
                    >
                        Descargar info
                    </a>
                    <a
                        href="mailto:info@highcom.co"
                        className="btn px-8 py-3 border-2 border-[#0dc959] text-[#0dc959] font-bold rounded-lg hover:bg-[#0dc959] hover:text-white transition-colors"
                    >
                        Contáctenos
                    </a>
                </div>

                <div className="social-icons flex gap-4">
                    <a
                        href="https://www.instagram.com/highcom1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#0dc959] rounded-full transition-colors"
                    >
                        <i className="fa-brands fa-instagram text-xl"></i>
                    </a>
                    <a
                        href="mailto:info@highcom.co"
                        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#0dc959] rounded-full transition-colors"
                    >
                        <i className="fa-solid fa-envelope text-xl"></i>
                    </a>
                    <a
                        href="https://web.whatsapp.com/send?phone=573174817920"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-[#0dc959] rounded-full transition-colors"
                    >
                        <i className="fa-solid fa-phone text-xl"></i>
                    </a>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                className="whatsapp-icon fixed bottom-8 right-8 z-50 flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all group"
                href="https://web.whatsapp.com/send?phone=573174817920"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="fab fa-whatsapp text-3xl animate-bounce"></i>
                <span className="contact-text font-bold hidden group-hover:inline-block">CONTÁCTENOS</span>
            </a>
        </section>
    );
}
