import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sundaram Motors Management',
    role: 'Commercial Client',
    location: 'Ambattur Industrial Estate, Chennai',
    quote: 'Space Makers delivered a seamless, comprehensive setup for our Mercedes-Benz showroom. From luxury partitions and false ceilings to full HVAC and fire protection infrastructure, their multi-service execution was completely handled under one roof.',
  },
  {
    name: 'Valeo Lighting Infrastructure Team',
    role: 'Industrial & MEP Client',
    location: 'Sriperambudur, TN',
    quote: 'Excellence in operational and technical execution. The team expertly handled our specialized Phase 2 cleanroom requirements, installing high-standard Rockwool panel partitions, Rockwool ceilings, and integrated fire doors with absolute precision.',
  },
  {
    name: 'DOXA Coworking Spaces Operations',
    role: 'Corporate Office Client',
    location: 'Hyderabad, TS',
    quote: 'The commercial design and fit-out created for our shared spaces perfectly balance modern corporate aesthetics with multi-functional utility. Excellent engineering across our custom furniture, lighting layouts, and MEP systems.',
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm tracking-widest text-white/40 mb-4">TESTIMONIALS</div>
          <h2 className="text-4xl md:text-5xl">What Our Clients Say</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-8 text-white/20">"</div>
              <p className="text-lg md:text-3xl mb-12 leading-relaxed font-light">
                {testimonials[currentIndex].quote}
              </p>
              <div className="mb-2 text-xl">{testimonials[currentIndex].name}</div>
              <div className="text-white/60">
                {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
