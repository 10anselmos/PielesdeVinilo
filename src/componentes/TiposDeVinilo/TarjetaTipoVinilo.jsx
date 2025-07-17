
import React from "react";

const TarjetaTipoVinilo = ({
  imagenViniloSrc,
  imagenVinilobigSrc,
  altText,
  tipoVinilo,
  textura,
  es_estampable,
  caracteristica_color,
  adhesion,
  modoCompacto,
}) => {
  return (
    <div className={modoCompacto ? "cardBodyViniloCompacto" : "dropvinilos"}>
      <img
        src={imagenViniloSrc}
        alt={altText}
        className="imagenViniloCompacta"
      />
      <h6 className="cardTitleViniloCompacto">{tipoVinilo}</h6>
      {modoCompacto && <h6 className="cardTexturaCompacta">{textura}</h6>}{" "}
      {!modoCompacto && (
        <div className="dropvinilos-content">
          <img src={imagenVinilobigSrc} alt={altText} width="500" /> {" "}
          <div className="descpie">
            {" "}
            <ul>
              <li className="lienli">{textura}</li>{" "}
              <li className="lienli">{es_estampable}</li>{" "}
              <li className="lienli">{caracteristica_color}</li>{" "}
              <li className="lienli">{adhesion}</li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </div>
  );
};

export default TarjetaTipoVinilo;
