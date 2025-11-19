'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        form.submit();
    };

    return (
        <section id="contact" className="contact relative py-20 px-[10%] bg-[#1f2327]">
            <div className="titulo_produc text-center mb-16">
                <div className="header-section2">
                    <span className="text-lg text-gray-400 uppercase tracking-wider">
                        Haz una pregunta
                    </span>
                    <h2 className="title text-4xl md:text-5xl font-bold mt-2">
                        Contáctanos
                    </h2>
                </div>
            </div>

            <form
                action="https://formsubmit.co/info@highcom.co"
                method="POST"
                onSubmit={handleSubmit}
                className="scroll-bottom max-w-2xl mx-auto"
            >
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"
                    required
                    className="w-full mb-4 px-6 py-4 bg-[#292e33] border border-[#3f4449] rounded-lg text-white focus:border-[#0097FC] focus:outline-none transition-colors"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="w-full mb-4 px-6 py-4 bg-[#292e33] border border-[#3f4449] rounded-lg text-white focus:border-[#0097FC] focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Teléfono"
                    className="w-full mb-4 px-6 py-4 bg-[#292e33] border border-[#3f4449] rounded-lg text-white focus:border-[#0097FC] focus:outline-none transition-colors"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <textarea
                    name="message"
                    id="message"
                    cols={30}
                    rows={10}
                    placeholder="Mensaje"
                    required
                    className="w-full mb-6 px-6 py-4 bg-[#292e33] border border-[#3f4449] rounded-lg text-white focus:border-[#0097FC] focus:outline-none transition-colors resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <div className="btn-box formBtn flex justify-center">
                    <button
                        type="submit"
                        className="btn px-12 py-4 bg-[#0dc959] text-[#292e33] font-bold rounded-lg hover:bg-[#0ba047] transition-colors shadow-lg"
                    >
                        Enviar
                    </button>
                </div>

                <input type="hidden" name="_subject" value="CORREO PÁGINA WEB" />
                <input type="hidden" name="_next" value="https://highcom.vercel.app/#contact" />
                <input type="hidden" name="_captcha" value="false" />
            </form>
        </section>
    );
}
