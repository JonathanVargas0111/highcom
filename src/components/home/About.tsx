export default function About() {
    return (
        <section
            id="about"
            className="about relative flex items-center justify-center h-[500px] px-[10%] py-20"
            style={{
                backgroundImage: 'url(/img/A1_Inicio/banner.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="about-content scroll-scale relative z-10 max-w-[600px] text-center">
                <span className="text-white text-sm font-light tracking-[2px] uppercase block mb-4">
                    Conoce más de nosotros
                </span>
                <h2 className="text-5xl md:text-6xl font-black mb-8">
                    ¿Quiénes Somos?
                </h2>
                <div className="btn-box flex justify-center">
                    <a
                        href="/nosotros"
                        className="btn inline-flex justify-center items-center px-8 py-3 bg-[#0dc959] text-[#292e33] font-bold rounded-md hover:bg-[#0ba047] transition-colors shadow-lg"
                    >
                        Leer más
                    </a>
                </div>
            </div>
        </section>
    );
}
