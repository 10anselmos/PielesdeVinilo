import React from "react";
import "./ModelosYTamanos.css";

const TarjetaModelo = ({
  modImgSrc,
  altText,
  modelMod,
  info,
  size,
  modoCompacto,
}) => {
  return (
    <div className="cardBody">
      <img src={modImgSrc} alt={altText} className="cardImage" />
      <h6 className="cardTitle calistoga-regular">{modelMod}</h6>

      {!modoCompacto && (
        <>
          <p className="cardInfo">{info}</p>
          <p className="size">Tamaño: {size}</p>
          <div className="producCardPrice">
            <b>Tu propia imagen, logo de tu marca y/o texto personalizado..</b>
            <span>100% a tu gusto!!</span>
          </div>
          <button>Contactanos</button>
        </>
      )}
    </div>
  );
};

export default TarjetaModelo;
