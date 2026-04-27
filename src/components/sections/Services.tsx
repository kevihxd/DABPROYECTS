import { motion } from 'motion/react';
import { ServiceCard } from '../ui/ServiceCard';
import { SERVICES } from '../../constants/navigation';

export const Services = () => {
  return (
    <section id="servicios" className="py-32 border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Especialidades</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">Nuestros Servicios</h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon} 
              title={service.title} 
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
