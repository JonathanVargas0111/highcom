import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import About from '@/components/home/About';
import Clients from '@/components/home/Clients';
import Contact from '@/components/home/Contact';
import FontAwesomeLoader from '@/components/FontAwesomeLoader';

export default function HomePage() {
  return (
    <div className="relative">
      <FontAwesomeLoader />

      {/* Animated background circles */}
      <div className="area fixed top-0 left-0 w-full h-screen pointer-events-none opacity-30">
        <ul className="circles absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <li key={i} className="absolute block bg-white/10 rounded-full animate-float"
              style={{
                left: `${Math.random() * 90}%`,
                width: `${20 + Math.random() * 130}px`,
                height: `${20 + Math.random() * 130}px`,
                animationDelay: `${Math.random() * 25}s`,
                animationDuration: `${12 + Math.random() * 33}s`,
              }} />
          ))}
        </ul>
      </div>

      <Hero />
      <Services />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}
