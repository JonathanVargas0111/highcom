import Image from 'next/image';

interface ProductCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
}

export default function ProductCard({ title, description, image, link }: ProductCardProps) {
    const CardContent = () => (
        <>
            <div className="relative h-48 mb-4 overflow-hidden rounded-t-lg">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#0097FC] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
        </>
    );

    if (link) {
        return (
            <a
                href={link}
                className="group bg-[#1f2327] rounded-lg border border-[#3f4449] hover:border-[#0097FC] transition-all duration-300 hover:shadow-lg hover:shadow-[#0097FC]/20 block"
            >
                <CardContent />
            </a>
        );
    }

    return (
        <div className="group bg-[#1f2327] rounded-lg border border-[#3f4449] hover:border-[#0097FC] transition-all duration-300">
            <CardContent />
        </div>
    );
}
