import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Home, Building2, Factory } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Interiors',
    description: 'Bespoke designs for homes that embody luxury, comfort, and personal style.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop',
    subFeatures: ['Renovation', 'Custom Design', 'Premium Furnishing']
  },
  {
    icon: Building2,
    title: 'Commercial Design',
    description: 'Professional spaces that enhance productivity and reflect brand excellence.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop',
    subFeatures: ['Office Layouts', 'Brand Integration', 'Ergonomic Spaces']
  },
  {
    icon: Factory,
    title: 'Industrial Design',
    description: 'Functional and efficient industrial spaces designed for operational excellence.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop',
    subFeatures: ['Operational Flow', 'Safety Optimization', 'Scale Planning']
  }
];

export function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="services" ref={sectionRef} className="py-28 px-6 bg-[#0f0f0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Minimalist Dark Header */}
        <motion.div
          className="text-center mb-20 flex flex-col items-center"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="text-sm tracking-widest text-white/40 mb-4">OUR SERVICES</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">What We Offer</h2>
          <div className="w-16 h-[2px] bg-[#c5a880]" />
        </motion.div>

        {/* Premium Dark Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="flex flex-col bg-[#161616] border border-white/[0.05] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden h-full"
              >
                {/* Visual Image Block */}
                <div className="relative w-full h-[240px] overflow-hidden bg-zinc-800">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover filter brightness-[0.9] contrast-[1.05]"
                  />
                  {/* Dark blend overlay matching your curated design image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-80" />
                </div>

                {/* Core Content Text Area */}
                <div className="p-8 pb-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="p-3 rounded-xl bg-[#c5a880]/15 text-[#c5a880]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#a1a1aa] text-[15px] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Checklist Section */}
                <div className="bg-[#1c1c1c] border-t border-white/[0.04] px-8 py-7">
                  <ul className="space-y-4">
                    {service.subFeatures.map((feature) => (
                      <li 
                        key={feature}
                        className="text-[14px] font-semibold text-[#d4d4d8] tracking-tight flex items-center gap-3"
                      >
                        <span className="text-[#c5a880] text-[16px] font-bold leading-none shrink-0" aria-hidden="true">
                          →
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
