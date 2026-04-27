import { motion } from 'motion/react';
import { Building2 } from 'lucide-react';
import { Details, Services as ServicesSection } from '../components/sections';

const CoreBusiness = () => (
  <section className="py-32 bg-white border-b border-brand-border overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/3">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Estrategia</span>
          <h2 className="text-5xl font-bold mb-10 tracking-tighter uppercase">Core Business</h2>
          <p className="text-brand-text-dim text-lg leading-relaxed font-light mb-12">
            Nuestra arquitectura del negocio se centra en el comportamiento dinámico de soluciones integrales, equilibrando diseño y especialidades técnicas.
          </p>
          <div className="space-y-8">
            {[
              { label: 'Consultoría Acústica', val: '35%' },
              { label: 'Ingeniería Bioclimática', val: '25%' },
              { label: 'Diseño Arquitectónico', val: '25%' },
              { label: 'Implementación Técnica', val: '15%' }
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-text-dim">{item.label}</span>
                  <span className="text-brand-primary font-bold">{item.val}</span>
                </div>
                <div className="h-[2px] bg-brand-border w-full overflow-hidden">
                  <motion.div 
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '0%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="h-full bg-brand-primary"
                    style={{ width: item.val }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-2/3 relative">
          <div className="absolute inset-0 bg-brand-primary/5 blur-[120px] rounded-full" />
          <div className="relative border border-brand-border p-12 bg-white h-full flex items-center justify-center shadow-sm">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-64 h-64 border-2 border-brand-primary rounded-full relative mb-12">
                <div className="absolute inset-4 border border-brand-primary/10 rounded-full animate-pulse" />
                <Building2 size={48} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-4">Comportamiento Integrado</h3>
              <p className="text-[10px] uppercase tracking-[0.4em] text-brand-text-dim">Optimización de Recursos / Sostenibilidad / Confort</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const Services = () => {
  return (
    <div className="pt-24">
      <div className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">Nuestras Líneas de Negocio</h1>
          <p className="text-xl text-brand-text-dim max-w-2xl mx-auto font-light">
            Soluciones integrales en diseño y especialidades técnicas para llevar tu proyecto al siguiente nivel.
          </p>
        </div>
      </div>
      <Details />
      <ServicesSection />
      <CoreBusiness />
    </div>
  );
};
