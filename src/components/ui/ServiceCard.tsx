import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-10 border border-brand-border bg-brand-surface hover:bg-white transition-all duration-500 group shadow-sm hover:shadow-xl"
  >
    <div className="w-10 h-10 border border-brand-primary flex items-center justify-center mb-8 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
      <Icon size={18} />
    </div>
    <h3 className="text-xl mb-4 font-bold uppercase tracking-wider text-brand-text">{title}</h3>
    <p className="text-brand-text-dim text-xs leading-relaxed mb-8">
      {description}
    </p>
    <a href="#" className="flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent group-hover:translate-x-2 transition-transform duration-300">
      Explorar <ChevronRight size={12} className="ml-1" />
    </a>
  </motion.div>
);
