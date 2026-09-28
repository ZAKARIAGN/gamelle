import { MapPin, Phone, Globe, Clock } from "lucide-react";

export default function Info() {
  return (
    <div id="contact" className="relative w-full bg-bistro-bg py-24 sm:py-32 border-t border-bistro-dark/10 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] z-30 overflow-hidden">
      {/* Decorative diagonal red glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-stone-50/80 to-amber-950/20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-bistro-ochre/10 rounded-lg blur-[150px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center z-10">
        
        {/* Info text section */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-10">
          <div>
            <h2 className="mb-2 text-sm font-bold tracking-widest text-bistro-red uppercase">
              NOUS TROUVER
            </h2>
            <h3 className="text-4xl font-extrabold tracking-tight text-bistro-dark sm:text-5xl">
              Informations Pratiques
            </h3>
          </div>

          <div className="flex flex-col space-y-8">
            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg border border-bistro-red/30 bg-transparent text-bistro-red transition-all duration-500 group-hover:border-bistro-red group-hover:bg-bistro-ochre/20 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.25)]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-bistro-dark font-bold text-lg mb-1 tracking-wide">Adresse</h4>
                <p className="text-bistro-dark/80 leading-relaxed text-sm">29 cours richard vitton <br/>69003 Lyon, France</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg border border-bistro-red/30 bg-transparent text-bistro-red transition-all duration-500 group-hover:border-bistro-red group-hover:bg-bistro-ochre/20 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.25)]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-bistro-dark font-bold text-lg mb-1 tracking-wide">Téléphone</h4>
                <p className="text-bistro-dark/80 leading-relaxed text-sm">+33 4 26 28 83 64</p>
              </div>
            </div>

            <div className="flex items-start space-x-5 group">
              <div className="mt-1 flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-lg border border-bistro-red/30 bg-transparent text-bistro-red transition-all duration-500 group-hover:border-bistro-red group-hover:bg-bistro-ochre/20 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.25)]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-bistro-dark font-bold text-lg mb-1 tracking-wide">Horaires</h4>
                <p className="text-bistro-dark/80 leading-relaxed text-sm">lun-ven 8h30 à 23h /1h</p>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div className="w-full lg:w-2/3 h-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden border border-bistro-dark/10 shadow-[0_0_40px_rgba(0,0,0,0.03)] relative group bg-bistro-bg">
          {/* Subtle red hover border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-bistro-red/30 rounded-[2rem] transition-colors duration-500 z-20 pointer-events-none" />
          
          {/* Google Maps iFrame */}
          <iframe 
            src="https://www.google.com/maps?q=45.75391390345878,4.889439046104158&hl=fr&z=15&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full opacity-90"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
