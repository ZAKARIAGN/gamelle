export default function Tarifs() {
  return (
    <div className="relative w-full py-24 bg-bistro-bg overflow-hidden z-20 font-sans">
      <div className="relative mx-auto max-w-5xl flex flex-col items-center z-10">
        
        {/* Poster Ochre Background */}
        <div className="w-full max-w-4xl bg-bistro-ochre pt-16 pb-0 md:pb-12 px-4 md:px-12 relative shadow-2xl">
          
          {/* Header resembling the poster */}
          <div className="text-center mb-12">
            <h2 className="text-white text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none drop-shadow-md">
              TARIFS <br />
              <span className="text-5xl md:text-7xl">DU RESTAURANT</span>
            </h2>
          </div>

          {/* The creamy rounded box inside (like the calendar block) */}
          <div className="bg-bistro-bg rounded-t-[3rem] rounded-b-none md:rounded-b-[3rem] p-6 md:p-12 relative z-10 shadow-xl border-b-8 border-r-8 border-bistro-dark">
            
            {/* Déjeuner Block */}
            <div className="flex items-start md:items-center gap-6 mb-10 pb-10 border-b-2 border-bistro-ochre/20">
              <div className="bg-bistro-red text-white flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-b-4 border-r-4 border-bistro-dark shadow-sm">
                <span className="font-bold text-xs md:text-sm tracking-widest uppercase mb-1">MIDI</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">17<span className="text-xl md:text-2xl">€90</span></span>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="text-bistro-dark text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Déjeuner Buffet</h3>
                <p className="text-bistro-dark/80 text-base md:text-lg font-medium">Du lundi au vendredi midi. (Hors jours fériés)</p>
              </div>
            </div>

            {/* Dîner Block */}
            <div className="flex items-start md:items-center gap-6 mb-10 pb-10 border-b-2 border-bistro-ochre/20">
              <div className="bg-bistro-red text-white flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-b-4 border-r-4 border-bistro-dark shadow-sm relative">
                <div className="absolute -top-3 -right-3 text-[10px] bg-bistro-dark text-white px-2 py-1 uppercase font-bold transform rotate-12">Soir & WE</div>
                <span className="font-bold text-xs md:text-sm tracking-widest uppercase mb-1">SOIR</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">24<span className="text-xl md:text-2xl">€90</span></span>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="text-bistro-dark text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Dîner & Week-end</h3>
                <p className="text-bistro-dark/80 text-base md:text-lg font-medium">Un festin sans limite pour les soirs et les week-ends.</p>
              </div>
            </div>

            {/* Enfant Block */}
            <div className="flex items-start md:items-center gap-6">
              <div className="bg-bistro-red text-white flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 flex-shrink-0 border-b-4 border-r-4 border-bistro-dark shadow-sm">
                <span className="font-bold text-xs md:text-sm tracking-widest uppercase mb-1">KIDS</span>
                <span className="text-4xl md:text-5xl font-black tracking-tighter">5<span className="text-xl md:text-2xl">€00</span></span>
              </div>
              <div className="pt-2 md:pt-0">
                <h3 className="text-bistro-dark text-2xl md:text-3xl font-black uppercase tracking-tight mb-2">Menu Enfant</h3>
                <p className="text-bistro-dark/80 text-base md:text-lg font-medium">Moins de 5 ans. Demi-tarif pour les enfants de 5 à 10 ans !</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
