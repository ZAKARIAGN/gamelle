import { useCallback, useEffect, useRef, useState } from "react";
import img1 from "../assets/galeries/img1.jpg";
import img2 from "../assets/galeries/img2.jpg";
import img3 from "../assets/galeries/img3.jpg";
import img4 from "../assets/galeries/img4.jpg";
import img5 from "../assets/galeries/img5.jpg";
import img6 from "../assets/galeries/img6.jpg";
import img7 from "../assets/galeries/img7.jpg";
import img8 from "../assets/galeries/img8.jpg";

const GALLERY_IMAGES = [img1, img2, img3, img4, img5, img6, img7, img8];

const styles = `
@keyframes gal-rise { from { transform: translateY(110%); } to { transform: translateY(0); } }
.gal-mask { display: block; overflow: hidden; padding-bottom: .12em; margin-bottom: -.12em; }
.gal-mask > span { display: block; transform: translateY(110%); }
.gal-visible .gal-mask > span { animation: gal-rise .9s cubic-bezier(.2,.8,.2,1) forwards; }

@keyframes gal-fade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
.gal-fade { opacity: 0; }
.gal-visible .gal-fade { animation: gal-fade .7s ease-out forwards; }

/* Tiles are revealed by a curtain wipe, one after another */
@keyframes gal-tile {
  from { clip-path: inset(100% 0 0 0 round 1rem); transform: translateY(24px); }
  to   { clip-path: inset(0 0 0 0 round 1rem);    transform: translateY(0); }
}
.gal-tile { clip-path: inset(100% 0 0 0 round 1rem); }
.gal-visible .gal-tile { animation: gal-tile .9s cubic-bezier(.7,0,.2,1) forwards; }

@keyframes gal-lightbox-in { from { opacity: 0; } to { opacity: 1; } }
@keyframes gal-lightbox-img { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: scale(1); } }
.gal-lightbox { animation: gal-lightbox-in .25s ease-out; }
.gal-lightbox-img { animation: gal-lightbox-img .35s cubic-bezier(.2,.8,.2,1); }

@media (prefers-reduced-motion: reduce) {
  .gal-tile { clip-path: none; }
  .gal-tile, .gal-fade, .gal-mask > span, .gal-lightbox, .gal-lightbox-img { opacity: 1; transform: none; animation: none !important; }
}
`;

function useInView(threshold = 0.1) {
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

export default function Galerie() {
  const [ref, inView] = useInView();
  const [open, setOpen] = useState(null); // index of the open photo, or null
  const total = GALLERY_IMAGES.length;

  const close = useCallback(() => setOpen(null), []);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + total) % total)), [total]);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % total)), [total]);

  // Keyboard controls + scroll lock while the lightbox is open
  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close, prev, next]);

  return (
    <section
      id="galerie"
      ref={ref}
      className={`relative z-20 w-full overflow-hidden bg-bistro-bg px-4 py-24 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] sm:py-32 ${
        inView ? "gal-visible" : ""
      }`}
      style={{ fontFamily: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{styles}</style>
      <div className="pointer-events-none absolute -bottom-[20%] -left-[10%] h-[500px] w-[500px] rounded-full bg-amber-900/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-[10%] -top-[10%] h-[400px] w-[400px] rounded-full bg-amber-800/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl text-left">
          <p className="gal-fade mb-6 inline-block rounded-full border border-bistro-red/40 bg-bistro-red/10 px-4 py-1.5 text-sm font-medium text-bistro-red" style={{ animationDelay: ".1s" }}>
            Notre galerie
          </p>
          <h2 className="text-5xl font-extrabold leading-[0.98] tracking-tight text-bistro-dark sm:text-6xl">
            <span className="gal-mask"><span style={{ animationDelay: ".2s" }}>L'ambiance</span></span>
            <span className="gal-mask"><span style={{ animationDelay: ".35s" }} className="italic text-bistro-ochre">La Gamelle.</span></span>
          </h2>
          <p className="gal-fade mt-6 text-lg text-bistro-dark/75" style={{ animationDelay: ".7s" }}>
            Cliquez sur une photo pour l'agrandir.
          </p>
        </div>

        {/* Grid */}
        <div className="grid w-full auto-rows-[150px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-4 md:gap-6">
          {GALLERY_IMAGES.map((img, index) => {
            let spanClass = "col-span-1 row-span-1";
            if (index === 0) spanClass = "col-span-2 row-span-2";
            else if (index === 4) spanClass = "col-span-2 row-span-1";
            else if (index === 5) spanClass = "col-span-1 row-span-2";

            return (
              <button
                key={index}
                type="button"
                onClick={() => setOpen(index)}
                aria-label={`Agrandir la photo ${index + 1}`}
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                className={`gal-tile group relative overflow-hidden rounded-2xl shadow-xl outline-none transition-shadow duration-500 hover:shadow-[0_0_30px_rgba(217,119,6,0.3)] focus-visible:ring-4 focus-visible:ring-bistro-ochre ${spanClass}`}
              >
                <img
                  src={img}
                  alt={`La Gamelle, photo ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-bistro-dark/0 transition-colors duration-500 group-hover:bg-bistro-dark/35" />
                <span className="pointer-events-none absolute bottom-3 right-3 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-bistro-ochre text-bistro-dark opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {open !== null && (
        <div
          className="gal-lightbox fixed inset-0 z-[100] flex items-center justify-center bg-bistro-dark/92 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Galerie photo"
          onClick={close}
        >
          <img
            key={open}
            src={GALLERY_IMAGES[open]}
            alt={`La Gamelle, photo ${open + 1}`}
            className="gal-lightbox-img max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-bistro-ochre hover:text-bistro-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Photo précédente"
            className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-bistro-ochre hover:text-bistro-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:left-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Photo suivante"
            className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-bistro-ochre hover:text-bistro-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-6"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white">
            {open + 1} sur {total}
          </p>
        </div>
      )}
    </section>
  );
}