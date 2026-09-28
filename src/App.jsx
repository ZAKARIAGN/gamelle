import Navbar from "./NavBar/Navbar";
import Hero from "./Hero/Hero";
import Buffet from "./Buffet/Buffet";
import APropos from "./APropos/APropos";
import Galerie from "./Galerie/Galerie";
import Info from "./Info/Info";
import Footer from "./Footer/Footer";
import heroImg from "./assets/hero.jpg";

function App() {
  return (
    <div 
      className="relative min-h-screen bg-bistro-bg overflow-x-hidden font-sans bg-cover bg-center bg-fixed bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Light overlay to keep the flat poster aesthetic while showing a subtle background */}
      <div className="absolute inset-0 bg-bistro-bg/95 pointer-events-none fixed" />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Buffet />
        <APropos />
        <Galerie />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
