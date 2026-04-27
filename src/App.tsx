import { 
  Navbar, 
  Footer 
} from './components/layout';
import { 
  Hero, 
  Details, 
  Services,
  Awards,
  Empresa
} from './components/sections';
import { motion, useScroll, useTransform } from 'motion/react';
import { Building2 } from 'lucide-react';

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
          <button className="bg-brand-primary text-white px-10 py-5 font-bold uppercase text-[10px] tracking-widest hover:bg-brand-text transition-colors shadow-lg">
            Ver Proyectos
          </button>
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

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg geometric-grid">
      <Navbar />
      
      <main>
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
        <Details />
        <Services />
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

        <CoreBusiness />

        <section className="py-40 relative bg-brand-surface border-b border-brand-border overflow-hidden">
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
              <button className="bg-brand-primary text-white px-12 py-6 font-bold uppercase text-[10px] tracking-[0.4em] hover:bg-brand-text transition-all duration-300">
                Solicitar Consultoría
              </button>
            </motion.div>
          </div>
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-text/5 -z-10" />
        </section>
      </main>

      <Footer />
    </div>
  );
}
