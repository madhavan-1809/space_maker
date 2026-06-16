

import { useState } from 'react';
import { motion } from 'framer-motion'; // Reverted to standard framer-motion import for broad compatibility
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email content strings
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open user's default email client with pre-filled content
    window.location.href = `mailto:ganesh.sminteriors@gmail.com?subject=${subject}&body=${body}`;
    
    // Optional: Clear form data after sending redirect
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div id="contact" className="py-32 px-6 bg-white dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-sm tracking-widest text-black/40 dark:text-white/40 mb-4">GET IN TOUCH</div>
           <h2 className="text-4xl md:text-5xl mb-4 dark:text-white">Let's Create Together</h2>
          <div className="w-16 h-px bg-black/20 dark:bg-white/20 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-8 dark:text-white">Schedule a Consultation</h3>
            <p className="text-lg text-black/60 dark:text-white/60 mb-12 leading-relaxed">
              Ready to transform your space? Get in touch with us today to discuss your project and discover how we can bring your vision to life.
            </p>

            <div className="space-y-8">
              {/* Phone Section */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-none transition-colors group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <Phone size={20} className="dark:text-white transition-colors group-hover:text-white dark:group-hover:text-black" />
                </div>
                <div>
                  <div className="text-sm text-black/40 dark:text-white/40 mb-1 tracking-wider">PHONE</div>
                  <div className="flex flex-col md:flex-row md:gap-3 dark:text-white text-base">
                    <a href="tel:+917200944499" className="hover:underline transition-all hover:text-black dark:hover:text-neutral-300">
                      +91 7200944499
                    </a>
                    <span className="hidden md:inline text-black/20 dark:text-white/20">|</span>
                    <a href="tel:+919566116683" className="hover:underline transition-all hover:text-black dark:hover:text-neutral-300">
                      +91 9566116683
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Section */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-black/5 dark:bg-white/5 rounded-none transition-colors group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                  <Mail size={20} className="dark:text-white transition-colors group-hover:text-white dark:group-hover:text-black" />
                </div>
                <div>
                  <div className="text-sm text-black/40 dark:text-white/40 mb-1 tracking-wider">EMAIL</div>
                  <a 
                    href="mailto:ganesh.sminteriors@gmail.com" 
                    className="dark:text-white text-base hover:underline transition-all hover:text-black dark:hover:text-neutral-300"
                  >
                    ganesh.sminteriors@gmail.com
                  </a>
                </div>
              </div>

              {/* Office Location Section */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/5 dark:bg-white/5">
                  <MapPin size={20} className="dark:text-white" />
                </div>
                <div>
                  <div className="text-sm text-black/40 dark:text-white/40 mb-1 tracking-wider">OFFICE</div>
                  <div className="dark:text-white text-base">Chennai</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Input Component */}
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="block py-3 px-0 w-full text-base text-black bg-transparent border-0 border-b border-black/20 appearance-none dark:text-white dark:border-white/20 focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="name" 
                  className="peer-focus:font-medium absolute text-sm text-black/40 dark:text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black dark:peer-focus:text-white tracking-wider"
                >
                  NAME
                </label>
              </div>

              {/* Email Input Component */}
              <div className="relative z-0 w-full group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block py-3 px-0 w-full text-base text-black bg-transparent border-0 border-b border-b-black/20 appearance-none dark:text-white dark:border-b-white/20 focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer transition-colors duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="email" 
                  className="peer-focus:font-medium absolute text-sm text-black/40 dark:text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black dark:peer-focus:text-white tracking-wider"
                >
                  EMAIL
                </label>
              </div>

              {/* Message Input Component */}
              <div className="relative z-0 w-full group">
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="block py-3 px-0 w-full text-base text-black bg-transparent border-0 border-b border-b-black/20 appearance-none dark:text-white dark:border-b-white/20 focus:outline-none focus:ring-0 focus:border-black dark:focus:border-white peer resize-none transition-colors duration-300"
                  placeholder=" "
                  required
                />
                <label 
                  htmlFor="message" 
                  className="peer-focus:font-medium absolute text-sm text-black/40 dark:text-white/40 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-black dark:peer-focus:text-white tracking-wider"
                >
                  MESSAGE
                </label>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full px-8 py-4 bg-black dark:bg-white text-white dark:text-black text-sm tracking-wider font-medium hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 border border-black dark:border-white"
              >
                SEND MESSAGE
                <Send size={14} className="ml-1" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}