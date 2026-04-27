import { motion } from 'motion/react';
import { ConstructionSlider } from '../ui/ConstructionSlider';

export const Details = () => {
  return (
    <section id="detalles" className="py-32 border-b border-brand-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.5em] mb-6 block">Soluciones Técnicas</span>
            <h2 className="text-5xl lg:text-6xl font-bold mb-10 tracking-tighter uppercase leading-[0.9]">
              Detalles <br/> <span className="text-stroke">Constructivos</span>
            </h2>
            <div className="space-y-8 text-brand-text-dim text-lg font-light leading-relaxed mb-12">
              <p>
                En DAB PROYECTOS S.A.S diseñamos y construimos sistemas térmicos y bioclimáticos adaptados a cada espacio, incluso en viviendas habitadas. Nuestro proceso es <span className="text-brand-text font-medium">no invasivo</span> y garantiza:
              </p>
              <ul className="space-y-4">
                {[
                  'Mejoramiento inmediato del confort térmico.',
                  'Ahorro de energía a largo plazo.',
                  'Instalaciones sin alterar la estructura arquitectónica.',
                  'Diseños personalizados para cada necesidad.'
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-4">
                    <div className="w-1 h-1 bg-brand-primary mt-3 shrink-0" />
                    <span className="text-sm uppercase tracking-widest leading-loose">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="border-t border-brand-border pt-8">
                Somos especialistas en intervenciones a: <span className="text-brand-accent font-bold">MUROS, PISOS, CUBIERTAS, CIELOS, PUERTAS, VENTANAS, PANELES DIVISORIOS, RECUBRIMIENTO CON PANELES</span> y otros.
              </p>
              <p className="italic opacity-80 text-brand-primary">
                Descubre algunos de nuestros trabajos en soluciones acústicas, térmicas y constructivas, diseñados para elevar la calidad y confort de tus espacios.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-white p-12 relative overflow-hidden group">
            <ConstructionSlider />
          </div>
        </div>
      </div>
    </section>
  );
};
