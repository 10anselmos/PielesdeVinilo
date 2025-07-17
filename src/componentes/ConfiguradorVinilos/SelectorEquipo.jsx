
import React from "react";
import TarjetaModelo from "../ModelosYTamanos/TarjetaModelo.jsx"; 
import "../ConfiguradorVinilos/Selectores.css"; 



const SelectorEquipo = ({ datosModelos, onSelectEquipo, equipoSeleccionado }) => {
  return (
    <div className="selector-grid">
      {datosModelos.map((modelo) => (
        <div
          key={modelo.id}
          className={`item-selector ${equipoSeleccionado && equipoSeleccionado.id === modelo.id ? 'seleccionado' : ''}`}
          onClick={() => onSelectEquipo(modelo)}
        >
          
          <TarjetaModelo
            modImgSrc={modelo.modImg}
            altText={modelo.alt}
            modelMod={modelo.modelMod}
            info={modelo.info}
            size={modelo.size}
            modoCompacto={true}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectorEquipo;

