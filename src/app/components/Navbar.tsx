// import { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

//   const scrollToSection = (section: string) => {
//     const element = document.getElementById(section.toLowerCase());
//     element?.scrollIntoView({ behavior: 'smooth' });
//     setIsMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           <motion.div
//             className="text-2xl tracking-wide dark:text-white"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//           >
//             SPACE MAKERS
//           </motion.div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item}
//                 onClick={() => scrollToSection(item)}
//                 className="text-sm tracking-wider hover:opacity-60 transition-opacity dark:text-white"
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//               >
//                 {item.toUpperCase()}
//               </motion.button>
//             ))}
//             <motion.button
//               onClick={() => scrollToSection('contact')}
//               className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.5 }}
//             >
//               BOOK CONSULTATION
//             </motion.button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden p-2 dark:text-white"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             className="md:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10"
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: 'auto' }}
//             exit={{ opacity: 0, height: 0 }}
//           >
//             <div className="px-6 py-4 flex flex-col gap-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item}
//                   onClick={() => scrollToSection(item)}
//                   className="text-left text-sm tracking-wider hover:opacity-60 transition-opacity dark:text-white"
//                 >
//                   {item.toUpperCase()}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToSection('contact')}
//                 className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-colors text-center"
//               >
//                 BOOK CONSULTATION
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    
    if (element) {
      // Small delay prevents layout collision with Framer Motion closing animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-white dark:bg-black md:bg-white/80 md:dark:bg-black/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl tracking-wide dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            SPACE MAKERS
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm tracking-wider hover:opacity-60 transition-opacity dark:text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {item.toUpperCase()}
              </motion.button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              BOOK CONSULTATION
            </motion.button>
          </div>

          {/* Mobile Menu Button - Added type="button" to stabilize interactive hit-state */}
          <button
            type="button"
            className="md:hidden p-2 dark:text-white relative z-50 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-black border-t border-black/10 dark:border-white/10 w-full overflow-hidden absolute left-0 right-0 top-full"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Added explicit focus wrapper with pointer control structure */}
            <div className="px-6 py-6 flex flex-col gap-5 relative z-50 pointer-events-auto">
              {navItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => scrollToSection(item)}
                  className="w-full text-left py-2 text-sm font-medium tracking-wider hover:opacity-60 transition-all dark:text-white block cursor-pointer"
                >
                  {item.toUpperCase()}
                </button>
              ))}
              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider hover:bg-black/80 dark:hover:bg-white/80 transition-colors text-center font-medium block cursor-pointer"
              >
                BOOK CONSULTATION
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}