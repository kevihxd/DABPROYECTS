import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, ShieldCheck, TrendingUp, CircleDollarSign, CalendarDays } from 'lucide-react';

interface RecuadroValorProps {
  icono: any;
  titulo: string;
  descripcion: string;
}

const RecuadroValor: React.FC<RecuadroValorProps> = ({ icono: Icono, titulo, descripcion }) => (
  <div className="p-8 border border-brand-border bg-brand-surface group hover:shadow-lg transition-all">
    <div className="w-10 h-10 border border-brand-primary flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
      <Icono size={20} />
    </div>
    <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{titulo}</h4>
    <p className="text-brand-text-dim text-[11px] leading-relaxed uppercase tracking-tight">{descripcion}</p>
  </div>
);

const PasoAgenda = ({ numero, titulo, subtitulo, descripcion }: { numero: string, titulo: string, subtitulo: string, descripcion: string }) => (
  <div className="relative pl-16 pb-12 border-l border-brand-border last:pb-0">
    <div className="absolute left-[-1px] top-0 w-8 h-[1px] bg-brand-primary" />
    <div className="absolute left-[-20px] top-0 w-10 h-10 bg-brand-primary text-white flex items-center justify-center font-bold">
      {numero}
    </div>
    <div className="mb-2">
      <span className="text-brand-accent text-[10px] font-bold uppercase tracking-[0.3em] font-serif italic">{subtitulo}</span>
      <h4 className="text-xl font-bold uppercase tracking-tighter text-brand-text">{titulo}</h4>
    </div>
    <p className="text-brand-text-dim text-sm font-light leading-relaxed max-w-2xl">{descripcion}</p>
  </div>
);

export const Empresa: React.FC = () => {
  return (
    <section id="empresa" className="py-32 border-b border-brand-border bg-brand-bg">
      <div className="container mx-auto px-6">
        {/* Cabecera */}
        <div className="mb-24">
          <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Sobre Nosotros</span>
          <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase mb-12">LA <span className="text-stroke">EMPRESA</span></h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="p-10 border border-brand-border bg-brand-surface shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Target className="text-brand-primary" size={24} />
                <h3 className="text-xl font-bold uppercase tracking-widest">Nuestra Misión</h3>
              </div>
              <p className="text-brand-text-dim text-lg font-light leading-relaxed">
                Diseño, desarrollo e implementación de proyectos con resultados técnicos de gran calidad, ahorro de energía y confort, obteniendo así ambientes satisfactorios para nuestros clientes.
              </p>
            </div>
            <div className="p-10 border border-brand-border bg-brand-surface shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <Eye className="text-brand-primary" size={24} />
                <h3 className="text-xl font-bold uppercase tracking-widest">Nuestra Visión</h3>
              </div>
              <p className="text-brand-text-dim text-lg font-light leading-relaxed">
                Ampliar el alcance de los proyectos, en todas las líneas de negocio a más clientes a nivel nacional e internacional, con gran calidad técnica y estética en sus diseños y valor agregado en ahorro de energía y confort.
              </p>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-32">
          <h3 className="text-xs font-bold uppercase tracking-[0.5em] text-brand-accent mb-12 text-center">Nuestros Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <RecuadroValor 
              icono={ShieldCheck} 
              titulo="Ética" 
              descripcion="Sinceridad y honestidad en los procesos de diseño y evaluación económica, tanto preventa y posventa, asegurando la calidad en cada uno de los procesos."
            />
            <RecuadroValor 
              icono={TrendingUp} 
              titulo="Mejoramiento continúo" 
              descripcion="La base del sistema de gestión de calidad es el mejoramiento continuo, por lo tanto nuestro compromiso es revisar constantemente los procesos para lograr óptimos resultados."
            />
            <RecuadroValor 
              icono={CircleDollarSign} 
              titulo="Competitividad" 
              descripcion="Imparcialidad con base en lo justo y necesario para los deseos específicos de nuestros clientes, ofreciendo la mejor calidad y cantidad al mejor precio."
            />
          </div>
        </div>

        {/* Agenda */}
        <div>
          <div className="flex items-center gap-4 mb-16">
            <CalendarDays className="text-brand-primary" size={32} />
            <h3 className="text-3xl font-bold uppercase tracking-tighter">Nuestra Agenda de Trabajo</h3>
          </div>
          
          <div className="max-w-4xl ml-4">
            <PasoAgenda 
              numero="01" 
              subtitulo="Viabilidad" 
              titulo="Visita Técnica al proyecto" 
              descripcion="Coordinamos con nuestro cliente la idea básica de la solución a un nivel especifico de temperatura de confort solicitada."
            />
            <PasoAgenda 
              numero="02" 
              subtitulo="Estrategia" 
              titulo="Diagnostico y Evaluación" 
              descripcion="Establecemos el diseño y los sistemas constructivos, térmicos y bioclimáticos a la medida, y alcance de sus posibilidades."
            />
            <PasoAgenda 
              numero="03" 
              subtitulo="Solución" 
              titulo="Presupuesto a la medida" 
              descripcion="Se establecen cuales estrategias de confort a nivel temperatura y construcción son deseadas por el cliente."
            />
            <PasoAgenda 
              numero="04" 
              subtitulo="Confort térmico" 
              titulo="Ejecución de obra" 
              descripcion="Lograr el equilibrio entre el tiempo de ejecución y la calidad de obra, garantizando que el proyecto se complete a tiempo, cumpla con los estándares de calidad esperados, y sea eficiente 100%."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
