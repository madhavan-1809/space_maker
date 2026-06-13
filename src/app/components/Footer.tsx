import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            {/* <div className="text-2xl mb-4 tracking-wide">Space Makers Interior Solutions Design </div> */}
            <div className="flex flex-col items-start mb-8 select-none group">
  {/* Main Brand Header */}
  <div className="text-3xl md:text-4xl font-black tracking-tight text-white leading-none ">
    SPACE<span className="m-5 text-white font-light tracking-wide">MAKERS</span>
  </div>
  
  {/* Premium Architectural Sub-bar */}
  <div className="flex items-center gap-2 mt-2 w-full max-w-xs">
    <div className="h-[1px] bg-white/20 flex-grow" />
    <span className="text-[10px] md:text-xs font-medium tracking-[0.3em] text-white/50 uppercase whitespace-nowrap">
      INTERIOR SOLUTIONS DESIGN
    </span>
    <div className="h-[1px] bg-white/20 flex-grow" />
  </div>
</div>
            <p className="text-white/60 leading-relaxed max-w-md">
              Creating timeless, sophisticated interiors that define luxury living and elevate everyday experiences.
            </p>
            <p className='mt-6 text-lg text-[#c5a880]'>Design <span className='text-white text-4xl ml-2 mr-2'>.</span> Build <span className='text-white text-4xl ml-2 mr-2'>.</span> Transform</p>
          </div>

          <div>
            <h4 className="mb-4 tracking-wider">QUICK LINKS</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 tracking-wider">FOLLOW US</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:hello@spacemakers.com"
                className="p-2 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <div>© {currentYear} Space Makers Interior Solutions. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
