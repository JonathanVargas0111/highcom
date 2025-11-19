export default function About() {
    return (
        <section id="about" className="py-20 px-[10%]">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            Sobre <span className="text-[#0dc959]">HIGHCOM</span>
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            HIGHCOM® inicia operaciones en la ciudad de Bogotá en el mes de Septiembre del 2009
                            con el objeto de brindar soluciones de comunicaciones para clientes del sector
                            gubernamental y para algunas multinacionales que operan en el sector industrial Colombiano.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Nuestra experiencia abarca proyectos en telecomunicaciones, fabricación de tableros
                            eléctricos, infraestructura metalmecánica y sistemas de fibra óptica.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#0dc959] mb-2">15+</div>
                                <div className="text-sm text-gray-400">Años de Experiencia</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#0097FC] mb-2">200+</div>
                                <div className="text-sm text-gray-400">Proyectos Completados</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-[#FF2415] mb-2">100%</div>
                                <div className="text-sm text-gray-400">Satisfacción</div>
                            </div>
                        </div>
                    </div>

                    {/* Values Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ValueCard
                            title="Misión"
                            description="Proveer soluciones integrales de telecomunicaciones e infraestructura con los más altos estándares de calidad."
                            icon="🎯"
                        />
                        <ValueCard
                            title="Visión"
                            description="Ser líderes reconocidos en soluciones de telecomunicaciones industriales en Colombia y Latinoamérica."
                            icon="🔭"
                        />
                        <ValueCard
                            title="Calidad"
                            description="Compromiso con la excelencia técnica y el cumplimiento de normas internacionales."
                            icon="⭐"
                        />
                        <ValueCard
                            title="Innovación"
                            description="Adopción de nuevas tecnologías y mejores prácticas en la industria."
                            icon="💡"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function ValueCard({ title, description, icon }: { title: string; description: string; icon: string }) {
    return (
        <div className="bg-[#1f2327] p-6 rounded-xl border border-[#3f4449] hover:border-[#0097FC] transition-all duration-300 group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#0097FC] transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}
