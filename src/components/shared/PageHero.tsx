import Image from 'next/image';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
    return (
        <section className="relative h-[400px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-[10%]">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
                {subtitle && <p className="text-xl md:text-2xl text-gray-200">{subtitle}</p>}
            </div>
        </section>
    );
}
