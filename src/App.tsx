/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Mail, Phone, CheckCircle, Star, MessageCircle, ChevronLeft, ChevronRight, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const services = [
  { id: 1, title: 'Bridal Makeup', description: 'Flawless, long-lasting look for your special day.', image: 'images/service1.jpg' },
  { id: 2, title: 'Engagement Makeup', description: 'Soft, glamorous makeup tailored for engagement ceremonies.', image: 'images/service2.jpg' },
  { id: 3, title: 'Party Makeup', description: 'Stand out in any event with our signature party makeup.', image: 'images/service3.jpg' },
  { id: 4, title: 'Hair Styling', description: 'Elegant updos, curls, and contemporary hair styles.', image: 'images/service4.jpg' },
  { id: 5, title: 'Skin Care', description: 'Pre-event facials and skin preparation routines.', image: 'images/service5.jpg' },
];

const gallery = ['images/gallery1.jpg', 'images/gallery2.jpg', 'images/gallery3.jpg', 'images/gallery4.jpg', 'images/gallery5.jpg', 'images/gallery6.jpg'];

const testimonials = [
  { id: 1, text: "Farhana made my wedding day perfect! The makeup didn't budge even after hours of dancing. Highly recommended!", author: "Sadia A." },
  { id: 2, text: "I loved my reception look. The blending was flawless and she completely understood the soft look I wanted.", author: "Tanisha R." },
  { id: 3, text: "Excellent environment and premium products. Felt very comfortable and looked amazing for my sister's wedding.", author: "Mouri Z." },
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    // Simulate preloader
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Full-screen Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
          >
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
              className="font-serif text-3xl md:text-5xl text-accent"
            >
              Jesica Makeover Studio
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <h1 className="font-serif text-2xl font-bold text-accent tracking-wide">
                Jesica Makeover Studio
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-accent/80 hover:text-accent font-medium text-sm tracking-widest uppercase transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-accent focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-background shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-4 text-accent border-b border-secondary/20 uppercase tracking-widest text-sm font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/8801705792645" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <MessageCircle size={32} />
      </a>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-primary/20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
          style={{ 
            backgroundImage: "url('images/hero.jpg')",
            backgroundColor: "var(--color-primary)" 
          }}
        >
          {/* Fallback pattern if image is missing */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-background/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight drop-shadow-sm"
          >
            Enhance Your Natural Beauty
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-accent/90 mb-10 font-light"
          >
            Professional Bridal & Party Makeover by Farhana Trina
          </motion.p>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button onClick={() => scrollToSection('contact')} className="px-8 py-4 bg-accent text-white rounded-full font-medium tracking-wide hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl w-64 sm:w-auto">
              Book Now
            </button>
            <button onClick={() => scrollToSection('services')} className="px-8 py-4 bg-transparent border border-accent text-accent rounded-full font-medium tracking-wide hover:bg-accent/5 transition-all w-64 sm:w-auto">
              View Services
            </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl bg-primary/40 flex items-center justify-center p-8"
            >
              <img src="images/about.jpg" alt="Farhana Trina" className="absolute inset-0 w-full h-full object-cover" onError={(e) => e.currentTarget.style.display = 'none'} />
              <div className="text-center md:hidden">
                <span className="text-sm opacity-50 block mb-2">[images/about.jpg placeholder]</span>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">Behind The Brushes</h2>
              <h3 className="text-xl text-secondary font-medium tracking-widest uppercase mb-6">Meet Farhana Trina</h3>
              <p className="text-accent/80 leading-relaxed mb-6">
                With years of experience in the beauty industry, Farhana Trina specializes in creating bespoke bridal and party looks. Every brushstroke is dedicated to enhancing your unique features, ensuring you radiate confidence on your special day.
              </p>
              <p className="text-accent/80 leading-relaxed mb-8">
                At Jesica Makeover Studio, we prioritize your vision. We blend premium products with expert techniques to deliver flawless, long-lasting results that look striking in person and in photography.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Bridal Expertise",
                  "Premium Products",
                  "Client Satisfaction",
                  "Hygienic Service"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="text-secondary" size={20} />
                    <span className="text-accent/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-accent mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={service.id} 
                className="bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-[4/3] bg-primary relative overflow-hidden flex items-center justify-center">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                   <span className="text-xs opacity-50 z-0">[{service.image}]</span>
                </div>
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-accent mb-3">{service.title}</h3>
                  <p className="text-accent/75">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { title: "Professional Artist", desc: "Expert techniques for flawless looks" },
              { title: "Premium Products", desc: "High-end makeup brands only" },
              { title: "Hygienic Service", desc: "Strict sanitation protocols" },
              { title: "Affordable Packages", desc: "Luxury service at fair prices" }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                  <Star size={32} />
                </div>
                <h4 className="font-serif text-xl mb-2">{feature.title}</h4>
                <p className="text-background/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Gallery */}
      <section id="portfolio" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-accent mb-4">Portfolio</h2>
            <p className="text-accent/70 uppercase tracking-widest text-sm">Real Brides, Real Beauty</p>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {gallery.map((img, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                key={idx} 
                className="relative break-inside-avoid overflow-hidden rounded-xl bg-primary cursor-pointer group flex items-center justify-center aspect-[3/4]"
                onClick={() => setLightboxImg(img)}
              >
                <img src={img} alt={`Gallery ${idx + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => e.currentTarget.style.display = 'none'} />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-300"></div>
                <span className="text-xs opacity-50 z-0">[{img}]</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImg(null)}
            className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4"
          >
            <button className="absolute top-6 right-6 text-white bg-accent/50 rounded-full p-2 hover:bg-white hover:text-accent transition">
              <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full bg-primary flex items-center justify-center rounded-lg overflow-hidden" onClick={e => e.stopPropagation()}>
                <img src={lightboxImg} alt="Preview" className="absolute inset-0 w-full h-full object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
                <span className="text-accent opacity-50 z-0">[Preview: {lightboxImg}]</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Testimonials */}
      <section className="py-24 bg-primary/20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-accent mb-16">Client Love</h2>
          
          <div className="relative min-h-[200px]">
             {testimonials.map((test, idx) => (
                <div 
                  key={test.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    idx === activeTestimonial ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div className="bg-background rounded-3xl p-10 shadow-xl border border-primary mx-auto max-w-2xl">
                     <div className="flex justify-center text-secondary mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} className="mx-1" />)}
                     </div>
                     <p className="font-serif text-xl md:text-2xl italic text-accent/80 mb-8 leading-relaxed">
                       "{test.text}"
                     </p>
                     <h5 className="font-medium text-accent tracking-widest uppercase">— {test.author}</h5>
                  </div>
                </div>
             ))}
          </div>
          
          <div className="flex justify-center mt-12 gap-3">
             <button onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)} className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition">
                <ChevronLeft size={20} />
             </button>
             <button onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)} className="w-10 h-10 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition">
                <ChevronRight size={20} />
             </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 flex items-center justify-center text-center overflow-hidden bg-accent">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="font-serif text-4xl md:text-6xl text-background mb-8">Book Your Makeover Today</h2>
          <p className="text-secondary mb-10 text-lg">Let us make you feel extraordinary for your next special event.</p>
          <a href="https://wa.me/8801705792645" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-10 py-5 bg-background text-accent rounded-full font-bold tracking-widest hover:bg-secondary hover:text-white transition-all shadow-xl hover:shadow-2xl">
            <MessageCircle size={24} />
            CONTACT NOW (WHATSAPP)
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/20 rounded-[40px] p-8 md:p-16 text-center shadow-lg border border-primary/50">
            <h2 className="font-serif text-3xl md:text-5xl text-accent mb-12">Get In Touch</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <MapPin size={28} />
                </div>
                <h4 className="font-serif text-xl mb-2 text-accent">Address</h4>
                <p className="text-accent/70 max-w-[200px] leading-relaxed text-sm">24/A Tipu Sultan Road Wari Dhaka, Bangladesh, 1203</p>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Mail size={28} />
                </div>
                <h4 className="font-serif text-xl mb-2 text-accent">Email</h4>
                <a href="mailto:farhana.trina@2019gmail.com" className="text-accent/70 text-sm hover:text-secondary transition">farhana.trina@2019<br/>gmail.com</a>
              </div>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-6 shadow-md text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                  <Phone size={28} />
                </div>
                <h4 className="font-serif text-xl mb-2 text-accent">Phone</h4>
                <a href="tel:01732606502" className="text-accent/70 text-sm hover:text-secondary transition">01732-606502</a>
              </div>
            </div>
            
            <div className="mt-16 pt-12 border-t border-accent/10 flex justify-center gap-6">
                <a href="https://wa.me/8801705792645" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                  <MessageCircle size={24} />
                </a>
                <a href="https://www.facebook.com/jasicabeautyparlour" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full border border-accent/20 flex items-center justify-center text-accent hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
                  <Facebook size={24} />
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer bg-accent text-background py-16 text-center border-t border-accent/20">
         <div className="max-w-7xl mx-auto px-4">
             <h2 className="font-serif text-3xl mb-8">Jesica Makeover Studio</h2>
             <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm uppercase tracking-widest text-background/60">
                 <button onClick={() => scrollToSection('home')} className="hover:text-background transition">Home</button>
                 <button onClick={() => scrollToSection('about')} className="hover:text-background transition">About</button>
                 <button onClick={() => scrollToSection('services')} className="hover:text-background transition">Services</button>
                 <button onClick={() => scrollToSection('portfolio')} className="hover:text-background transition">Portfolio</button>
             </div>
             <p className="text-background/40 text-sm">
                &copy; {new Date().getFullYear()} Jesica Makeover Studio. All rights reserved.<br/>
                Artist: Farhana Trina
             </p>
         </div>
      </footer>
    </div>
  );
}
