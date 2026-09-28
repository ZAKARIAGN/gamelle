import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/galeries/img7.jpg";

const styles = `
@keyframes about-wipe {
  from { clip-path: inset(0 100% 0 0 round 2rem); transform: scale(1.08); }
  to   { clip-path: inset(0 0 0 0 round 2rem);    transform: scale(1); }
}
.about-img { clip-path: inset(0 100% 0 0 round 2rem); }
.about-visible .about-img { animation: about-wipe 1.2s cubic-bezier(.7,0,.2,1) .2s forwards; }

@keyframes about-plate {
  from { opacity: 0; transform: translate(-1.5rem, -1.5rem); }
  to   { opacity: 1; transform: translate(1rem, 1rem); }
}
.about-plate { opacity: 0; }
.about-visible .about-plate { animation: about-plate .8s cubic-bezier(.2,.8,.2,1) 1.1s forwards; }

@keyframes about-rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
.about-mask { display: block; overflow: hidden; padding-bottom: .12em; margin-bottom: -.12em; }
.about-mask > span { display: block; transform: translateY(110%); }
.about-visible .about-mask > span { animation: about-rise .9s cubic-bezier(.2,.8,.2,1) forwards; }

@keyframes about-fade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
.about-fade { opacity: 0; }
.about-visible .about-fade { animation: about-fade .7s ease-out forwards; }

@keyframes about-sticker {
  0%   { opacity: 0; transform: rotate(-24deg) scale(.4); }
  70%  { opacity: 1; transform: rotate(-4deg) scale(1.08); }
  100% { opacity: 1; transform: rotate(-8deg) scale(1); }
}
@keyframes about-wobble { 0%,100% { transform: rotate(-8deg); } 50% { transform: rotate(-4deg); } }
.about-sticker { opacity: 0; }
.about-visible .about-sticker {
  animation: about-sticker .7s cubic-bezier(.3,1.4,.5,1) 1.5s forwards, about-wobble 4s ease-in-out 2.4s infinite;
}

@media (prefers-reduced-motion: reduce) {
  .about-img { clip-path: none; animation: none !important; }
  .about-plate, .about-fade, .about-sticker, .about-mask > span { opacity: 1; transform: none; animation: none !important; }
  .about-plate { transform: translate(1rem, 1rem); }
  .about-sticker { transform: rotate(-8deg); }
}
`;

function useInView(threshold = 0.25) {
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

export default function APropos() {
  const [ref, inView] = useInView();

  return (
    <section
      id="apropos"
      ref={ref}
      className={`relative z-20 w-full overflow-hidden border-t border-bistro-dark/10 bg-bistro-bg py-24 sm:py-32 ${
        inView ? "about-visible" : ""
      }`}
      style={{ fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{styles}</style>
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-bistro-ochre/10 blur-[150px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row lg:gap-20">
        {/* Text */}
        <div className="flex w-full flex-col items-start text-left lg:w-1/2">
          <p className="about-fade mb-6 inline-block rounded-full border border-bistro-red/40 bg-bistro-red/10 px-4 py-1.5 text-sm font-medium text-bistro-red" style={{ animationDelay: ".1s" }}>
            À propos de nous
          </p>

          <h2 className="mb-8 text-5xl font-extrabold leading-[0.98] tracking-tight text-bistro-dark sm:text-6xl">
            <span className="about-mask"><span style={{ animationDelay: ".2s" }}>L'histoire</span></span>
            <span className="about-mask"><span style={{ animationDelay: ".35s" }} className="italic text-bistro-ochre">de La Gamelle.</span></span>
          </h2>

          <p className="about-fade mb-5 max-w-xl text-lg leading-relaxed text-bistro-dark/80" style={{ animationDelay: ".7s" }}>
            La Gamelle, c'est une table généreuse où l'on vient pour bien manger : un buffet
            varié, des plats faits maison, des planches à partager et des desserts qui font
            l'unanimité.
          </p>
          <p className="about-fade mb-10 max-w-xl text-lg leading-relaxed text-bistro-dark/80" style={{ animationDelay: ".85s" }}>
            Et parce qu'un bon repas se prolonge, chaque jeudi a sa soirée : dictée, atelier
            vins et fromages, stand-up, pictionary ou concert.
          </p>

          <a
            href="#galerie"
            className="about-fade group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-bistro-ochre px-8 py-4 text-base font-semibold text-bistro-dark shadow-[0_10px_30px_-8px_rgba(217,119,6,0.6)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bistro-dark"
            style={{ animationDelay: "1s" }}
          >
            <span className="absolute inset-0 -translate-x-full bg-bistro-dark/15 transition-transform duration-500 group-hover:translate-x-0" />
            <span className="relative">Découvrir l'ambiance</span>
            <svg className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Image */}
        <div className="relative w-full lg:w-1/2">
          <div className="about-plate absolute inset-0 rounded-[2rem] bg-bistro-ochre" />
          <div className="group relative">
            <img
              src={aboutImg}
              alt="Intérieur du restaurant La Gamelle"
              className="about-img relative h-full w-full rounded-[2rem] object-cover shadow-xl transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>

          <div className="about-sticker absolute -bottom-6 -left-3 z-20 rounded-2xl bg-bistro-red px-5 py-3 text-lg font-extrabold leading-tight text-white shadow-lg sm:-left-8">
            Un jeudi,
            <br />
            une soirée.
          </div>
        </div>
      </div>
    </section>
  );
}