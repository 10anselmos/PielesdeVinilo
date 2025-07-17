import React from "react";
import TarjetaModelo from "./TarjetaModelo";
import datosModelosMod from "./datosModelosMod";
import "./ModelosYTamanos.css";

const ModelosYTamanos = () => {
  return (
    <section id="modelosytalles">
      <h2 className="titu">Modelos y Talles</h2>
      <div className="cardsContainer">
        {datosModelosMod.map((modelo) => (
          <TarjetaModelo
            key={modelo.id}
            modImgSrc={modelo.modImg}
            altText={modelo.alt}
            modelMod={modelo.modelMod}
            info={modelo.info}
            size={modelo.size}
          />
        ))}
      </div>

      <h1 className="titu">Todas las plantillas de corte disponibles</h1>
      <img
        className="todaslasplant"
        src="/imagenes/Cortesdisponibles.jpg"
        alt="Plantillas de corte disponibles"
        width="90%"
      />
    </section>
  );
};

export default ModelosYTamanos;
