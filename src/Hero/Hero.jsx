// Programme d'octobre 2026
const EVENTS = [
  { date: "Jeu 01", title: "Dictée Pivot" },
  { date: "Jeu 08", title: "Atelier vins & fromages" },
  { date: "Jeu 15", title: "Gamelle Comedy Club" },
  { date: "Jeu 22", title: "Pictionary" },
  { date: "Jeu 30", title: "Concert : duo Acordo" },
];

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&display=swap');

.hero-font { font-family: 'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif; }

/* One orchestrated entrance: headline lines rise out of a mask */
@keyframes hero-rise {
  from { transform: translateY(110%); }
  to   { transform: translateY(0); }
}
.hero-line { display: block; overflow: hidden; padding-bottom: .12em; margin-bottom: -.12em; }
.hero-line > span {
  display: block;
  transform: translateY(110%);
  animation: hero-rise .9s cubic-bezier(.2,.8,.2,1) forwards;
}

@keyframes hero-fade {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}
.hero-fade { opacity: 0; animation: hero-fade .7s ease-out forwards; }

/* Pot drops in and settles */
@keyframes pot-drop {
  0%   { transform: translateY(-140px) rotate(-6deg); opacity: 0; }
  60%  { transform: translateY(8px) rotate(1.5deg); opacity: 1; }
  80%  { transform: translateY(-4px) rotate(-.5deg); }
  100% { transform: translateY(0) rotate(0); opacity: 1; }
}
.pot-drop { opacity: 0; animation: pot-drop 1.1s cubic-bezier(.3,.7,.3,1) .5s forwards; }

/* Lid lifts slightly, on repeat, as if something is simmering */
@keyframes lid-jiggle {
  0%, 100% { transform: translateY(0) rotate(0); }
  50%      { transform: translateY(-5px) rotate(-1.2deg); }
}
.lid { transform-origin: 200px 130px; animation: lid-jiggle 2.4s ease-in-out 1.8s infinite; }

/* Steam */
@keyframes steam {
  0%   { stroke-dashoffset: 120; opacity: 0; transform: translateY(14px); }
  30%  { opacity: .9; }
  100% { stroke-dashoffset: 0;   opacity: 0; transform: translateY(-26px); }
}
.steam { stroke-dasharray: 120; animation: steam 3.2s ease-in-out infinite; }

/* Spinning stamp */
@keyframes spin-slow { to { transform: rotate(360deg); } }
.stamp { animation: spin-slow 22s linear infinite; }

/* Marquee */
@keyframes marquee { to { transform: translateX(-50%); } }
.marquee-track { animation: marquee 34s linear infinite; }
.marquee:hover .marquee-track { animation-play-state: paused; }

/* Sun behind the pot */
@keyframes breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.05); } }
.sun { animation: breathe 6s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .hero-line > span, .hero-fade, .pot-drop { animation: none; transform: none; opacity: 1; }
  .lid, .steam, .stamp, .marquee-track, .sun { animation: none; }
  .steam { opacity: .5; stroke-dashoffset: 0; }
}
`;

export default function Hero() {
  return (
    <section
      id="accueil"
      className="hero-font relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-28"
    >
      <style>{styles}</style>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 py-10 lg:grid-cols-[1.15fr_1fr]">
        {/* Text */}
        <div className="text-left">
          <p className="hero-fade mb-6 inline-block rounded-full border border-bistro-ochre/60 bg-bistro-ochre/10 px-4 py-1.5 text-sm font-medium text-bistro-dark backdrop-blur-sm" style={{ animationDelay: ".1s" }}>
            Découvrez La Gamelle
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight text-bistro-dark sm:text-7xl lg:text-8xl">
            <span className="hero-line"><span style={{ animationDelay: ".2s" }}>Une table</span></span>
            <span className="hero-line"><span style={{ animationDelay: ".35s" }}>simple, un</span></span>
            <span className="hero-line"><span style={{ animationDelay: ".5s" }} className="italic text-bistro-ochre">buffet généreux.</span></span>
          </h1>

          <p className="hero-fade mt-8 max-w-lg text-lg leading-relaxed text-bistro-dark/80 sm:text-xl" style={{ animationDelay: ".9s" }}>
            Entrées, plats mijotés et desserts à volonté, préparés chaque matin
            dans une salle chaleureuse au cœur de la ville.
          </p>

          <div className="hero-fade mt-10 flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "1.1s" }}>
            <a
              href="#reservation"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-bistro-ochre px-8 py-4 text-base font-semibold text-bistro-dark shadow-[0_10px_30px_-8px_rgba(217,119,6,0.6)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bistro-dark"
            >
              <span className="absolute inset-0 -translate-x-full bg-bistro-dark/15 transition-transform duration-500 group-hover:translate-x-0" />
              <span className="relative">Réserver une table</span>
            </a>
            <a
              href="#buffet"
              className="inline-flex items-center justify-center rounded-full border-2 border-bistro-dark/70 px-8 py-4 text-base font-semibold text-bistro-dark transition-all duration-300 hover:-translate-y-1 hover:bg-bistro-dark hover:text-bistro-bg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bistro-dark"
            >
              Voir le buffet
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          {/* sun */}
          <div className="sun absolute inset-[8%] rounded-full bg-bistro-ochre/25" />
          <div className="sun absolute inset-[22%] rounded-full bg-bistro-ochre/30" style={{ animationDelay: "-2s" }} />

          {/* rotating stamp */}
          <svg viewBox="0 0 200 200" className="stamp absolute -right-2 -top-4 z-20 h-32 w-32 text-bistro-dark sm:h-40 sm:w-40" aria-hidden="true">
            <defs>
              <path id="circ" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <circle cx="100" cy="100" r="96" className="fill-bistro-ochre" />
            <text fontSize="17" fontWeight="800" letterSpacing="3" fill="currentColor">
              <textPath href="#circ">Buffet à volonté • Fait maison • Chaque jour •</textPath>
            </text>
            <text x="100" y="112" textAnchor="middle" fontSize="38" fontWeight="800" fill="currentColor">★</text>
          </svg>

          {/* pot */}
          <div className="pot-drop absolute inset-0 z-10">
            <svg viewBox="0 0 400 400" className="h-full w-full text-bistro-dark" role="img" aria-label="Une gamelle qui mijote">
              {/* steam */}
              <g fill="none" strokeLinecap="round" strokeWidth="7" className="stroke-bistro-ochre">
                <path className="steam" d="M150 105 C 130 80, 175 65, 155 35" style={{ animationDelay: "1.6s" }} />
                <path className="steam" d="M200 100 C 180 70, 225 55, 205 20" style={{ animationDelay: "2.3s" }} />
                <path className="steam" d="M250 105 C 230 80, 275 65, 255 35" style={{ animationDelay: "3s" }} />
              </g>

              {/* side handles */}
              <rect x="52" y="190" width="42" height="18" rx="9" fill="currentColor" />
              <rect x="306" y="190" width="42" height="18" rx="9" fill="currentColor" />

              {/* body */}
              <path d="M78 165 H322 V300 Q322 350 272 350 H128 Q78 350 78 300 Z" fill="currentColor" />
              <rect x="78" y="230" width="244" height="10" className="fill-bistro-ochre" />
              <rect x="78" y="250" width="244" height="4" className="fill-bistro-ochre" opacity=".6" />

              {/* lid */}
              <g className="lid">
                <path d="M68 165 Q68 125 120 122 H280 Q332 125 332 165 Z" fill="currentColor" />
                <rect x="60" y="160" width="280" height="14" rx="7" fill="currentColor" />
                <circle cx="200" cy="112" r="12" className="fill-bistro-ochre" />
              </g>

              {/* shine */}
              <path d="M104 190 V300" stroke="white" strokeOpacity=".18" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Marquee of dishes */}
      <div className="marquee hero-fade relative z-10 overflow-hidden border-y-2 border-bistro-dark/80 bg-bistro-ochre py-4" style={{ animationDelay: "1.4s" }} aria-label="Programme d'octobre 2026">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...EVENTS, ...EVENTS, ...EVENTS, ...EVENTS].map((event, i) => (
            <span key={i} className="flex items-center gap-10 text-xl font-extrabold text-bistro-dark sm:text-2xl">
              <span className="flex items-center gap-3">
                <span className="rounded-md bg-bistro-red px-2.5 py-1 text-base font-extrabold text-white sm:text-lg">
                  {event.date}
                </span>
                {event.title}
              </span>
              <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}