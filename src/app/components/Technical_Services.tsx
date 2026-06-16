

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// import airCon from '../assets/sm_aircon_img.jfif';

const serviceCategories = [
  {
    id: 'mep',
    title: 'MEP Engineering',
    tagline: 'Excellence in mechanical & electrical systems',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80', // Industrial technical facility
    extendedDesc: 'High-performance mechanical, electrical, and plumbing engineering architectures optimized for sustainable operation and industrial scale.',
    items: [
      { 
        name: 'Air-Conditioning', 
        desc: 'Climate control solutions for optimal industrial comfort', 
        img: 'https://media.istockphoto.com/id/1416953940/photo/air-conditioning-installed-on-the-roof-of-industrial-buildings.jpg?s=612x612&w=0&k=20&c=KXtxQuRhRf7iz0MWznsDWhdt9T-5DnIQyGuj-37fy8M=', // Commercial chillers & ducting
        details: ['VRF/VRV System Layouts', 'Chilled Water Plant Routing', 'Cleanroom HVAC Engineering'] 
      },
      { 
        name: 'Lighting Systems', 
        desc: 'Energy-efficient illumination design', 
        img: 'https://i.pinimg.com/736x/f0/25/2f/f0252fbbd4206798e9b92c78ce21f632.jpg', // Corporate/Industrial architectural grid lighting
        details: ['Lux Level Mapping', 'Architectural Automations', 'Emergency Path Systems'] 
      },
      { 
        name: 'Electrical Works', 
        desc: 'Complete heavy electrical infrastructure', 
        img: 'https://i.pinimg.com/736x/af/3a/bd/af3abdcde2f0de641a26a127d93991a7.jpg', // Heavy industrial electrical panels & infrastructure
        details: ['HT/LT Panel Installations', 'Transformer Placement', 'Uninterrupted Power Setups'] 
      },
      { 
        name: 'Network Cabling', 
        desc: 'Structured data & communication systems', 
        img: 'https://i.pinimg.com/736x/04/8c/0c/048c0c1e2dcf0f09ece754569135e576.jpg', // Clean IT server room ethernet/fiber patching
        details: ['Cat6/Fiber Optic Layouts', 'Server Rack Topologies', 'Certified Compliance Runs'] 
      },
      { 
        name: 'Security Systems', 
        desc: 'Biometric access & high-definition CCTV surveillance', 
        img: 'https://i.pinimg.com/736x/5d/91/90/5d919061afb01bb6e47a207ee8259fa3.jpg', // Modern commercial security dome camera
        details: ['IP-Based Camera Grids', 'Access Control Locks', 'Central Monitoring Console'] 
      },
      { 
        name: 'Key Management', 
        desc: 'Electronic access control solutions', 
        img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=500&q=80', // Digital dashboard monitoring facility access
        details: ['Smart Card Integration', 'Audit Trail Software', 'Fail-Safe Logic Systems'] 
      },
      { 
        name: 'Fire Protection', 
        desc: 'Safety compliance & prevention systems', 
        img: 'https://i.pinimg.com/736x/cc/2f/e9/cc2fe99b7ee08a4116b325241c2d5efc.jpg', // Industrial red fire pipelines and valves
        details: ['Sprinkler System Engineering', 'Smoke Detector Arrays', 'Hydrant Line Frameworks'] 
      },
    ]
  },
  {
    id: 'construction',
    title: 'Construction & Builder Works',
    tagline: 'Structural integrity meets quality craftsmanship',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', // Active professional construction site
    extendedDesc: 'Heavy infrastructure execution from initial earthworks and site clearing to advanced metal work, facade elevation, and perimeter assemblies.',
    items: [
      { 
        name: 'Construction Preliminaries', 
        desc: 'Site preparation and temporary structural works', 
        img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=500&q=80', // Earthworks, heavy machinery site prep
        details: ['Excavation & Shoring', 'Site Surveying & Grid Marking', 'Safety Scaffolding Towers'] 
      },
      { 
        name: 'Structural Works', 
        desc: 'Foundation, framing, and modifications to safety codes', 
        img: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=500&q=80', // Heavy steel girder/concrete structural engineering
        details: ['Reinforced Concrete Casting', 'Steel Girder Assemblies', 'Load-Bearing Modifications'] 
      },
      { 
        name: 'ACP Elevation', 
        desc: 'Aluminum composite panel modern cladding installations', 
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80', // Modern commercial skyscraper cladding facade
        details: ['Weatherproof Membrane Wraps', 'Sub-Frame Matrix Alignments', 'Premium Architectural Finishes'] 
      },
      { 
        name: 'Demolition Works', 
        desc: 'Safe, controlled demolition and waste management', 
        img: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=500&q=80', // Safe technical site clearance and structural debris sorting
        details: ['Structural Load Shifting', 'Debris Sorting & Clearance', 'Controlled Kinetic Impact'] 
      },
      { 
        name: 'Partition Works', 
        desc: 'Drywall, glass, and custom flexible layout partitions', 
        img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=500&q=80', // Clean office space layouts and partition systems
        details: ['Acoustic Decibel Dampening', 'Toughened Glass Channels', 'Fire-Rated Wall Linings'] 
      },
      { 
        name: 'Door Supply & Install', 
        desc: 'Complete door installations and technical hardware fitting', 
        img: 'https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=500&q=80', // Modern professional heavy commercial doors and glass entries
        details: ['Fire-Rated Metal Enclosures', 'Heavy-Duty Pivots', 'Panic Bar Configurations'] 
      },
    ]
  },
  {
    id: 'finishes',
    title: 'Finishes & Fittings',
    tagline: 'Where craftsmanship meets pristine design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80', // Luxury interior finish architectural space
    extendedDesc: 'Precision interior detailing delivering luxury visual impact for high-traffic corporate spaces, automotive showrooms, and executive hubs.',
    items: [
      { 
        name: 'Wall Finishes', 
        desc: 'Painting, wallpaper, and premium decorative wall treatments', 
        img: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=500&q=80', // Clean architectural wall finishes and paint masking
        details: ['Texture Coat Application', 'Anti-Bacterial Enamels', 'Precision Edge Masking'] 
      },
      { 
        name: 'Floor Finishes', 
        desc: 'Tiles, vinyl, epoxy, and specialized industrial solutions', 
        img: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=500&q=80', // Premium polished self-leveling industrial/commercial floor finish
        details: ['Self-Leveling Underlayments', 'High-Gloss Epoxy Shells', 'Anti-Static ESD Tile Work'] 
      },
      { 
        name: 'Ceiling Works', 
        desc: 'False ceilings, geometric lighting integrations, and acoustics', 
        img: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=500&q=80', // Modern modular architectural grid false ceiling installation
        details: ['Gypsum Board Framing', 'Modular Grid Drop Formats', 'Integrated Linear Diffusers'] 
      },
      { 
        name: 'Roller Blinds', 
        desc: 'Architectural window treatments for light control', 
        img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&q=80', // Commercial floor-to-ceiling motorized roller blinds setup
        details: ['Motorized Somfy Automations', 'Blackout & Solar Screens', 'U-Channel Light Enclosures'] 
      },
      { 
        name: 'Plumbing & Sanitary', 
        desc: 'Complete premium plumbing and sanitary fixture systems', 
        img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80', // Premium automated and concealed commercial sanitary lines
        details: ['Concealed Diverter Matrices', 'Pressure-Tested Line Feeds', 'Commercial Waste Venting'] 
      },
    ]
  }
];
type ServiceItem = typeof serviceCategories[0]['items'][0];

