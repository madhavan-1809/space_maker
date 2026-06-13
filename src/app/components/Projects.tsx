
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { useResponsive } from '../hooks/useResponsive';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?q=80&w=800&auto=format&fit=crop',
    title: 'Mercedes-Benz Showroom',
    client: 'Sundaram Motors',
    category: 'Commercial',
    location: 'Ambattur Industrial Estate, Chennai',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
    title: 'Manufacturing Facility',
    client: 'Kubota Agricultural Machinery',
    category: 'Industrial',
    location: 'Chennai',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    title: 'Valeo Lighting Facility (Phase 1)',
    client: 'Valeo Lighting India Pvt Ltd',
    category: 'Industrial',
    location: 'Sriperambudur',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop',
    title: 'Valeo HHV Clean Room (Phase 2)',
    client: 'Valeo Lighting India',
    category: 'Industrial',
    location: 'Sriperambudur',
    scope: ['Rockwool panel Partition', 'Rockwool ceiling', 'Electrical', 'Fire door', 'HVAC']
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800&auto=format&fit=crop',
    title: 'Jaguar Land Rover Showroom',
    client: 'Jaguar Land Rover',
    category: 'Commercial',
    location: 'Bangalore',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=800&auto=format&fit=crop',
    title: 'Smartworks Recreation Area',
    client: 'Smartworks Corporate Terrace',
    category: 'Commercial',
    location: 'Chennai',
    scope: ['Furnitures', 'MS work', 'Electrical', 'Painting']
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800&auto=format&fit=crop',
    title: 'DOXA Commercial Office',
    client: 'DOXA Coworking Spaces',
    category: 'Commercial',
    location: 'Hyderabad',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop',
    title: 'OSB IT Infrastructure',
    client: 'OSB India',
    category: 'Infrastructure',
    location: 'Hyderabad',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical & Networking', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system']
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop',
    title: 'CBRE Olympia HVAC Chiller Pipes',
    client: 'CBRE - OLYMPIA',
    category: 'Infrastructure',
    location: 'Guindy, Chennai',
    scope: ['Chiller Pipe Epoxy painting', 'Durability & corrosion resistance', 'Specialized industrial coating engineering']
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop',
    title: 'Littoral Cafe Lounge',
    client: 'Littoral Cafe',
    category: 'Commercial',
    location: 'Marakkanam ECR',
    scope: ['Furnitures', 'MS structure', 'Electrical', 'Interiors', 'Painting', 'Flooring', 'Bio Toilet']
  },
  {
    id: 11,
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    title: "Navin's Model House",
    client: "Navin's Housing Properties",
    category: 'Residential',
    location: 'Chennai',
    scope: ['Furnitures', 'False ceiling', 'Electrical', 'Interiors', 'Painting']
  }
];

const categories = ['All', 'Commercial', 'Industrial', 'Residential', 'Infrastructure'];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile, isTablet } = useResponsive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <div id="projects" ref={sectionRef} className="py-32 px-6 bg-[#fafaf9] dark:bg-[#0f0f0f] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* Responsive Typography Header Layout */}
        <motion.div
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <div className="text-sm tracking-widest text-black/40 dark:text-white/40 mb-4 font-sans font-bold">
            OUR PORTFOLIO
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-zinc-900 dark:text-white font-sans tracking-tight ">
            Project References
          </h2>
          <div className="w-16 h-[2px] bg-[#c5a880] mb-12" />

          {/* Adaptive Navigation Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 text-[12px] tracking-widest uppercase transition-all duration-300 font-semibold rounded-lg ${
                  selectedCategory === category
                    ? 'bg-[#c5a880] text-white dark:text-black shadow-md'
                    : 'bg-white dark:bg-[#161616] border border-black/10 dark:border-white/[0.06] text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic Architectural Masonry Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Masonry columnsCount={isMobile ? 1 : isTablet ? 2 : 3} gutter="28px">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative overflow-hidden bg-white dark:bg-[#161616] border border-black/10 dark:border-white/[0.05] rounded-xl cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative w-full h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter contrast-[1.01] dark:brightness-[0.85]"
                  />
                  {/* Fluid Dynamic Ambient Mask Layer */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Mobile-Only static clear visibility gradient mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent opacity-100 md:hidden" />
                </div>

                {/* Left-Aligned Metadata Layer matching design standard */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end pointer-events-none md:opacity-0 md:transform md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <span className="text-[10px] tracking-widest text-[#c5a880] uppercase font-bold mb-1.5">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-zinc-300 font-normal truncate">
                    {project.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </div>

      {/* Mode-Adaptive Detailed View Blueprint Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/40 dark:bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-white dark:bg-[#141414] border border-black/10 dark:border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white px-4 py-2 text-[11px] tracking-widest font-bold rounded-full border border-white/[0.1] transition-all"
                onClick={() => setSelectedProject(null)}
              >
                CLOSE ×
              </button>
              
              <div className="w-full max-h-[45vh] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <span className="text-[11px] tracking-[0.2em] text-[#c5a880] font-bold uppercase block mb-1">
                      {selectedProject.client}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111111] dark:text-white font-serif">
                      {selectedProject.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{selectedProject.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-black/5 dark:bg-white/10 text-[#111111] dark:text-white rounded-full text-xs font-semibold tracking-wider uppercase">
                    {selectedProject.category}
                  </span>
                </div>

                <div className="h-px bg-black/[0.08] dark:bg-white/[0.06] w-full mb-6" />

                <div>
                  <h4 className="text-[#111111] dark:text-zinc-300 text-xs font-bold tracking-widest uppercase mb-4">
                    Scope of Works Fulfilled
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedProject.scope.map((item, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-[#1c1c1c] px-4 py-2.5 rounded-lg border border-black/[0.03] dark:border-white/[0.03]"
                      >
                        <span className="text-[#c5a880] font-bold text-xs">→</span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}