import { Mail, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contacto" className="py-24 bg-brand-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 h-10 bg-brand-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-light tracking-[0.2em] uppercase text-brand-primary">DAB <span className="font-bold text-brand-text">Proyectos</span></span>
            </div>
            <p className="text-brand-text-dim text-sm leading-relaxed max-w-xs font-light">
              Estudio multidisciplinar especializado en el desarrollo de proyectos complejos de arquitectura e ingeniería.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Navegación</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-brand-text-dim">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Portafolio</a></li>
              <li><a href="#servicios" className="hover:text-brand-primary transition-colors">Servicios</a></li>
              <li><a href="#nacional" className="hover:text-brand-primary transition-colors">Nacional</a></li>
              <li><a href="#contacto" className="hover:text-brand-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Gerencia Técnica y Comercial</h4>
            <div className="space-y-4">
              <p className="text-brand-text font-bold text-sm uppercase tracking-wider">Raúl Darío Franco Valencia</p>
              <p className="text-brand-text-dim text-[9px] uppercase tracking-widest leading-loose">
                Arquitecto UPB, MS Diseño Ambiental de edificios, U. de Cambridge-UK <br />
                <span className="text-brand-accent font-serif italic">Gerente Técnico y Comercial</span>
              </p>
              <div className="pt-2 space-y-2">
                <a href="mailto:gerencia.dayb@gmail.com" className="flex items-center text-[10px] text-brand-text-dim hover:text-brand-primary transition-colors tracking-widest">
                  <Mail size={12} className="mr-2" /> gerencia.dayb@gmail.com
                </a>
                <p className="flex items-center text-[10px] text-brand-text-dim tracking-widest">
                  <Phone size={12} className="mr-2" /> 310 894 57 49
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-accent mb-8">Administración y Finanzas</h4>
            <div className="space-y-4">
              <p className="text-brand-text font-bold text-sm uppercase tracking-wider">Ana Patricia Romero Guzmán</p>
              <p className="text-brand-text-dim text-[9px] uppercase tracking-widest leading-loose">
                Administración y finanzas U. Eafit, Ms Administración U. de México <br />
                <span className="text-brand-accent font-serif italic">Representante legal y Administración</span>
              </p>
              <div className="pt-2 space-y-2">
                <a href="mailto:admon.dayb@gmail.com" className="flex items-center text-[10px] text-brand-text-dim hover:text-brand-primary transition-colors tracking-widest">
                  <Mail size={12} className="mr-2" /> admon.dayb@gmail.com
                </a>
                <p className="flex items-center text-[10px] text-brand-text-dim tracking-widest">
                  <Phone size={12} className="mr-2" /> 314 793 25 57
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-[8px] font-bold uppercase tracking-[0.5em] text-brand-text-dim/40">
          <p>© 2024 DAB PROYECTOS / ARQUITECTURA E INGENIERÍA.</p>
          <div className="flex space-x-12 mt-8 md:mt-0">
            <a href="#" className="hover:text-brand-primary">Instagram</a>
            <a href="#" className="hover:text-brand-primary">Linkedin</a>
            <a href="#" className="hover:text-brand-primary">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
