'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    titleBack: string;
    highlightText: string;
    description: string;
    image: string;
    link: string;
    icon: string;
}

function ServiceCard({ title, titleBack, highlightText, description, image, link, icon }: ServiceCardProps) {
    return (
        <div className="flip-container_services perspective-1000">
            <div className="card_services relative w-[335px] h-[335px] m-[15px] transition-transform duration-1000 transform-style-3d group hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="front_services absolute w-full h-full backface-hidden flex items-center justify-center rounded-[10px] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                    <h1 className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-2xl font-bold text-center px-4">
                        {title}
                    </h1>
                </div>

                {/* Back */}
                <div className="back_services absolute w-full h-full backface-hidden [transform:rotateY(180deg)] bg-gradient-to-br from-white/30 to-white/30 backdrop-blur-[21px] border border-white/16 rounded-[10px] p-[10px] flex flex-col items-center justify-center shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover absolute top-0 left-0 rounded-[10px] opacity-20"
                    />
                    <div className="relative z-10 text-center px-4">
                        <i className={`${icon} text-4xl mb-4 text-[#0dc959]`}></i>
                        <h1 className="text-2xl font-bold mb-4">
                            {titleBack}<span className="text-[#0dc959]">{highlightText}</span>
                        </h1>
                        <p className="text-sm leading-relaxed mb-6 text-gray-200">
                            {description}
                        </p>
                        <div className="btn-box services-btn">
                            <Link
                                href={link}
                                className="btn inline-flex justify-center items-center px-6 py-2 bg-[#0dc959] text-[#292e33] font-bold rounded-md hover:bg-[#0ba047] transition-colors"
                            >
                                Leer más
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Services() {
    const services = [
        {
            title: 'Telecomunicaciones',
            titleBack: 'Tele',
            highlightText: 'comunicaciones',
            description: 'Ofrecemos a nivel nacional y del área andina la comercialización, montaje, instalación, configuración, pruebas y puesta en servicio de equipos de transmisión y acceso para redes de telecomunicaciones fijas y móviles.',
            image: '/img/A1_Inicio/telecom.jpg',
            link: '/telecomunicaciones',
            icon: 'fa-solid fa-phone'
        },
        {
            title: 'Infraestructura y Metalmecánica',
            titleBack: 'Infraestructura y',
            highlightText: ' Metalmecánica',
            description: 'Ofrecemos a nivel nacional y del área andina la comercialización, montaje, instalación, configuración, pruebas y puesta en servicio de equipos de transmisión y acceso para redes de telecomunicaciones fijas y móviles.',
            image: '/img/A1_Inicio/estruc.jpg',
            link: '/infraestructura',
            icon: 'fa-solid fa-lock'
        },
        {
            title: 'Cableado y Fibra Óptica',
            titleBack: 'Cableado y ',
            highlightText: 'Fibra Óptica',
            description: 'Ofrecemos a nivel nacional y del área andina la comercialización, montaje, instalación, configuración, pruebas y puesta en servicio de equipos de transmisión y acceso para redes de telecomunicaciones fijas y móviles.',
            image: '/img/A1_Inicio/fibra.png',
            link: '/cableado-fo',
            icon: 'fa-solid fa-check'
        },
        {
            title: 'Fabricación de Tableros',
            titleBack: 'Fabricación de ',
            highlightText: 'Tableros',
            description: 'Ofrecemos a nivel nacional y del área andina la comercialización, montaje, instalación, configuración, pruebas y puesta en servicio de equipos de transmisión y acceso para redes de telecomunicaciones fijas y móviles.',
            image: '/img/A1_Inicio/tableros.jpg',
            link: '/tableros',
            icon: 'fa-solid fa-tower-cell'
        }
    ];

    return (
        <section id="services" className="servicessec py-20 px-[10%] bg-[#1f2327]">
            <div className="titulo_produc text-center mb-16">
                <div className="header-section2">
                    <span className="text-lg text-gray-400 uppercase tracking-wider">¿Qué ofrecemos?</span>
                    <h2 className="title text-4xl md:text-5xl font-bold mt-2">
                        Soluciones | Servicios | Productos
                    </h2>
                </div>
            </div>

            <div className="section-services scroll-bottom">
                <div className="todo_services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 justify-center items-center">
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
