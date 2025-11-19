import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#1f2327] text-[#F2F2F2] py-12 px-[10%] border-t border-[#3f4449]">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo & About */}
                <div className="col-span-1">
                    <Image
                        src="/img/LOGO_HIGHCOM.png"
                        alt="Highcom Logo"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <p className="text-sm text-gray-400 mb-4">
                        HIGHCOM® brinda soluciones de comunicaciones para clientes del sector gubernamental
                        y multinacionales que operan en el sector industrial Colombiano.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="col-span-1">
                    <h3 className="text-lg font-bold mb-4 text-[#0dc959]">Enlaces Rápidos</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/#home" className="text-gray-400 hover:text-[#0097FC] transition-colors">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link href="/#about" className="text-gray-400 hover:text-[#0097FC] transition-colors">
                                Nosotros
                            </Link>
                        </li>
                        <li>
                            <Link href="/telecomunicaciones" className="text-gray-400 hover:text-[#0097FC] transition-colors">
                                Telecomunicaciones
                            </Link>
                        </li>
                        <li>
                            <Link href="/infraestructura" className="text-gray-400 hover:text-[#0097FC] transition-colors">
                                Infraestructura
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="text-gray-400 hover:text-[#0097FC] transition-colors">
                                Contacto
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Services */}
                <div className="col-span-1">
                    <h3 className="text-lg font-bold mb-4 text-[#0dc959]">Servicios</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400 text-sm">Diseño e ingeniería</li>
                        <li className="text-gray-400 text-sm">Instalación y mantenimiento</li>
                        <li className="text-gray-400 text-sm">Fabricación de tableros</li>
                        <li className="text-gray-400 text-sm">Fibra óptica</li>
                        <li className="text-gray-400 text-sm">Capacitación técnica</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="col-span-1">
                    <h3 className="text-lg font-bold mb-4 text-[#0dc959]">Contacto</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                            <span>📍</span>
                            <span>Bogotá, Colombia</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📧</span>
                            <a href="mailto:info@highcom.co" className="hover:text-[#0097FC] transition-colors">
                                info@highcom.co
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span>📞</span>
                            <span>+57 (1) XXX-XXXX</span>
                        </li>
                    </ul>

                    {/* Social Media */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-[#0097FC] transition-colors"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-[#0097FC] transition-colors"
                            aria-label="YouTube"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[#3f4449] mt-8 pt-6 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} HIGHCOM CALA SAS. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
