
import React from "react";
import TarjetaTipoVinilo from "../TiposDeVinilo/TarjetaTipoVinilo.jsx";
import "./TiposDeVinilo.css";
import {
  vinilosTexturados,
  vinilosLisos,
  vinilosEspejados,
  vinilosReflectivos,
} from "./datosVinilos.jsx";

const TiposDeVinilo = () => {
  return (
    <section id="tiposdevinilos">
      <h1 className="titu">Tipos de Vinilo</h1>
      <br />
      <div className="contenedorvinilos">
        <h2 className="titu">Texturados</h2>
        <p>Vinilos con textura 3D imitando el original.</p>
        <div className="grupo">
          {vinilosTexturados.map((vinilo) => (
            <TarjetaTipoVinilo
              key={vinilo.id}
              imagenViniloSrc={vinilo.imagenVinilo}
              imagenVinilobigSrc={vinilo.imagenVinilobig}
              altText={vinilo.alt}
              tipoVinilo={vinilo.tipoVinilo}
              textura={vinilo.textura}
              es_estampable={vinilo.es_estampable}
              caracteristica_color={vinilo.caracteristica_color}
              adhesion={vinilo.adhesion}
            />
          ))}
        </div>

       
        <h2 className="titu">Lisos</h2>
        <p>Vinilos lisos en colores varios con acabado mate o brilloso.</p>
        <div className="grupo">
          {vinilosLisos.map((vinilo) => (
            <TarjetaTipoVinilo
              key={vinilo.id}
              imagenViniloSrc={vinilo.imagenVinilo}
              imagenVinilobigSrc={vinilo.imagenVinilobig}
              altText={vinilo.alt}
              tipoVinilo={vinilo.tipoVinilo}
              textura={vinilo.textura}
              es_estampable={vinilo.es_estampable}
              caracteristica_color={vinilo.caracteristica_color}
              adhesion={vinilo.adhesion}
            />
          ))}
        </div>

        <h2 className="titu">Espejados</h2>
        <p>Vinilos lisos con terminacion espejo o cepillado.</p>
        <div className="grupo">
          {vinilosEspejados.map((vinilo) => (
            <TarjetaTipoVinilo
              key={vinilo.id}
              imagenViniloSrc={vinilo.imagenVinilo}
              imagenVinilobigSrc={vinilo.imagenVinilobig}
              altText={vinilo.alt}
              tipoVinilo={vinilo.tipoVinilo}
              textura={vinilo.textura}
              es_estampable={vinilo.es_estampable}
              caracteristica_color={vinilo.caracteristica_color}
              adhesion={vinilo.adhesion}
            />
          ))}
        </div>

        <h2 className="titu">Reflectivo</h2>
        <p>Vinilos lisos, en colores o estampados 100% personalizado.</p>
        <div className="grupo">
          {vinilosReflectivos.map((vinilo) => (
            <TarjetaTipoVinilo
              key={vinilo.id}
              imagenViniloSrc={vinilo.imagenVinilo}
              imagenVinilobigSrc={vinilo.imagenVinilobig}
              altText={vinilo.alt}
              tipoVinilo={vinilo.tipoVinilo}
              textura={vinilo.textura}
              es_estampable={vinilo.es_estampable}
              caracteristica_color={vinilo.caracteristica_color}
              adhesion={vinilo.adhesion}
            />
          ))}
        </div>
      </div>
      <br />
    </section>
  );
};

export default TiposDeVinilo;
