import { motion } from 'motion/react';
import { Awards } from '../components/sections';

const FeatureSection = ({ id, badge, title, subtitle, imageUrl, reverse = false }: { id: string, badge: string, title: string, subtitle: string, imageUrl: string, reverse?: boolean }) => (
  <section id={id} className={`py-32 border-b border-brand-border bg-white`}>
    <div className="container mx-auto px-6">
      <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse text-right' : 'lg:flex-row'} items-center gap-24`}>
        <motion.div 
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h2 className="text-brand-accent text-sm uppercase tracking-[0.4em] mb-6 font-semibold">{badge}</h2>
          <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-[0.9] tracking-tighter" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-brand-text-dim text-lg mb-12 max-w-lg leading-relaxed font-light">
            {subtitle}
          </p>
          <div className="space-y-4 mb-12">
            {['Licencias y Permisos', 'Gestión de Obra', 'Planificación Urbana'].map((item, i) => (
              <div key={i} className={`flex items-center space-x-4 ${reverse ? 'justify-end' : ''}`}>
                <div className="w-1 h-[1px] bg-brand-primary" />
                <span className="text-[10px] uppercase tracking-widest text-brand-text-dim/60">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <img 
            src={imageUrl} 
            alt={badge} 
            className="w-full aspect-[4/3] object-cover contrast-100 grayscale-[0.1] hover:grayscale-0 transition-all duration-700 shadow-xl"
          />
          <div className="absolute top-0 right-0 p-8 text-brand-text/5 select-none font-bold">
            <span className="text-9xl leading-none">0{id === 'nacional' ? 1 : 2}</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export const Projects = () => {
  return (
    <div className="pt-24">
      <div className="py-24 bg-brand-surface border-b border-brand-border">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 uppercase">Nuestra Experiencia</h1>
          <p className="text-xl text-brand-text-dim max-w-2xl mx-auto font-light">
            Conoce los proyectos que han definido nuestra trayectoria a nivel nacional e internacional.
          </p>
        </div>
      </div>
      
      <Awards />

      <FeatureSection 
        id="nacional"
        badge="Nacional"
        title="EXCELENCIA <br/>LOCAL"
        subtitle="Liderando el desarrollo de infraestructura en territorio nacional con precisión técnica y compromiso local."
        imageUrl="https://images.unsplash.com/photo-1541991471032-49516477cc58?auto=format&fit=crop&q=80&w=2070"
      />

      <FeatureSection 
        id="internacional"
        badge="Internacional"
        title="VISIÓN <br/>GLOBAL"
        subtitle="Cruzamos fronteras para llevar nuestra ingeniería a los mercados más exigentes de Europa y América."
        imageUrl="https://images.unsplash.com/photo-1449156001931-893021711202?auto=format&fit=crop&q=80&w=2070"
        reverse={true}
      />
    </div>
  );
};
