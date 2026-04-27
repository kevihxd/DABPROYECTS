import { Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/layout';
import { Home, Services, Projects, Contact } from './pages';

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-bg geometric-grid flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
