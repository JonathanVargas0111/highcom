'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement form submission logic
        console.log('Form submitted:', formData);
        alert('Gracias por contactarnos. Nos pondremos en contacto pronto.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-20 px-[10%] bg-[#1f2327]">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                        Contáctenos
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Estamos listos para ayudarle con su próximo proyecto de telecomunicaciones
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2">
                                Nombre Completo *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-[#292e33] border border-[#3f4449] rounded-lg focus:border-[#0097FC] focus:outline-none focus:ring-2 focus:ring-[#0097FC]/20 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2">
                                Correo Electrónico *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-[#292e33] border border-[#3f4449] rounded-lg focus:border-[#0097FC] focus:outline-none focus:ring-2 focus:ring-[#0097FC]/20 transition-all"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium mb-2">
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#292e33] border border-[#3f4449] rounded-lg focus:border-[#0097FC] focus:outline-none focus:ring-2 focus:ring-[#0097FC]/20 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-[#292e33] border border-[#3f4449] rounded-lg focus:border-[#0097FC] focus:outline-none focus:ring-2 focus:ring-[#0097FC]/20 transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2">
                                Mensaje *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 bg-[#292e33] border border-[#3f4449] rounded-lg focus:border-[#0097FC] focus:outline-none focus:ring-2 focus:ring-[#0097FC]/20 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-[#0dc959] text-white font-bold rounded-lg hover:bg-[#0ba047] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
                        >
                            Enviar Mensaje
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-[#292e33] p-8 rounded-xl border border-[#3f4449]">
                            <h3 className="text-2xl font-bold mb-6 text-[#0097FC]">Información de Contacto</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📍</div>
                                    <div>
                                        <div className="font-bold mb-1">Dirección</div>
                                        <div className="text-gray-400">Bogotá, Colombia</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📧</div>
                                    <div>
                                        <div className="font-bold mb-1">Email</div>
                                        <a href="mailto:info@highcom.co" className="text-[#0097FC] hover:underline">
                                            info@highcom.co
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📞</div>
                                    <div>
                                        <div className="font-bold mb-1">Teléfono</div>
                                        <div className="text-gray-400">+57 (1) XXX-XXXX</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">🕒</div>
                                    <div>
                                        <div className="font-bold mb-1">Horario</div>
                                        <div className="text-gray-400">Lunes - Viernes: 8:00 AM - 6:00 PM</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Box */}
                        <div className="bg-gradient-to-r from-[#0097FC] to-[#0dc959] p-8 rounded-xl text-center">
                            <h3 className="text-2xl font-bold mb-3">¿Necesita una cotización?</h3>
                            <p className="mb-6">Contáctenos para recibir una propuesta personalizada</p>
                            <a
                                href="mailto:info@highcom.co"
                                className="inline-block px-8 py-3 bg-white text-[#0097FC] font-bold rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Solicitar Cotización
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
