import PageHero from '@/components/shared/PageHero';
import TelecomSteps from '@/components/telecomunicaciones/TelecomSteps';
import TelecomServices from '@/components/telecomunicaciones/TelecomServices';
import TelecomProducts from '@/components/telecomunicaciones/TelecomProducts';

export default function TelecomunicacionesPage() {
    return (
        <main>
            <PageHero
                title="TELECOMUNICACIONES"
                image="/img/A4_Teleco/bannerbox1.jpg"
            />
            <TelecomSteps />
            <TelecomServices />
            <TelecomProducts />
        </main>
    );
}