export function Services_Core() {
  const [activeTab, setActiveTab] = useState('mep');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
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

  const currentCategory = serviceCategories.find(cat => cat.id === activeTab) || serviceCategories[0];
  const activeIndex = serviceCategories.findIndex(cat => cat.id === activeTab) + 1;

  return (
    <div 
      id="services" 
      ref={sectionRef} 
      className="py-28 px-6 md:px-12 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden relative font-sans"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#c5a88008_1px,transparent_1px),linear-gradient(to_bottom,#c5a88008_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section */}
        <motion.div 
          className="mb-20 flex flex-col items-center text-center font-sans"
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-sm tracking-widest text-black/40 dark:text-white/40 mb-4 font-sans font-bold">
            TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text:black dark:text-white">
            Our Architectural Frameworks
          </h2>
          <div className="w-16 h-[2px] bg-[#c5a880] mb-8" />
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl text-md font-normal leading-relaxed font-sans">
            Industrial engineering benchmarks paired with design precision. Select a discipline below to filter our structural core solutions.
          </p>

          <div className="w-full max-w-3xl mt-12 grid grid-cols-1 md:grid-cols-3 border border-zinc-200 dark:border-zinc-800 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] overflow-hidden font-sans">
            {serviceCategories.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="relative py-3.5 px-6 rounded-xl text-center transition-all duration-500 outline-none overflow-hidden group font-sans"
                >
                  {isSelected && (
                    <motion.div 
                      layoutId="premiumTabBackground"
                      className="absolute inset-0 shadow-[0_4px_20px_rgba(197,168,128,0.12)] border border-black/[0.04] z-0 rounded-xl bg-[#c88323]"
                      transition={{ type: "spring", stiffness: 220, damping: 28 }}
                    />
                  )}
                  <div className="relative z-10 flex flex-col items-center font-sans">
                    <span className={`text-sm font-bold transition-colors duration-300 tracking-normal font-sans ${
                      isSelected ? 'text-white' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-white'
                    }`}>
                      {cat.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
          
          {/* INVERTED HERO CARD */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 font-sans">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl p-6 border transition-all duration-500 flex flex-col justify-between font-sans bg-zinc-900 border-zinc-800 text-white shadow-[0_20px_40px_rgba(0,0,0,0.2)] dark:bg-white dark:border-zinc-200 dark:text-zinc-900"
              >
                <div className="font-sans">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-800 dark:bg-zinc-200 rounded-2xl mb-6">
                    <div className="absolute top-4 left-4 z-10 px-5 py-2 bg-white/10 dark:bg-black/10 backdrop-blur-md rounded-2xl border border-white/10 dark:border-black/5">
                      <span className="text-white dark:text-zinc-900 font-bold text-xl tracking-tight">
                        0{activeIndex}
                      </span>
                    </div>
                    <img 
                      src={currentCategory.image} 
                      alt={currentCategory.title}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>

                  <span className="text-[10px] tracking-widest font-inter font-bold text-[#c5a880] block mb-2 uppercase text-center">
                    {currentCategory.tagline}
                  </span>
                  
                  <h3 className="text-2xl font-bold tracking-tight mb-3 mt-3 font-sans">
                    {currentCategory.title}
                  </h3>
                  
                  <p className="text-sm font-normal leading-relaxed text-zinc-400 dark:text-zinc-500 mb-6">
                    {currentCategory.extendedDesc}
                  </p>

                  <div className="border-t pt-5 space-y-3.5 font-sans border-zinc-800 dark:border-zinc-200">
                    <div className="flex items-start gap-3 text-xs font-medium font-sans text-zinc-300 dark:text-zinc-600">
                      <svg className="w-4 h-4 mt-0.5 text-[#c5a880] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Licensed System Contractors</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs font-medium font-sans text-zinc-300 dark:text-zinc-600">
                      <svg className="w-4 h-4 mt-0.5 text-[#c5a880] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Safety Standard Compliance Matrix</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs font-medium font-sans text-zinc-300 dark:text-zinc-600 mb-5">
                      <svg className="w-4 h-4 mt-0.5 text-[#c5a880] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span>Premium Quality Material Assured</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: MODERN 2-COLUMN GRID ON LARGE SCREENS */}
          <div className="lg:col-span-8 font-sans">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans"
              >
                {currentCategory.items.map((service, index) => (
                  <div
                    key={service.name}
                    onClick={() => setSelectedService(service)}
                    className="group relative rounded-2xl overflow-hidden border transition-all duration-500 flex flex-col justify-between font-sans bg-white border-zinc-200/80 text-zinc-900 hover:border-[#c5a880]/60 hover:shadow-[0_15px_35px_rgba(197,168,128,0.06)] cursor-pointer dark:bg-zinc-900 dark:border-zinc-800 dark:text-white dark:hover:border-[#c5a880]/60"
                  >
                    {/* TOP SECTION: IMAGE BLOCK WITH FIXED HEIGHT */}
                    <div className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-800 h-44 w-full">
                      <img 
                        src={service.img} 
                        alt={service.name}
                        className="h-full w-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute bottom-3 left-4 text-[10px] font-mono font-semibold tracking-wider text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </div>

                    {/* BOTTOM SECTION: CONTENT BLOCK */}
                    <div className="p-5 flex-grow flex flex-col justify-between items-start">
                      <div className="w-full">
                        <h4 className="text-md font-bold tracking-tight mb-1.5 transition-colors duration-300 font-sans text-zinc-900 group-hover:text-[#c5a880] dark:text-white dark:group-hover:text-[#c5a880]">
                          {service.name}
                        </h4>
                        <p className="text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400 line-clamp-2">
                          {service.desc}
                        </p>
                      </div>

                      {/* PERSISTENT ACTION PROTOCOL */}
                      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 w-full text-[#c5a880]">
                        <span className="text-[10px] tracking-widest font-bold uppercase transition-all duration-300 group-hover:tracking-wider">
                          View Protocols
                        </span>
                        <svg 
                          className="w-3.5 h-3.5 transition-transform duration-300 transform group-hover:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2.5" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>

      {/* LUXURY SIDE DRAWER */}
      {/* LUXURY SIDE DRAWER */}
<AnimatePresence>
  {selectedService && (
    <motion.div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-end backdrop-blur-sm font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'linear' }}
      onClick={() => setSelectedService(null)}
    >
      <motion.div
        className="w-full sm:max-w-lg h-full p-6 md:p-12 flex flex-col justify-between border-l shadow-2xl relative font-sans transition-colors duration-500 bg-white border-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:border-zinc-800 dark:text-white overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 240, mass: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="font-sans">
          <div className="flex items-center justify-between mb-8 md:mb-10 font-sans">
            <div className="text-[12px] font-inter font-bold tracking-[0.25em] text-[#c5a880] uppercase">
              TECHNICAL ARCHITECTURE
            </div>
            <button
              onClick={() => setSelectedService(null)}
              className="text-[12px] font-semibold tracking-widest font-inter text-zinc-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-1.5 uppercase group"
            >
              <span>Close</span> 
              <span className="transition-transform duration-300 group-hover:rotate-90">✕</span>
            </button>
          </div>

          {/* ARCHITECTURAL HEADER GRAPHIC */}
          <div className="flex gap-4 items-center mb-6">
            <div className="w-1.5 h-12 bg-[#c5a880] rounded-full shrink-0" />
            <div>
              {/* Main title size set to 16px */}
              <h3 className="text-base tracking-tight font-bold font-sans text-zinc-900 dark:text-white">
                {selectedService.name}
              </h3>
              <p className="text-xs font-normal mt-1 text-zinc-400 dark:text-zinc-500">
                Standard Operating Specifications
              </p>
            </div>
          </div>

          {/* Description body size set to 14px */}
          <p className="text-sm font-normal leading-relaxed mb-8 font-sans text-zinc-500 dark:text-zinc-400">
            {selectedService.desc}
          </p>

          <div className="h-px w-full mb-8 bg-zinc-100 dark:bg-zinc-800" />

          <h4 className="text-[12px] font-mono font-bold tracking-widest uppercase mb-4 text-zinc-400 dark:text-zinc-500">
            SPECIFICATION CRITERIA
          </h4>
          
          <div className="space-y-3 font-sans">
            {selectedService.details.map((detail, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl border flex items-center justify-between gap-4 font-sans transition-all duration-300 hover:border-[#c5a880]/30 bg-[#faf9f6] border-zinc-200/60 dark:bg-zinc-950 dark:border-zinc-800/80"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880] shrink-0" />
                  {/* Row text details size set to 14px */}
                  <span className="text-sm font-medium font-sans text-zinc-700 dark:text-zinc-300 truncate">
                    {detail}
                  </span>
                </div>
                <span className="text-[11px] font-mono font-bold text-[#c5a880] bg-[#c5a880]/10 px-2 py-0.5 rounded-md tracking-wider shrink-0">
                  CERTIFIED
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area - Added spacing protection for smaller mobile screen boundaries */}
        <div className="pt-6 mt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[13px] font-inter font-medium border-zinc-100 dark:border-zinc-800 text-zinc-400 dark:text-zinc-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>SYSTEM INTEGRITY: 100%</span>
          </div>
          <span>REGULATORY COMPLIANT</span>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}