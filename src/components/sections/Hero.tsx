import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070", // Arch 1
  "https://images.unsplash.com/photo-1449156001931-893021711202?auto=format&fit=crop&q=80&w=2070", // Arch 2
  "https://images.unsplash.com/photo-1541991471032-49516477cc58?auto=format&fit=crop&q=80&w=2070", // Arch 3
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2071"  // Arch 4
];

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden border-b border-brand-border">
      <div className="absolute inset-0 z-0 bg-brand-bg">
        <motion.div 
          style={{ y: yRange }}
          className="w-full h-full relative"
        >
          <div className="absolute inset-0 bg-white/20 z-10" />
          
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImageIndex}
              src={BACKGROUND_IMAGES[currentImageIndex]}
              alt="Architecture Slider"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.9, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-[120%] object-cover contrast-100"
            />
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="container mx-auto px-16 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-accent text-sm uppercase tracking-[0.5em] mb-8 font-semibold drop-shadow-sm">Arquitectura & Ingeniería</h2>
            <img src="/logo.png" alt="DAB Proyectos" className="w-auto h-20 md:h-32 lg:h-48 mb-12 drop-shadow-lg object-contain" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-row md:items-end gap-16"
          >
            <p className="text-lg md:text-xl text-brand-text-dim max-w-md leading-relaxed font-light drop-shadow-sm">
              Transformamos espacios urbanos con soluciones estructurales innovadoras. Precisión técnica en cada detalle.
            </p>

          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 border-t border-l border-brand-border p-12 hidden lg:block bg-white/10 backdrop-blur-md">
        <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[0.4em] font-bold">
          <div className="flex items-center space-x-2 mr-4">
            {BACKGROUND_IMAGES.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 ${i === currentImageIndex ? 'w-8 bg-brand-primary' : 'w-2 bg-brand-text/30'}`}
              />
            ))}
          </div>
          <span className="text-brand-accent">Instagram</span>
          <span className="text-brand-text/50">/</span>
          <span>Linkedin</span>
          <span className="text-brand-text/50">/</span>
          <span>Behance</span>
        </div>
      </div>
    </section>
  );
};
