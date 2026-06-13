// import { motion } from 'motion/react';
// import { useEffect, useState } from 'react';

// export function Hero() {
//   const scrollToSection = (section: string) => {
//     const element = document.getElementById(section);
//     element?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // For subtle parallax effect on scroll
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div id="home" className="relative h-screen w-full overflow-hidden bg-[#f8f5f0] dark:bg-[#0a0a0a]">
//       {/* Premium Background */}
//       <div className="absolute inset-0 bg-[radial-gradient(at_50%_30%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
      
//       {/* Optional Luxury Background Image Overlay */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 dark:opacity-20"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd5b2c2e8f0f?q=80&w=2070')",
//           transform: `translateY(${scrollY * 0.15}px)` // subtle parallax
//         }}
//       />

//       {/* Floating Elegant Elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Large Gold Accent Circle */}
//         <motion.div
//           className="absolute top-[15%] right-[10%] w-[420px] h-[420px] border border-[#d4af37]/20 rounded-full"
//           animate={{ rotate: 360 }}
//           transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//         />

//         {/* Medium Square Frame */}
//         <motion.div
//           className="absolute top-[25%] left-[12%] w-56 h-56 border border-[#d4af37]/10 dark:border-white/10"
//           animate={{
//             y: [0, -25, 0],
//             rotate: [0, 8, 0],
//           }}
//           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Small Gold Accent */}
//         <motion.div
//           className="absolute bottom-[22%] right-[18%] w-32 h-32 bg-gradient-to-br from-[#d4af37]/10 to-transparent rounded-full"
//           animate={{
//             scale: [1, 1.15, 1],
//             opacity: [0.6, 0.9, 0.6],
//           }}
//           transition={{ duration: 9, repeat: Infinity }}
//         />

//         {/* Thin Decorative Lines */}
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-px h-40 bg-gradient-to-b from-transparent via-[#d4af37]/30 to-transparent"
//           animate={{ height: [80, 160, 80] }}
//           transition={{ duration: 7, repeat: Infinity }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 h-full flex items-center justify-center px-6">
//         <div className="text-center max-w-5xl">
//           {/* Pre-header */}
//           <motion.p
//             className="text-[#d4af37] tracking-[4px] text-sm mb-4 font-medium"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             EST. 2018 • LUXURY INTERIORS
//           </motion.p>

//           {/* Headline */}
//           <motion.h1
//             className="text-6xl md:text-7xl lg:text-[92px] leading-[1.05] tracking-tighter font-light text-black dark:text-white mb-8"
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >
//             Spaces That<br />
//             <span className="font-normal text-[#d4af37]">Define Legacy</span>
//           </motion.h1>

//           {/* Subheadline */}
//           <motion.p
//             className="text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-2xl mx-auto mb-14 leading-relaxed"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.2 }}
//           >
//             We craft timeless interiors where architecture, art, 
//             and emotion converge into extraordinary living experiences.
//           </motion.p>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-5 justify-center items-center"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.4 }}
//           >
//             <button
//               onClick={() => scrollToSection('contact')}
//               className="group px-10 py-5 bg-black dark:bg-white text-white dark:text-black text-sm tracking-widest hover:bg-[#d4af37] hover:text-black transition-all duration-300 flex items-center gap-3"
//             >
//               BEGIN YOUR JOURNEY
//               <span className="group-hover:translate-x-1 transition-transform">→</span>
//             </button>

//             <button
//               onClick={() => scrollToSection('projects')}
//               className="px-10 py-5 border border-black/70 dark:border-white/70 text-black dark:text-white text-sm tracking-widest hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
//             >
//               EXPLORE OUR WORK
//             </button>
//           </motion.div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2 }}
//       >
//         <span className="text-xs tracking-widest text-black/40 dark:text-white/40">SCROLL TO DISCOVER</span>
//         <div className="w-6 h-10 border border-black/30 dark:border-white/30 rounded-full flex justify-center pt-2">
//           <motion.div
//             className="w-1 h-2 bg-black/50 dark:bg-white/50 rounded-full"
//             animate={{ y: [0, 16, 0] }}
//             transition={{ duration: 1.8, repeat: Infinity }}
//           />
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Hero;
  
// import {  useRef } from 'react';
import { motion } from 'motion/react';

// function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const particles: Array<{
//       x: number;
//       y: number;
//       z: number;
//       vx: number;
//       vy: number;
//       vz: number;
//     }> = [];

//     for (let i = 0; i < 100; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         z: Math.random() * 1000,
//         vx: (Math.random() - 0.5) * 0.5,
//         vy: (Math.random() - 0.5) * 0.5,
//         vz: Math.random() * 2,
//       });
//     }

//     let animationId: number;

//     const animate = () => {
//       ctx.fillStyle = 'rgba(250, 250, 248, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.x += particle.vx;
//         particle.y += particle.vy;
//         particle.z += particle.vz;

//         if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
//         if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
//         if (particle.z < 0 || particle.z > 1000) particle.vz *= -1;

//         const scale = 1000 / (1000 - particle.z);
//         const x2d = (particle.x - canvas.width / 2) * scale + canvas.width / 2;
//         const y2d = (particle.y - canvas.height / 2) * scale + canvas.height / 2;
//         const size = Math.max(0.5, scale * 2); // Ensure size is always positive

//         ctx.fillStyle = `rgba(212, 175, 55, ${0.3 + particle.z / 2000})`;
//         ctx.beginPath();
//         ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       animationId = requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       cancelAnimationFrame(animationId);
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="absolute inset-0" />;
// }

export function Hero() {
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden bg-[#fafaf8] dark:bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* <AnimatedBackground /> */}

        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-black/10 dark:border-white/10"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-black/5 to-black/10 dark:from-white/5 dark:to-white/10"
          animate={{
            y: [0, 40, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-20 h-20 rounded-full bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5"
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight dark:text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designing Spaces
            <br />
            That Define You
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-black/60 dark:text-white/60 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transforming interiors into timeless expressions of luxury and elegance
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
            >
              BOOK CONSULTATION
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 border border-black dark:border-white text-black dark:text-white text-sm tracking-wider hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              VIEW PROJECTS
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border border-black/20 dark:border-white/20 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-black/40 dark:bg-white/40 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
