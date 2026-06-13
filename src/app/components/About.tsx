import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" ref={sectionRef} className="py-32 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                // src="https://images.pexels.com/photos/33685855/pexels-photo-33685855.jpeg"
                src="https://images.pexels.com/photos/3316925/pexels-photo-3316925.jpeg"
                // src="../../../public/hero_main.jpg"
                className="w-full h-full object-cover"
              />
              {/* <img
                src="https://images.unsplash.com/photo-1699800900071-ae073285ca02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ24lMjBlbGVnYW50fGVufDF8fHx8MTc3ODg1NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury interior design"
                className="w-full h-full object-cover"
              /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-sm tracking-widest text-black/40 dark:text-white/40 mb-4">ABOUT US</div>
            <h2 className="text-4xl md:text-5xl mb-6 dark:text-white">
              Crafting Timeless
              <br />
              Elegance
            </h2>
            <div className="w-16 h-px bg-black/20 dark:bg-white/20 mb-8" />
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed mb-6">
              Space Makers Interior Solutions is a premier interior design firm specializing in creating sophisticated, timeless spaces that reflect the unique essence of our clients.
            </p>
            <p className="text-lg text-black/60 dark:text-white/60 leading-relaxed mb-8">
              With over a decade of expertise in luxury residential and commercial design, we transform visions into reality through meticulous attention to detail, innovative 3D visualization, and a deep understanding of spatial harmony.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl mb-2 dark:text-white">250+</div>
                <div className="text-sm text-black/60 dark:text-white/60 tracking-wide">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl mb-2 dark:text-white">15+</div>
                <div className="text-sm text-black/60 dark:text-white/60 tracking-wide">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
