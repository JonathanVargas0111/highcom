'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function TelecomProducts() {
    const [activeTab, setActiveTab] = useState(0);

    const products = [
        {
            id: 0,
            name: "Multiplexores IP6704A",
            icon: "/img/iconografia/pash.svg",
            title: "Multiplexores IP6704A",
            features: [
                "Envío de señales entre teleprotecciones o relés de protección a través de sus interfaces C37.94 y E1 (G703).",
                "Amplificador de enlaces ópticos, soportando distancias de hasta 240 Km.",
                "Conversor de múltiples E1s a Fibra óptica Ethernet",
                "Multiplexor TDM cross connect de hasta 10 E1s (G703), puertos RS232, de voz FXS, FXO, E&M, contactos secos para alarmas, G.703 codireccional 64Kbps y 4 puertos Giga bit Ethernet.",
                "Switch Gigabit Ethernet con 4 puertos, soporta VLANs, 803.1Q."
            ],
            extraInfo: "Dentro de las opciones de alimentación se cuenta con: Voltaje DC: -48 Vdc (-36 to -72 Vdc), 125 Vdc. Voltaje AC: 100 a 240 Vac. Soporta enlaces punto a punto y punto a multipunto usando múltiples pseudowire.",
            pdf: "/pdf/Multiplexores/IP6704A-v25-B.PDF",
            pdfName: "IP6704A-v25-B",
            images: [
                "/img/A4_Teleco/Multiplexores(SDH, MPLS-TP)/Multiplexoressdg1.JPG",
                "/img/A4_Teleco/Multiplexores(SDH, MPLS-TP)/Multiplexoressdg4.JPG"
            ]
        },
        {
            id: 1,
            name: "Multiplexores AM3440-E-v7-B",
            icon: "/img/iconografia/pash.svg",
            title: "Multiplexores AM3440-E-v7-B",
            description: "El AM3440-E es un multiplexor compacto de tan solo una unidad de rack 1U y 19 pulgadas, con capacidad de crossconexión de hasta 184Mbps y hasta 64 pseudowires sobre IP. Este equipo es capaz de encapsular TDM sobre IP con diferentes protocolos (SaTOP, CESoPSN y MEF-8) e incorpora dos uplink combo GbE (100/1000FX y 10/100/1000BaseTX).",
            features: [
                "Dispone además de 5 slots para tributarias de baja velocidad y 2 slots para tributarias de alta velocidad (convertibles a baja con un adaptador).",
                "Posee de doble fuente de alimentación 100-240 Vac a -48Vdc extraíbles en caliente y con balanceo de carga.",
                "El AM3440-E incorpora Sync-E en sus puertos Ethernet permitiendo recibir o proporcionar reloj a otros equipos a través de dichas interfaces."
            ],
            pdf: "/pdf/Multiplexores/AM3440-E-v7-B.pdf",
            pdfName: "AM3440-E-v7-B",
            images: [
                "/img/A4_Teleco/MultiplexoresAM3440-E/Multiplexores1.JPG",
                "/img/A4_Teleco/MultiplexoresAM3440-E/Multiplexores2.JPG"
            ]
        },
        {
            id: 2,
            name: "Amplificadores Ópticos",
            icon: "/img/iconografia/FO2.svg",
            title: "Amplificadores Ópticos",
            description: "Los amplificadores ópticos son generalmente usados para establecer enlaces de comunicaciones por fibra óptica superiores a 60 kilómetros de distancia. Su costo depende principalmente del ancho de banda requerido y la distancia a ser alcanzada. En Highcom ofrecemos éstas soluciones de amplificación con anchos de banda desde 64 kbp hasta 100 Gbps, y distancias desde 60 kms hasta 350 kms. Nuestros equipos cumplen con estándares ópticos a nivel Ethernet y C37.94 garantizándose así la compatibilidad con la infraestructura crítica de subestaciones tal como lo son las teleprotecciones, relés y esquemas de protección.",
            images: [
                "/img/A4_Teleco/Amplificadores/IMG_20221222_141141.jpg"
            ]
        },
        {
            id: 3,
            name: "Switch Ethernet Industriales",
            icon: "/img/iconografia/FO4.svg",
            title: "Switch Ethernet Industriales",
            description: "El equipo IP6820 es un switch capa 2 industrial administrable sin ventiladores, ideal para ser usado en ambientes de generación, transporte o distribución de energía eléctrica, cumple con la norma IEC 61850-3.",
            features: [
                "Hasta 10 puertos Giba bit Ethernet",
                "Hasta 8 puertos RS232 / RS485.",
                "Soporta PoE y PoE+ en sus puertos Ethernet en cobre.",
                "Montaje en riel DIN o sobre bandeja.",
                "Protección en anillo RSTP y MSTP.",
                "Alimentación: 48 Vdc (36-72 Vdc) y 24 Vdc (18-36 Vdc)"
            ],
            images: [
                "/img/A4_Teleco/SwitchEthernet/Switch2.jpg",
                "/img/A4_Teleco/SwitchEthernet/Switch1.jpg"
            ]
        },
        {
            id: 4,
            name: "Radioenlaces",
            icon: "/img/iconografia/FO2.svg",
            title: "Radioenlaces",
            description: "Las soluciones de radio Microondas suministradas por Highcom permiten comunicar dos o más sitios con máxima confiabilidad, esto gracias a que los equipos cuentan con redundancia en fuentes de alimentación, equipo de radio frecuencia y procesamiento. La latencia de nuestras soluciones de radio es simétrica y menor a un milisegundo, permitiéndose así la implementación de esquemas de teleprotección o protección diferencial de línea y a la vez brindando un ancho de banda suficiente para la transmisión de aplicaciones como voz y video. Todos los servicios pueden ser segmentados o aislados entre sí mediante el uso de VLANs.",
            images: [
                "/img/A4_Teleco/RADIOS MICROONDAS/RadiosMicro.jpg"
            ]
        },
        {
            id: 5,
            name: "OPLAT, PLP",
            icon: "/img/iconografia/odf.svg",
            title: "OPLAT, PLP",
            description: "Los sistemas de onda portadora OPLAT son ampliamente usados por empresas de energía eléctrica para establecer canales de comunicación mediante líneas de alta tensión. Esto es muy útil en los casos en que no es factible tender fibra óptica o en donde se requiere una alta disponibilidad y por tanto es necesario contar con canales de comunicación redundantes (principal y respaldo) debido a la criticidad de los sistemas involucrados. A través de ellos se pueden enviar señales de teleprotección, gestión y datos propios de los sistemas eléctricos.",
            extraInfo: "Los equipos OPLAT de última generación cuentan con switch Ethernet, routers y firewalls integrados los cuales permiten que sean versátiles, seguros y altamente confiables. En Highcom ofrecemos soluciones integrales de Onda portadora, incluyendo el diseño, pruebas FAT y puesta en servicio PES.",
            images: []
        }
    ];

    return (
        <section className="py-20 bg-white" id="section-products">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gray-500 uppercase tracking-wider">Qué te ofrecemos</span>
                    <h2 className="text-4xl font-bold text-[#292e33] mt-2">Productos</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Tabs Navigation */}
                    <div className="lg:w-1/4 flex flex-col gap-2">
                        {products.map((product, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`flex items-center gap-4 p-4 text-left transition-all rounded-lg ${activeTab === index
                                        ? 'bg-[#0dc959] text-white shadow-lg'
                                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <div className={`relative w-8 h-8 ${activeTab === index ? 'brightness-0 invert' : ''}`}>
                                    <Image
                                        src={product.icon}
                                        alt=""
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-semibold text-sm">{product.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="lg:w-3/4 bg-gray-50 rounded-2xl p-8 shadow-sm">
                        <div className="mb-8">
                            <span className="text-[#0dc959] font-bold uppercase tracking-wider text-sm">Sobre el producto</span>
                            <h3 className="text-3xl font-bold text-[#292e33] mt-2 mb-6">{products[activeTab].title}</h3>

                            {products[activeTab].description && (
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {products[activeTab].description}
                                </p>
                            )}

                            {products[activeTab].features && (
                                <div className="mb-6">
                                    <h4 className="font-bold text-[#292e33] mb-4">Características:</h4>
                                    <ul className="space-y-2">
                                        {products[activeTab].features?.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600">
                                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0dc959] flex-shrink-0"></span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {products[activeTab].extraInfo && (
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {products[activeTab].extraInfo}
                                </p>
                            )}

                            {products[activeTab].pdf && (
                                <a
                                    href={products[activeTab].pdf}
                                    download
                                    className="inline-flex items-center px-6 py-3 bg-[#0dc959] text-white font-bold rounded-lg hover:bg-[#0ba047] transition-colors shadow-md"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    {products[activeTab].pdfName}
                                </a>
                            )}
                        </div>

                        {/* Product Images */}
                        {products[activeTab].images && products[activeTab].images.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {products[activeTab].images.map((img, idx) => (
                                    <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                                        <Image
                                            src={img}
                                            alt={`${products[activeTab].title} ${idx + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
