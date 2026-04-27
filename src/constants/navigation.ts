import { 
  Building2, 
  Hammer, 
  TreePine, 
  LayoutGrid, 
  Globe2 
} from 'lucide-react';

export const NAV_LINKS = [
  { 
    name: 'Inicio', 
    href: '/',
    subItems: [
      { name: 'LA EMPRESA', href: '/' },
      { name: 'Nuestra Historia', href: '/' },
    ]
  },
  { 
    name: 'Líneas de negocio', 
    href: '/servicios',
    subItems: [
      { name: 'Asesoría, consultoría y software', href: '/servicios' },
      { name: 'Proyectos acústicos', href: '/servicios' },
      { name: 'Proyectos arquitectónicos', href: '/servicios' },
      { name: 'Proyectos bioclimáticos', href: '/servicios' },
      { name: 'Proyectos térmicos', href: '/servicios' },
      { name: 'Suministro de materiales', href: '/servicios' },
    ]
  },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Contacto', href: '/contacto' },
];

export const SERVICES = [
  { 
    icon: Building2, 
    title: "Acústica", 
    description: "Control de reverberancia, transmisión, absorción y distribución estratégica del sonido y el ruido.",
    index: 0
  },
  { 
    icon: Hammer, 
    title: "Térmica", 
    description: "Aislamiento térmico, control de temperaturas y conservación de energía con alto retorno de inversión.",
    index: 1
  },
  { 
    icon: TreePine, 
    title: "Bioclimática", 
    description: "Calentamiento y enfriamiento pasivo, energía fotovoltaica y cubiertas termoacústicas de alta eficiencia.",
    index: 2
  },
  { 
    icon: LayoutGrid, 
    title: "Arquitectura", 
    description: "Diseño de edificaciones residenciales, comerciales e institucionales con visión de vanguardia.",
    index: 3
  },
  { 
    icon: Building2, 
    title: "Implementación", 
    description: "Suministro e instalación profesional de materiales acústicos, térmicos y bioclimáticos.",
    index: 4
  },
  { 
    icon: Globe2, 
    title: "Software DA&B", 
    description: "Desarrollo propio para simulaciones acústicas, térmicas y bioclimáticas de alta precisión.",
    index: 5
  },
];
