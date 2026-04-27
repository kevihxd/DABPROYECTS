import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ConstructionSlider = () => {
  const [index, setIndex] = useState(0);
  const details = [
    {
      title: "MUROS",
      subtitle: "vestier",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
      legend: [
        "Estructura en PC y PU base 6 calibre 20",
        "Muro existente en obra (según diseñador)",
        "Frescasa ECO de 2 1/2\" con foil de aluminio",
        "Superboard de 10mm, tornillería y placa autoavellanante"
      ]
    },
    {
      title: "ENTREPISOS",
      subtitle: "acústico",
      image: "https://images.unsplash.com/photo-1590348697170-2b70fb38c64e?auto=format&fit=crop&q=80&w=1000",
      legend: [
        "Placa base estructural",
        "Membrana acústica de alta densidad",
        "Mortero de nivelación perimetral",
        "Acabado de piso flotante amortiguado"
      ]
    },
    {
      title: "CUBIERTAS",
      subtitle: "termoacústica",
      image: "https://images.unsplash.com/photo-1631671987556-9a5c8897d27e?auto=format&fit=crop&q=80&w=1000",
      legend: [
        "Teja termoacústica tipo sándwich",
        "Aislamiento de lana de roca mineral",
        "Estructura metálica portante",
        "Sellado perimetral de juntas"
      ]
    }
  ];

  const next = () => setIndex((index + 1) % details.length);
  const prev = () => setIndex((index - 1 + details.length) % details.length);

  return (
    <div className="relative text-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-10 items-center"
        >
          <div className="w-full md:w-1/2">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold tracking-widest text-[#0F172A] mb-1">{details[index].title}</h3>
              <p className="text-sm italic font-serif text-brand-accent">{details[index].subtitle}</p>
            </div>
            <div className="border border-gray-100 p-4 bg-gray-50 flex items-center justify-center min-h-[400px]">
              <div className="relative w-full h-64 md:h-80 opacity-40 mix-blend-multiply transition-opacity duration-300 hover:opacity-100">
                 <img src={details[index].image} className="w-full h-full object-contain grayscale" alt="" />
                 <div className="absolute top-1/4 left-1/2 w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">1</div>
                 <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">2</div>
                 <div className="absolute bottom-1/4 right-1/4 w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px] font-bold">3</div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              {details[index].legend.map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-2 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
                  <span className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-[10px] font-bold shrink-0">{i + 1}</span>
                  <p className="text-[11px] leading-relaxed text-gray-700 tracking-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute top-1/2 -left-4 -right-4 flex justify-between pointer-events-none transform -translate-y-1/2 z-20">
        <button 
          onClick={prev} 
          className="w-12 h-12 bg-black/60 text-white rounded-full flex items-center justify-center pointer-events-auto hover:bg-brand-accent transition-colors shadow-xl"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={next} 
          className="w-12 h-12 bg-black/60 text-white rounded-full flex items-center justify-center pointer-events-auto hover:bg-brand-accent transition-colors shadow-xl"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {details.map((_, i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === i ? 'w-8 bg-brand-accent' : 'bg-gray-200'}`} 
          />
        ))}
      </div>
    </div>
  );
};
