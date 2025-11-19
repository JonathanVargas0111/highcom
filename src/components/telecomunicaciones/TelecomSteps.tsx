import Image from 'next/image';

export default function TelecomSteps() {
    const steps = [
        {
            title: "Reunión de inicio del proyecto",
            icon: "/img/Ilutraciones Soluciones/junta.svg",
            width: 80
        },
        {
            title: "Elaboración de la Ingeniería del proyecto",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/ingdetalle.svg",
            width: 115
        },
        {
            title: "Fabricación de equipos y desarrollo del Sistema",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/fabricacion.svg",
            width: 100
        },
        {
            title: "Pruebas de aceptación en fábrica",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/pruebas.svg",
            width: 110
        },
        {
            title: "Instalación en obra",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/instalacion.svg",
            width: 125
        },
        {
            title: "Puesta en Servicio del Sistema",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/aceptacion.svg",
            width: 120
        },
        {
            title: "Soporte técnico post venta",
            icon: "/img/Ilutraciones Soluciones/Telecomunicaciones/asesorar.svg",
            width: 120
        }
    ];

    return (
        <section className="py-20 bg-white" id="solution">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-gray-500 uppercase tracking-wider">Nuestros pasos a seguir</span>
                    <h2 className="text-4xl font-bold text-[#292e33] mt-2">Soluciones</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg hover:shadow-xl transition-shadow duration-300 group">
                            <div className="h-32 flex items-center justify-center mb-6">
                                <div className="relative w-24 h-24 transition-transform duration-300 group-hover:scale-110">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-bold text-[#292e33] group-hover:text-[#0dc959] transition-colors">
                                {step.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
