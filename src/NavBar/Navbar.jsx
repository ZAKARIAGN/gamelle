import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo.png";

const TABS = [
  { id: "accueil", label: "Accueil", href: "#accueil" },
  { id: "buffet", label: "Notre Buffet", href: "#buffet" },
  { id: "apropos", label: "À Propos", href: "#apropos" },
  { id: "galerie", label: "Galerie", href: "#galerie" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] flex w-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative flex h-16 sm:h-20 w-full max-w-5xl items-center justify-between rounded-[2rem] border border-bistro-dark/10 bg-bistro-bg/80 backdrop-blur-lg px-6 shadow-2xl">
          
          {/* Logo Section */}
          <div className="flex w-auto lg:w-1/4 items-center justify-start z-50">
            <img src={logoImg} alt="Logo" className="h-8 sm:h-10 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex h-full w-[60%] items-center justify-center">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative flex h-full flex-1 items-center justify-center outline-none"
                >
                  {isActive && (
                    <motion.div
                      layoutId="spotlight"
                      className="absolute inset-0 z-0 flex flex-col items-center pointer-events-none"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    >
                      <div className="absolute top-0 h-1.5 w-16 rounded-lg bg-bistro-ochre shadow-[0_0_10px_rgba(217,119,6,0.7)]" />
                      
                      <div 
                        className="absolute top-1 h-[90%] w-32 bg-gradient-to-b from-amber-600/20 to-transparent blur-[6px]"
                        style={{ clipPath: "polygon(25% 0, 75% 0, 100% 100%, 0% 100%)" }}
                      />
                    </motion.div>
                  )}
                  <span
                    className={`relative z-10 text-xs xl:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${
                      isActive 
                        ? "text-bistro-dark" 
                        : "text-bistro-dark/80 hover:text-bistro-red"
                    }`}
                  >
                    {tab.label}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Desktop Commander Button */}
          <div className="hidden lg:flex w-1/4 items-center justify-end z-50">
            <button className="rounded-lg bg-bistro-ochre px-6 py-2.5 text-sm font-semibold text-bistro-dark transition-colors hover:bg-amber-700 shadow-[0_0_15px_rgba(217,119,6,0.25)]">
              Commander
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center justify-end z-50">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-bistro-dark p-2 outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-bistro-bg/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 pb-10 px-6 lg:hidden"
          >
            <div className="flex flex-col items-center space-y-8 w-full max-w-sm">
              {TABS.map((tab) => (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-sans font-bold tracking-wider transition-colors ${
                    activeTab === tab.id ? "text-bistro-red" : "text-bistro-dark hover:text-amber-400"
                  }`}
                >
                  {tab.label}
                </a>
              ))}
              
              <div className="w-full h-px bg-bistro-ochre/20 my-4" />

              <button className="w-full rounded-lg bg-bistro-ochre px-8 py-4 text-base font-semibold text-bistro-dark transition-colors hover:bg-amber-700 shadow-[0_0_20px_rgba(217,119,6,0.3)] uppercase tracking-widest">
                Commander
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
