
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { useResponsive } from '../hooks/useResponsive';


import project0101 from '../assets/projects_01_01.jpg';
import project0102 from '../assets/projects_01_02.jpg';
import project0103 from '../assets/projects_01_03.jpg';
import project0104 from '../assets/projects_01_04.jpg';

import project0201 from '../assets/projects_02_01.jpg';
import project0202 from '../assets/projects_02_02.jpg';
import project0203 from '../assets/projects_02_03.jpg';
import project0204 from '../assets/projects_02_04.jpg';

import project0301 from '../assets/projects_03_01.jpg';
import project0302 from '../assets/projects_03_02.jpg';
import project0303 from '../assets/projects_03_03.jpg';
import project0304 from '../assets/projects_03_04.jpg';

import project0401 from '../assets/projects_04_01.jpg';
import project0402 from '../assets/projects_04_02.jpg';
import project0403 from '../assets/projects_04_03.jpg';
import project0404 from '../assets/projects_04_04.jpg';

import project0501 from '../assets/projects_05_01.jpg';
import project0502 from '../assets/projects_05_02.jpg';
import project0503 from '../assets/projects_05_03.jpg';
import project0504 from '../assets/projects_05_04.jpg';

import project0601 from '../assets/projects_06_01.jpg';
import project0602 from '../assets/projects_06_02.jpg';
import project0603 from '../assets/projects_06_03.jpg';
import project0604 from '../assets/projects_06_04.jpg';

import project0701 from '../assets/projects_07_01.jpg';
import project0702 from '../assets/projects_07_02.jpg';
import project0703 from '../assets/projects_07_03.jpg';
import project0704 from '../assets/projects_07_04.jpg';
import project0705 from '../assets/projects_07_05.jpg';

import project0801 from '../assets/projects_08_01.jpg';
import project0802 from '../assets/projects_08_02.jpg';
import project0803 from '../assets/projects_08_03.jpg';
import project0804 from '../assets/projects_08_04.jpg';
import project0805 from '../assets/projects_08_05.jpg';

import project0901 from '../assets/projects_09_01.jpg';
import project0902 from '../assets/projects_09_02.jpg';
import project0903 from '../assets/projects_09_03.jpg';
import project0904 from '../assets/projects_09_04.jpg';
import project0905 from '../assets/projects_09_05.jpg';
import project0906 from '../assets/projects_09_06.jpg';

import project1001 from '../assets/projects_10_01.jpg';
import project1002 from '../assets/projects_10_02.jpg';
import project1003 from '../assets/projects_10_03.jpg';
import project1004 from '../assets/projects_10_04.jpg';
import project1005 from '../assets/projects_10_05.jpg';
import project1006 from '../assets/projects_10_06.jpg';

import project1101 from '../assets/projects_11_01.jpg';
import project1102 from '../assets/projects_11_02.jpg';
import project1103 from '../assets/projects_11_03.jpg';
import project1104 from '../assets/projects_11_04.jpg';

