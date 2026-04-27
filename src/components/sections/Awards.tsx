import { motion } from 'motion/react';
import { Trophy, Award, Medal, Star, TreePine } from 'lucide-react';

const AwardCard = ({ title, year, category, location, icon: Icon, isFirst = false }: { title: string, year: string, category: string, location: string, icon: any, isFirst?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-8 border border-brand-border bg-brand-surface group hover:border-brand-primary transition-all duration-500 shadow-sm"
  >
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 flex items-center justify-center border ${isFirst ? 'bg-brand-primary border-brand-primary text-white' : 'border-brand-primary text-brand-primary'}`}>
        <Icon size={20} />
      </div>
      <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-text-dim/40">{year}</span>
    </div>
    {isFirst && <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest mb-2 block font-serif italic">Primer Puesto</span>}
    <h3 className="text-lg font-bold uppercase tracking-tight mb-2 group-hover:text-brand-primary transition-colors">{title}</h3>
    <p className="text-[10px] uppercase tracking-widest text-brand-text-dim mb-4">{category}</p>
    <p className="text-[9px] uppercase tracking-[0.2em] text-brand-text-dim/30">{location}</p>
  </motion.div>
);

const LeedBadge = ({ level, project, location }: { level: 'ORO' | 'PLATA', project: string, location: string }) => (
  <div className="flex items-center space-x-6 p-6 border-l-2 border-brand-primary bg-brand-surface shadow-sm">
    <div className="text-center shrink-0">
      <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-brand-text-dim/50 mb-1">Certificación</p>
      <p className={`text-2xl font-bold tracking-tighter ${level === 'ORO' ? 'text-brand-accent' : 'text-slate-400'}`}>LEED {level}</p>
    </div>
    <div className="border-l border-brand-border pl-6">
      <p className="text-sm font-bold uppercase tracking-wide mb-1 text-brand-text">{project}</p>
      <p className="text-[10px] uppercase tracking-widest text-brand-text-dim">{location}</p>
    </div>
  </div>
);

export const Awards = () => {
  return (
    <section id="premios" className="py-32 border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Reconocimientos</span>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase">Premios & <br/><span className="text-stroke">Logros</span></h2>
          </div>
          <p className="text-brand-text-dim text-lg max-w-sm font-light italic text-right">
            Nuestra trayectoria avalada por las entidades más importantes del sector.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <AwardCard 
            title="A.C.F.A" 
            year="1.999" 
            category="“Entre la Tierra y el Ciberespacio”" 
            location="Santa fe de Bogotá D.C" 
            icon={Trophy}
            isFirst={true}
          />
          <AwardCard 
            title="CORONA PRO" 
            year="1.999" 
            category="ARQUITECTURA" 
            location="Santafé de Bogotá D.C" 
            icon={Award}
            isFirst={true}
          />
          <AwardCard 
            title="ANFALIT" 
            year="1.999" 
            category="Excelencia Constructiva" 
            location="Santafé de Bogotá D.C" 
            icon={Medal}
            isFirst={true}
          />
          <AwardCard 
            title="PREMIO VICTORIA" 
            year="2015" 
            category="Especialista en aplicación ISOVER-Fiberglass" 
            location="Santafé de Bogotá D.C" 
            icon={Star}
          />
          <AwardCard 
            title="PREMIO VICTORIA" 
            year="2015" 
            category="Al fomento del Hábitat Sostenible" 
            location="Santafé de Bogotá D.C" 
            icon={TreePine}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-24">
          <LeedBadge 
            level="ORO" 
            project="Dirección General Bancolombia" 
            location="Medellín, Antioquia, Colombia" 
          />
          <LeedBadge 
            level="PLATA" 
            project="Fundación Juan Felipe Gomez Escobar" 
            location="Cartagena, Bolívar, Colombia" 
          />
          <LeedBadge 
            level="PLATA" 
            project="Cámara de Comercio Medellín" 
            location="Sede Envigado, Antioquia, Colombia" 
          />
        </div>

        <div className="text-center py-20 border-t border-brand-border">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl font-serif italic text-brand-text-dim mb-8">
              “¡Tu preferencia y confianza es nuestra más grande satisfacción!”
            </p>
            <div className="inline-flex items-center space-x-4 px-8 py-3 border border-brand-primary text-brand-primary text-[10px] font-bold uppercase tracking-[0.4em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
              </span>
              <span>Estamos 24/7 para atenderte</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
