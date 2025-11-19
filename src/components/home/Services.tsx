import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: "Diseño e Ingeniería",
            description: "Elaboración de ingeniería de detalle y diseño de sistemas de telecomunicaciones.",
            icon: "🎯",
        },
        {
            title: "Instalación y Mantenimiento",
            description: "Instalación profesional en campo y mantenimiento preventivo/correctivo.",
            icon: "🔧",
        },
        {
            title: "Fabricación",
            description: "Fabricación de tableros eléctricos y equipos personalizados.",
            icon: "🏭",
        },
        {
            title: "Capacitación",
            description: "Formación técnica en sistemas de comunicaciones, IEC 61850 y ciberseguridad.",
            icon: "📚",
        },
    ];

    return (
        <section id="services" className="py-20 px-[10%] bg-[#1f2327]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Nuestros <span className="text-[#0dc959]">Servicios</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Ofrecemos soluciones integrales para proyectos de telecomunicaciones e infraestructura
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-[#292e33] p-8 rounded-xl border border-[#3f4449] hover:border-[#0097FC] transition-all duration-300 hover:shadow-lg hover:shadow-[#0097FC]/20 hover:-translate-y-2 group"
                        >
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-[#0097FC] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Process Steps */}
                <div className="mt-20">
                    <h3 className="text-3xl font-bold text-center mb-12">
                        Nuestro <span className="text-[#0097FC]">Proceso</span>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {[
                            { step: "1", title: "Reunión Inicial", icon: "🤝" },
                            { step: "2", title: "Ingeniería", icon: "📐" },
                            { step: "3", title: "Fabricación", icon: "⚙️" },
                            { step: "4", title: "Pruebas FAT", icon: "🔍" },
                            { step: "5", title: "Instalación", icon: "🔨" },
                            { step: "6", title: "Puesta en Servicio", icon: "✅" },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="bg-[#292e33] p-6 rounded-lg border border-[#3f4449] hover:border-[#0dc959] transition-all duration-300">
                                    <div className="text-4xl mb-3">{item.icon}</div>
                                    <div className="text-[#0dc959] font-bold text-lg mb-2">Paso {item.step}</div>
                                    <div className="text-sm text-gray-400">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
