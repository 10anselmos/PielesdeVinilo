import React from "react";
import TarjetaTipoVinilo from "../TiposDeVinilo/TarjetaTipoVinilo.jsx";
import "../ConfiguradorVinilos/Selectores.css";

const SelectorTipoVinilo = ({
  datosVinilos,
  onSelectVinilo,
  viniloSeleccionado,
}) => {
  return (
    <div className="selector-grid">
      {datosVinilos.map((vinilo) => (
        <div
          key={vinilo.id}
          className={`item-selector ${
            viniloSeleccionado && viniloSeleccionado.id === vinilo.id
              ? "seleccionado"
              : ""
          }`}
          onClick={() => onSelectVinilo(vinilo)}
        >
          <TarjetaTipoVinilo
            imagenViniloSrc={vinilo.imagenVinilo}
            imagenVinilobigSrc={vinilo.imagenVinilobig}
            altText={vinilo.alt}
            tipoVinilo={vinilo.tipoVinilo}
            textura={vinilo.textura}
            es_estampable={vinilo.es_estampable}
            caracteristica_color={vinilo.caracteristica_color}
            adhesion={vinilo.adhesion}
            modoCompacto={true}
          />
        </div>
      ))}
    </div>
  );
};

export default SelectorTipoVinilo;
