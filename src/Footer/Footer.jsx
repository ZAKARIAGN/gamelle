import { MapPin, Phone, Mail } from "lucide-react";
import logoImg from "../assets/logo.png";

// Custom SVG for Instagram just to be absolutely sure it renders without import errors
const InstagramIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative w-full bg-bistro-bg py-16 border-t border-bistro-dark/10 z-30 overflow-hidden">
      {/* Subtle bottom red glow */}  
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-bistro-ochre/10 rounded-t-full blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
          {/* Logo & Slogan */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src={logoImg} 
              alt="La Gamelle Logo" 
              className="h-16 w-auto mb-6 object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
            />
            <p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              L'Élégance de la Gastronomie. <br />
              Découvrez un buffet à volonté d'exception au cœur de Vénissieux.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-bistro-dark font-bold tracking-widest uppercase mb-6 text-sm">Contact</h4>
            <div className="flex flex-col space-y-4 items-center md:items-start">
              <div className="flex items-center space-x-3 text-bistro-dark/80">
                <MapPin className="h-5 w-5 text-bistro-red flex-shrink-0" />
                <span className="text-sm">29 cours richard vitton <br/>69003 Lyon, France</span>
              </div>
              <div className="flex items-center space-x-3 text-bistro-dark/80">
                <Phone className="h-5 w-5 text-bistro-red flex-shrink-0" />
                <span className="text-sm">04 26 28 83 64</span>
              </div>
            </div>
          </div>

          {/* Socials & Quick Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-bistro-dark font-bold tracking-widest uppercase mb-6 text-sm">Suivez-nous</h4>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://www.instagram.com/la_gamelle_de_montchat/" 
                target="_blank"
                rel="noreferrer"
                className="bg-bistro-bg p-3 rounded-lg text-bistro-dark/80 hover:text-white hover:bg-bistro-ochre transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)] hover:-translate-y-1"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end space-y-2">
              <a href="#" className="text-stone-500 hover:text-bistro-red transition-colors text-sm">Réserver une table</a>
              <a href="#" className="text-stone-500 hover:text-bistro-red transition-colors text-sm">Découvrir le Menu</a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-bistro-dark/10 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 tracking-wide">
          <p>© {new Date().getFullYear()} La Gamelle. Tous droits réservés.</p>
          <p className="mt-4 md:mt-0">Design & Développement : Prototype</p>
        </div>
      </div>
    </footer>
  );
}
