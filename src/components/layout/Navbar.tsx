import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../constants/navigation';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-morphism' : 'py-8 border-b border-brand-text/5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link to="/">
            <img src="/logo.png" alt="DAB Proyectos" className="h-10 w-auto" />
          </Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link, i) => (
            <div 
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-brand-accent transition-colors flex items-center gap-1"
                >
                  {link.name}
                  {link.subItems && <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                </Link>
              </motion.div>

              {link.subItems && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-4 w-64 bg-brand-surface border border-brand-border p-6 shadow-2xl z-[60]"
                    >
                      <div className="flex flex-col space-y-4">
                        {link.subItems.map((sub, j) => (
                          <Link 
                            key={j}
                            to={sub.href}
                            className="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-text-dim hover:text-brand-accent transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-bg border-t border-brand-border overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-6">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="space-y-4">
                  <Link
                    to={link.href}
                    onClick={() => !link.subItems && setMobileMenuOpen(false)}
                    className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-text hover:text-brand-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                  {link.subItems && (
                    <div className="pl-4 flex flex-col space-y-4 border-l border-brand-border">
                      {link.subItems.map((sub, j) => (
                        <Link 
                          key={j}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-[9px] uppercase tracking-[0.2em] font-bold text-brand-text-dim hover:text-brand-accent transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
