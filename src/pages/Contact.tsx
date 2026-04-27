import { motion } from 'motion/react';

export const Contact = () => {
  return (
    <div className="pt-24 min-h-[80vh] flex flex-col justify-center bg-brand-surface">
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-3xl mx-auto leading-[1.1] tracking-tighter">
              ¿TIENE UN PROYECTO EN MENTE? <br />
              <span className="text-brand-accent italic font-light">CONSTRUYAMOS EL FUTURO.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="bg-brand-primary text-white px-12 py-6 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-brand-text transition-all duration-300">
                Solicitar Consultoría
              </button>
              <a href="mailto:contacto@dabproyectos.com" className="border border-brand-border px-12 py-6 font-bold uppercase text-[10px] tracking-[0.4em] hover:border-brand-primary hover:text-brand-primary transition-all duration-300">
                Escríbanos un Correo
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-text/5 -z-10" />
      </section>
    </div>
  );
};
