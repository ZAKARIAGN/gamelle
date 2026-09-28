import { useEffect, useRef, useState } from "react";
import buffet1 from "../assets/plats/burger.jpg";
import buffet2 from "../assets/plats/viande.jpg";
import buffet3 from "../assets/plats/burrata.jpg";
import buffet4 from "../assets/plats/boudin.jpg";
import buffet5 from "../assets/plats/planche.jpg";
import darkWood from "../assets/dark_wood.jpg";

// Rename your photos so buffet_1 … buffet_5 follow this order:
// 1 burger & frites · 2 plat de viande · 3 salade burrata · 4 boudin & purée · 5 planche à partager
const BUFFET_CATEGORIES = [
  {
    title: "Burgers & frites",
    description: "Burger maison, frites dorées et salade croquante.",
    image: buffet1,
    action: "Découvrez",
  },
  {
    title: "Plats du chef",
    description: "Viande rôtie, jus corsé et légumes de saison.",
    image: buffet2,
    action: "Découvrez",
  },
  {
    title: "Salades gourmandes",
    description: "Burrata crémeuse, oignons marinés et salade fraîche.",
    image: buffet3,
    action: "Découvrez",
  },
  {
    title: "Boudin noir & purée",
    description: "Boudin noir, purée onctueuse et pommes de terre rôties.",
    image: buffet4,
    action: "Découvrez",
  },
  {
    title: "Planches à partager",
    description: "Charcuterie, fromages, croques et frites.",
    image: buffet5,
    action: "Découvrez",
  },
];

const styles = `
@keyframes buffet-panel-in {
  from { opacity: 0; transform: translateY(40px) scale(.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.buffet-panel-in { opacity: 0; }
.buffet-visible .buffet-panel-in { animation: buffet-panel-in .8s cubic-bezier(.2,.8,.2,1) forwards; }

@keyframes buffet-title-in {
  from { transform: translateY(110%); }
  to   { transform: translateY(0); }
}
.buffet-title-mask { display: block; overflow: hidden; padding-bottom: .12em; margin-bottom: -.12em; }
.buffet-title-mask > span { display: block; transform: translateY(110%); }
.buffet-visible .buffet-title-mask > span { animation: buffet-title-in .9s cubic-bezier(.2,.8,.2,1) forwards; }

@keyframes buffet-arrow {
  0%, 100% { transform: translateX(0); }
  50%      { transform: translateX(6px); }
}
.buffet-arrow { animation: buffet-arrow 1.4s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .buffet-panel-in, .buffet-title-mask > span { opacity: 1; transform: none; animation: none !important; }
  .buffet-arrow { animation: none; }
}
`;

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export default function Buffet() {
  const [active, setActive] = useState(0);
  const [sectionRef, inView] = useInView();

  return (
    <section
      id="buffet"
      ref={sectionRef}
      className={`relative w-full border-t border-bistro-dark/10 bg-cover bg-center px-6 py-24 sm:py-32 ${
        inView ? "buffet-visible" : ""
      }`}
      style={{ backgroundImage: `url(${darkWood})`, fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{styles}</style>
      <div className="absolute inset-0 bg-bistro-bg/80 backdrop-blur-sm" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl text-left">
          <p className="mb-4 inline-block rounded-full border border-bistro-red/40 bg-bistro-red/10 px-4 py-1.5 text-sm font-medium text-bistro-red">
            Notre buffet
          </p>
          <h2 className="text-4xl font-extrabold leading-[1] tracking-tight text-bistro-dark sm:text-6xl">
            <span className="buffet-title-mask"><span style={{ animationDelay: ".1s" }}>Une grande variété</span></span>
            <span className="buffet-title-mask"><span style={{ animationDelay: ".25s" }} className="italic text-bistro-ochre">de saveurs.</span></span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-bistro-dark/75">
            Survolez une catégorie pour l'ouvrir, ou touchez-la sur mobile.
          </p>
        </div>

        {/* Expanding panels */}
        <div className="flex flex-col gap-3 lg:h-[34rem] lg:flex-row">
          {BUFFET_CATEGORIES.map((cat, idx) => {
            const isActive = idx === active;
            return (
              <button
                key={cat.title}
                type="button"
                aria-expanded={isActive}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                onClick={() => setActive(idx)}
                style={{ animationDelay: `${0.35 + idx * 0.1}s` }}
                className={`buffet-panel-in group relative overflow-hidden rounded-2xl border border-bistro-dark/15 text-left shadow-lg outline-none transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] focus-visible:ring-4 focus-visible:ring-bistro-ochre motion-reduce:transition-none ${
                  isActive ? "h-80 lg:h-auto lg:flex-[5]" : "h-24 lg:h-auto lg:flex-[1]"
                }`}
              >
                <img
                  src={cat.image}
                  alt=""
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out motion-reduce:transition-none ${
                    isActive ? "scale-100 saturate-100" : "scale-125 saturate-50"
                  }`}
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    isActive
                      ? "bg-gradient-to-t from-bistro-dark/90 via-bistro-dark/30 to-transparent opacity-100"
                      : "bg-bistro-dark/55 opacity-100 group-hover:bg-bistro-dark/40"
                  }`}
                />

                {/* Collapsed label (vertical on desktop) */}
                <span
                  className={`absolute left-5 top-1/2 -translate-y-1/2 text-lg font-bold text-white transition-opacity duration-300 lg:left-1/2 lg:top-auto lg:bottom-6 lg:-translate-x-1/2 lg:translate-y-0 lg:text-xl lg:[writing-mode:vertical-rl] lg:rotate-180 ${
                    isActive ? "pointer-events-none opacity-0" : "opacity-100 delay-300"
                  }`}
                >
                  {cat.title}
                </span>

                {/* Expanded content */}
                <div
                  className={`absolute inset-x-0 bottom-0 flex flex-col items-start p-6 transition-all duration-700 sm:p-8 ${
                    isActive ? "translate-y-0 opacity-100 delay-200" : "pointer-events-none translate-y-6 opacity-0"
                  }`}
                >
                  <h3 className="mb-2 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                    {cat.title}
                  </h3>
                  <p className="mb-4 max-w-md text-base text-white/85">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 rounded-full bg-bistro-ochre px-5 py-2 text-sm font-semibold text-bistro-dark">
                    {cat.action}
                    <svg xmlns="http://www.w3.org/2000/svg" className="buffet-arrow h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}