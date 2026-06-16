

import { useEffect, useRef, useState } from 'react';
import { motion, type Variants } from 'motion/react';
// Premium minimal icons matching your structural cards
import { RefreshCw, CheckSquare, MessageSquare } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understanding your vision, requirements, and budget',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Creating detailed plans and 3D visualizations',
  },
  {
    number: '03',
    title: 'Proposal',
    description: 'Transparent quotation with detailed scope',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Quality construction with regular updates',
  },
  {
    number: '05',
    title: 'Handover',
    description: 'Final inspection and project completion',
  },
];

const valuePillars = [
  {
    icon: RefreshCw,
    title: 'Regular Progress Updates',
    description: 'Stay informed at every stage',
  },
  {
    icon: CheckSquare,
    title: 'Quality Control Checks',
    description: 'Ensuring excellence throughout',
  },
  {
    icon: MessageSquare,
    title: 'Open Communication',
    description: 'Your vision, our priority',
  },
];

// Parent container variant to coordinate the initial entrance staggered sequence
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

// Child element entrance variants
const stepVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: [0.16, 1, 0.3, 1] as const
    }
  },
};

// Subtle entry fade-in for the image layout below
const lowerSectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }
  }
};

export function Process() {
  const [isVisible, setIsVisible] = useState(false);
  const [activePhase, setActivePhase] = useState(0); 
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Controls the building looping flow timeline mechanism
  useEffect(() => {
    if (!isVisible) return;

    const startTimeout = setTimeout(() => {
      setActivePhase(1);
    }, 2500);

    return () => clearTimeout(startTimeout);
  }, [isVisible]);

  useEffect(() => {
    if (activePhase === 0) return;

    const timer = setTimeout(() => {
      setActivePhase((prev) => {
        if (prev >= processSteps.length) {
          return 1;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [activePhase]);

  return (
    <div id="services" ref={sectionRef} className="py-32 px-6 bg-[#0b0b0b] transition-colors duration-700 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Minimalist Header */}
        <motion.div
          className="text-center mb-28 flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <div className="text-sm tracking-widest text-white/40 mb-4">OUR PROCESS</div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">How We Work</h2>
          <div className="w-12 h-[2px] bg-white" />
        </motion.div>

        {/* Premium Connected Steps Container utilizing orchestrated staggered flow */}
        <motion.div 
          className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Subtle connecting architectural vector line behind elements (Desktop only) */}
          <div className="absolute top-[40px] left-0 right-0 h-[1px] bg-white/[0.06] hidden lg:block pointer-events-none" />

          {processSteps.map((step, index) => {
            const stepNumber = index + 1;
            const isStepHighlighted = activePhase >= stepNumber;

            return (
              <motion.div
                key={step.number}
                className="group relative flex flex-col items-center text-center cursor-pointer select-none"
                variants={stepVariants}
              >
                {/* Process Indicator Block */}
                <div className="relative mb-8 z-10 flex items-center justify-center">
                  <div 
                    className={`absolute inset-0 rounded-full bg-white/[0.02] transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
                      isStepHighlighted ? 'scale-[1.4] opacity-100' : 'scale-100 opacity-0 group-hover:scale-[1.4] group-hover:opacity-100'
                    }`} 
                  />
                  
                  <div 
                    className={`w-20 h-20 rounded-full border bg-[#111111] flex flex-col items-center justify-center transition-all duration-500 ease-[0.16, 1, 0.3, 1] shadow-sm ${
                      isStepHighlighted 
                        ? 'shadow-xl border-white -translate-y-1' 
                        : 'border-white/10 group-hover:shadow-xl group-hover:border-white group-hover:-translate-y-1'
                    }`}
                  >
                    <span className="text-2xl font-light tracking-tighter text-white transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Typography Structure with Smooth Hover/Active State Effects */}
                <div 
                  className={`px-4 transition-transform duration-500 ease-[0.16, 1, 0.3, 1] ${
                    isStepHighlighted ? 'translate-y-[-2px]' : 'group-hover:translate-y-[-2px]'
                  }`}
                >
                  <h3 className="text-xl font-medium tracking-wide text-white mb-4 relative inline-block">
                    {step.title}
                    <span 
                      className={`absolute bottom-[-6px] left-1/2 -translate-x-1/2 h-[1.5px] bg-white transition-all duration-500 ease-[0.16, 1, 0.3, 1] ${
                        isStepHighlighted ? 'w-8' : 'w-0 group-hover:w-8'
                      }`} 
                    />
                  </h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* --- START OF YOUR IMAGE DESIGN STRUCTURE --- */}
        <motion.div
          className="mt-15 w-full"
          variants={lowerSectionVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Architectural Line Separator with Muted Gold Center Indicator Arrow */}
          <div className="relative w-full flex items-center justify-center mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full h-[1px] bg-white/[0.08]" />
            </div>
            <div className="relative z-10 bg-[#0b0b0b] px-6 text-[#c5a880]">
              {/* Right/Downward pointing timeline chevron */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>

          {/* 3-Card Value Pillar Grid layout matching image exactly */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valuePillars.map((pillar, idx) => {
              const IconComponent = pillar.icon;
              return (
                <div 
                  key={idx} 
                  className="group border border-white/[0.06] bg-[#121212]/40 rounded-sm p-10 flex flex-col items-center text-center transition-all duration-500 hover:bg-[#121212]/80 hover:border-white/10"
                >
                  {/* Luxury Muted Gold Tinted Icon Block */}
                  <div className="text-[#c5a880] mb-6 transform transition-transform duration-500 ease-[0.16, 1, 0.3, 1] group-hover:scale-110">
                    <IconComponent size={36} strokeWidth={1.5} />
                  </div>

                  {/* Title text */}
                  <h4 className="text-white text-xl font-medium tracking-wide mb-3 transition-colors duration-300 group-hover:text-white">
                    {pillar.title}
                  </h4>

                  {/* Subtitle Description text */}
                  <p className="text-white/40 text-sm font-light tracking-wide transition-colors duration-300 group-hover:text-white/60">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
        {/* --- END OF YOUR IMAGE DESIGN STRUCTURE --- */}

      </div>
    </div>
  );
}