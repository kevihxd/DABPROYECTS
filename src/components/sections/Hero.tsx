import { motion, useScroll, useTransform } from 'motion/react';

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden border-b border-brand-border">
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: yRange }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-white/20 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
            alt="Architecture" 
            className="w-full h-[120%] object-cover contrast-100 opacity-90"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-16 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand-accent text-sm uppercase tracking-[0.5em] mb-8 font-semibold">Arquitectura & Ingeniería</h2>
            <h1 className="text-7xl md:text-9xl lg:text-[10rem] mb-12 leading-[0.8] font-bold tracking-tighter">
              DISEÑO QUE <br />
              <span className="text-stroke">TRASCIENDE</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col md:flex-row md:items-end gap-16"
          >
            <p className="text-lg md:text-xl text-brand-text-dim max-w-md leading-relaxed font-light">
              Transformamos espacios urbanos con soluciones estructurales innovadoras. Precisión técnica en cada detalle.
            </p>
            <motion.button 
              whileHover={{ backgroundColor: 'var(--color-brand-primary)', color: 'white' }}
              className="w-fit px-12 py-6 border border-brand-primary text-brand-primary text-xs uppercase tracking-[0.4em] font-bold transition-all"
            >
              Portafolio 2024
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 border-t border-l border-brand-border p-12 hidden lg:block">
        <div className="flex items-center space-x-6 text-[10px] uppercase tracking-[0.4em] font-bold">
          <span className="text-brand-accent">Instagram</span>
          <span className="text-white/20">/</span>
          <span>Linkedin</span>
          <span className="text-white/20">/</span>
          <span>Behance</span>
        </div>
      </div>
    </section>
  );
};
