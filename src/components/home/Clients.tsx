'use client';

import Image from 'next/image';

export default function Clients() {
    const clients = [
        { name: 'Siemens AG', logo: '/img/A1_Inicio/simens.jpg' },
        { name: 'Grupo Energía Bogotá', logo: '/img/A1_Inicio/energiabta.png' },
        { name: 'Tyazhmash', logo: '/img/A1_Inicio/tyaz.jpg' },
        { name: 'Petroeléctrica los llanos Ltd.', logo: '/img/A1_Inicio/petroelectrica.png' },
        { name: 'Enel', logo: '/img/A1_Inicio/enel.jpg' },
    ];

    return (
        <div id="client" className="client py-20 px-[10%] bg-[#292e33]">
            <div className="titulo_produc text-center mb-16">
                <div className="header-section2">
                    <span className="text-lg text-gray-400 uppercase tracking-wider">
                        Quiénes han confiado en nosotros
                    </span>
                    <h2 className="title text-4xl md:text-5xl font-bold mt-2">
                        Aliados
                    </h2>
                </div>
            </div>

            <div id="timeline" className="flex flex-wrap justify-center items-center gap-8">
                {clients.map((client, idx) => (
                    <div key={idx} className="tl-item group">
                        <div className="tl-bg relative w-[200px] h-[120px] bg-white/10 rounded-lg overflow-hidden border border-[#3f4449] hover:border-[#0097FC] transition-all duration-300">
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain p-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                        <div className="tl-content text-center mt-4">
                            <h1 className="text-sm font-medium text-gray-400 group-hover:text-[#0097FC] transition-colors">
                                {client.name}
                            </h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
