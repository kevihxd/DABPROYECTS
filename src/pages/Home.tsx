import { motion } from 'motion/react';
import { Hero, Empresa } from '../components/sections';

const Metrics = () => (
  <section className="border-b border-brand-border bg-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-brand-border border-x border-brand-border">
        {[
          { label: 'Proyectos realizados', val: '+500' },
          { label: 'Ciudades y Municipios', val: '+40' },
          { label: 'Premios y Reconocimientos', val: '5' },
          { label: 'Proyectos LEED Certificados', val: '3' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="py-16 px-8 text-center"
          >
            <p className="text-5xl font-bold mb-4 text-brand-primary">{stat.val}</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-brand-text-dim font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const History = () => (
  <section className="py-32 bg-white border-b border-brand-border">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Nuestra Historia</span>
          <h2 className="text-5xl font-bold mb-10 tracking-tighter">DESDE 1997 <br/> INNOVANDO</h2>
          <div className="space-y-6 text-brand-text-dim text-lg font-light leading-relaxed">
            <p>
              DAB PROYECTOS S.A.S. nace en el año 1997 como una empresa de asesorías. En 2009 nos consolidamos como líderes en diseño e innovación a nivel nacional.
            </p>
            <p>
              En 2016 incursionamos en el desarrollo e implementación total de sistemas acústicos, térmicos y bioclimáticos, garantizando ahorro de energía, confort y sostenibilidad para nuestros clientes.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-square bg-white border border-brand-border flex flex-col justify-center p-8 shadow-sm">
            <span className="text-brand-primary text-3xl font-bold mb-2">1997</span>
            <p className="text-[10px] uppercase tracking-widest text-brand-text-dim">Fundación</p>
          </div>
          <div className="aspect-square bg-white border border-brand-border flex flex-col justify-center p-8 translate-y-8 shadow-sm">
            <span className="text-brand-primary text-3xl font-bold mb-2">2009</span>
            <p className="text-[10px] uppercase tracking-widest text-brand-text-dim">Consolidación</p>
          </div>
          <div className="aspect-square bg-white border border-brand-border flex flex-col justify-center p-8 shadow-sm">
            <span className="text-brand-primary text-3xl font-bold mb-2">2016</span>
            <p className="text-[10px] uppercase tracking-widest text-brand-text-dim">Implementación</p>
          </div>
          <div className="aspect-square bg-brand-primary flex flex-col justify-center p-8 translate-y-8 shadow-lg">
            <span className="text-white text-3xl font-bold mb-2">Hoy</span>
            <p className="text-[10px] uppercase tracking-widest text-white/60">Liderazgo Global</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Home = () => {
  return (
    <div>
      <Hero />
      <Metrics />
      
      <section className="py-24 border-b border-brand-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-8 block">Nuestra Experiencia</h2>
            <p className="text-2xl md:text-3xl font-light leading-relaxed text-brand-text-dim">
              <span className="text-brand-text font-bold">28 años</span> de trayectoria en asesoría, consultoría y diseño en servicios acústicos, arquitectónicos y bioclimáticos, sumados a <span className="text-brand-text font-bold">16 años</span> de experiencia en la implementación técnica de sistemas a todo nivel.
            </p>
          </div>
        </div>
      </section>

      <History />
      <Empresa />
    </div>
  );
};
