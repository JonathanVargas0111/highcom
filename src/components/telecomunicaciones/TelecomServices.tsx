import Image from 'next/image';

export default function TelecomServices() {
    const services = [
        {
            title: "Diseño, ingeniería, instalación y mantenimiento",
            image: "/img/A4_Teleco/Servicios/Diseñoeing.jpg",
        },
        {
            title: "Instalación y mantenimiento de equipos",
            image: "/img/A4_Teleco/Servicios/matenimiento.jpg",
        },
        {
            title: "Licenciamiento de radioenlaces de microondas MMOO",
            image: "/img/A4_Teleco/Servicios/radio.jpg",
        },
        {
            title: "Pruebas FAT, SAT y PES",
            image: "/img/A4_Teleco/Servicios/prueba.jpg",
        }
    ];

    return (
        <section className="py-20 bg-[#f8f9fa]" id="section-services">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-gray-500 uppercase tracking-wider">Qué te ofrecemos</span>
                    <h2 className="text-4xl font-bold text-[#292e33] mt-2 mb-6">Servicios</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Contamos con un equipo de ingenieros altamente capacitado, motivado y con amplia experiencia,
                        presto a brindar todo el apoyo a nuestros clientes para lograr el éxito en sus proyectos. Dentro de
                        los servicios que ofrecemos se encuentran:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#292e33] mb-4 min-h-[3.5rem]">
                                    {service.title}
                                </h3>
                                <a
                                    href="https://web.whatsapp.com/send?phone=573174817920"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[#0dc959] font-bold hover:text-[#0ba047] transition-colors"
                                >
                                    Contáctanos
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