// 11 Projects - Each contains an array of 4 distinct, production-ready images
const projects = [
  {
    id: 1,
    title: 'Mercedes-Benz Showroom',
    client: 'Sundaram Motors',
    category: 'Commercial',
    location: 'Ambattur Industrial Estate, Chennai',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0101,
      project0102,
      project0103,
      project0104
    ]
  },
  {
    id: 2,
    title: 'Manufacturing Facility',
    client: 'Kubota Agricultural Machinery',
    category: 'Industrial',
    location: 'Chennai',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0201,
      project0202,
      project0203,
      project0204
    ]
  },
  {
    id: 3,
    title: 'Valeo Lighting Facility (Phase 1)',
    client: 'Valeo Lighting India Pvt Ltd',
    category: 'Industrial',
    location: 'Sriperambudur',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0301,
      project0302,
      project0303,
      project0304
    ]
  },
  {
    id: 4,
    title: 'Valeo HHV Clean Room (Phase 2)',
    client: 'Valeo Lighting India',
    category: 'Industrial',
    location: 'Sriperambudur',
    scope: ['Rockwool panel Partition', 'Rockwool ceiling', 'Electrical', 'Fire door', 'HVAC'],
    images: [
      project0401,
      project0402,
      project0403,
      project0404
    ]
  },
  {
    id: 5,
    title: 'Jaguar Land Rover Showroom',
    client: 'Jaguar Land Rover',
    category: 'Commercial',
    location: 'Bangalore',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0501,
      project0502,
      project0503,
      project0504
    ]
  },
  {
    id: 6,
    title: 'Smartworks Recreation Area',
    client: 'Smartworks Corporate Terrace',
    category: 'Commercial',
    location: 'Chennai',
    scope: ['Furnitures', 'MS work', 'Electrical', 'Painting'],
    images: [
      project0601,
      project0602,
      project0603,
      project0604
    ]
  },
  {
    id: 7,
    title: 'DOXA Commercial Office',
    client: 'DOXA Coworking Spaces',
    category: 'Commercial',
    location: 'Hyderabad',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0701,
      project0702,
      project0703,
      project0704,
      project0705
    ]
  },
  {
    id: 8,
    title: 'OSB IT Infrastructure',
    client: 'OSB India',
    category: 'Infrastructure',
    location: 'Hyderabad',
    scope: ['Furnitures', 'Partition & False ceiling', 'Electrical & Networking', 'HVAC', 'Plumbing & sanitary', 'Fire Protection system'],
    images: [
      project0801,
      project0802,
      project0803,
      project0804,
      project0805
    ]
  },
  {
    id: 9,
    title: 'CBRE Olympia HVAC Chiller Pipes',
    client: 'CBRE - OLYMPIA',
    category: 'Infrastructure',
    location: 'Guindy, Chennai',
    scope: ['Chiller Pipe Epoxy painting', 'Durability & corrosion resistance', 'Specialized industrial coating engineering'],
    images: [
      project0901,
      project0902,
      project0903,
      project0904,
      project0905,
      project0906
    ]
  },
  {
    id: 10,
    title: 'Littoral Cafe Lounge',
    client: 'Littoral Cafe',
    category: 'Commercial',
    location: 'Marakkanam ECR',
    scope: ['Furnitures', 'MS structure', 'Electrical', 'Interiors', 'Painting', 'Flooring', 'Bio Toilet'],
    images: [
      project1001,
      project1002,
      project1003,
      project1004,
      project1005,
      project1006
    ]
  },
  {
    id: 11,
    title: "Navin's Model House",
    client: "Navin's Housing Properties",
    category: 'Residential',
    location: 'Chennai',
    scope: ['Furnitures', 'False ceiling', 'Electrical', 'Interiors', 'Painting'],
    images: [
      project1101,
      project1102,
      project1103,
      project1104
    ]
  }
];

const categories = ['All', 'Commercial', 'Industrial', 'Residential', 'Infrastructure'];

export function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
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

  const handleOpenModal = (project: typeof projects[0]) => {
    setActiveImageIdx(0); // Reset carousel view to first slide
    setSelectedProject(project);
  };

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
                onClick={() => handleOpenModal(project)}
              >
                <div className="relative w-full h-auto overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                  <img
                    src={project.images[0]} // Main dashboard card displays the primary thumbnail photo
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

      {/* Mode-Adaptive Detailed View Blueprint Modal with Multi-Image Carousel Controls */}
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
                className="absolute top-4 right-4 z-20 bg-black/70 hover:bg-black/90 text-white px-4 py-2 text-[11px] tracking-widest font-bold rounded-full border border-white/[0.1] transition-all"
                onClick={() => setSelectedProject(null)}
              >
                CLOSE ×
              </button>
              
              {/* Sliding Image Showcase Frame */}
              <div className="relative w-full h-[45vh] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImageIdx}
                    src={selectedProject.images[activeImageIdx]}
                    alt={`${selectedProject.title} interior layout ${activeImageIdx + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  />
                </AnimatePresence>

                {/* Left Arrow Navigation Toggle */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full font-bold backdrop-blur-md border border-white/10 transition-all select-none"
                  onClick={() => setActiveImageIdx((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                >
                  &#8249;
                </button>

                {/* Right Arrow Navigation Toggle */}
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full font-bold backdrop-blur-md border border-white/10 transition-all select-none"
                  onClick={() => setActiveImageIdx((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                >
                  &#8250;
                </button>

                {/* Visual Position Indicators (Dots) */}
                <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-10">
                  {selectedProject.images.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveImageIdx(dotIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeImageIdx === dotIdx ? 'w-6 bg-[#c5a880]' : 'w-2 bg-white/40 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Specifications Panel */}
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