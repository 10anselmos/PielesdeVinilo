import { useState } from "react";
import Header from "./componentes/Header/Header.jsx";
import SeccionSobreNosotros from "./componentes/SeccionSobreNosotros/SeccionSobreNosotros.jsx";
import TiposDeVinilo from "./componentes/TiposDeVinilo/TiposDeVinilo.jsx";
import GaleriaDeVideos from "./componentes/GaleriaDeVideos/GaleriaDeVideos.jsx";
import ModelosYTamanos from "./componentes/ModelosYTamanos/ModelosYTamanos.jsx";
import ConfiguradorVinilos from './componentes/ConfiguradorVinilos/ConfiguradorVinilos.jsx';
import InstruccionesDeAplicacion from './componentes/InstruccionesDeAplicacion/InstruccionesDeAplicacion.jsx';
import Footer from "./componentes/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="body">
      <Header />
      <div className="pantalla">
      <main className="main">
        < SeccionSobreNosotros />
        < TiposDeVinilo />
        < GaleriaDeVideos />
        < ModelosYTamanos />
        <ConfiguradorVinilos />
      </main>
      <div className="aside">
        < InstruccionesDeAplicacion />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
