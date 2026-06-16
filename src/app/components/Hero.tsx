
import { motion } from 'motion/react';


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
