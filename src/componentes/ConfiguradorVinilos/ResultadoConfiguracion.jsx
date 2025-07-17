import React, { useState } from "react";

import TarjetaModelo from "../ModelosYTamanos/TarjetaModelo.jsx";
import TarjetaTipoVinilo from "../TiposDeVinilo/TarjetaTipoVinilo.jsx";
import "../ConfiguradorVinilos/Selectores.css";

const ResultadoConfiguracion = ({
  equipo, vinilo, puedeEstamparse, descripcionEstampado,}) => {
  const [imagenesEstampado, setImagenesEstampado] = useState([]);

  const [urlImagenInput, setUrlImagenInput] = useState("");

  const [errorUrl, setErrorUrl] = useState("");

  const handleImagenesChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      setErrorUrl("");
    }

    files.forEach((file) => {
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecciona solo archivos de imagen.");
        return;
      }

      reader.onload = (e) => {
        setImagenesEstampado((prevImagenes) => [
          ...prevImagenes,
          {
            id: Date.now() + Math.random(),
            src: e.target.result,
            name: file.name,
            type: "file",
          },
        ]);
      };
      reader.readAsDataURL(file);
    });

    event.target.value = "";
  };

  const handleUrlInputChange = (event) => {
    setUrlImagenInput(event.target.value);
    setErrorUrl("");
  };

  const handleAddImageUrl = () => {
    if (!urlImagenInput) {
      setErrorUrl("Por favor, introduce una URL de imagen.");
      return;
    }

    const urlRegex = /\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?(#.*)?$/i;
    if (!urlRegex.test(urlImagenInput)) {
      setErrorUrl(
        "La URL no parece ser un enlace directo a una imagen (jpeg, jpg, gif, png, webp, svg)."
      );
      return;
    }

    setImagenesEstampado((prevImagenes) => [
      ...prevImagenes,
      {
        id: Date.now() + Math.random(),
        src: urlImagenInput,
        name:
          urlImagenInput.split("/").pop().split("?")[0].split("#")[0] ||
          "imagen_web",
        type: "url",
      },
    ]);

    setUrlImagenInput("");
    setErrorUrl("");
  };

  const handleEliminarImagen = (idAEliminar) => {
    setImagenesEstampado((prevImagenes) =>
      prevImagenes.filter((imagen) => imagen.id !== idAEliminar)
    );
  };

  const handleReplaceImagen = (idToReplace, event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Por favor, selecciona solo archivos de imagen.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagenesEstampado((prevImagenes) =>
        prevImagenes.map((imagen) =>
          imagen.id === idToReplace
            ? { ...imagen, src: e.target.result, name: file.name, type: "file" }
            : imagen
        )
      );
    };
    reader.readAsDataURL(file);

    event.target.value = "";
  };

  const handleReplaceImageUrl = (idToReplace) => {
    const newUrl = prompt("Introduce la nueva URL de la imagen:");
    if (!newUrl) return;

    const urlRegex = /\.(jpeg|jpg|gif|png|webp|svg)(\?.*)?(#.*)?$/i;
    if (!urlRegex.test(newUrl)) {
      alert(
        "La URL no parece ser un enlace directo a una imagen (jpeg, jpg, gif, png, webp, svg)."
      );
      return;
    }

    setImagenesEstampado((prevImagenes) =>
      prevImagenes.map((imagen) =>
        imagen.id === idToReplace
          ? {
              ...imagen,
              src: newUrl,
              name:
                newUrl.split("/").pop().split("?")[0].split("#")[0] ||
                "imagen_web",
              type: "url",
            }
          : imagen
      )
    );
  };

  return (
    <div className="resultado-configuracion">
      <h3 className="sub-titu">Tu Configuración Elegida</h3>

      <div className="resumen-configuracion-card">
        <p className="resumen-item">
          <strong className="resumen-label">Equipo:</strong> {equipo.modelMod}
          <img
            src={equipo.modImg}
            alt={equipo.alt}
            className="resumen-imagen-compacta"
          />
        </p>
        <p className="resumen-item">
          <strong className="resumen-label">Vinilo:</strong> {vinilo.tipoVinilo}{" "}
          - {vinilo.textura}
          <img
            src={vinilo.imagenVinilo}
            alt={vinilo.alt}
            className="resumen-imagen-compacta"
          />
        </p>
        <p className="resumen-item">
          <strong className="resumen-label">Estampable:</strong>{" "}
          {descripcionEstampado}
        </p>
        <p className="resumen-item">
          <strong className="resumen-label">Color:</strong>{" "}
          {vinilo.caracteristica_color}
        </p>
        <p className="resumen-item">
          <strong className="resumen-label">Adhesión:</strong> {vinilo.adhesion}
        </p>
      </div>

      {puedeEstamparse && (
        <div className="opcion-estampado">
          <h4>¡Genial! Este vinilo permite estampado.</h4>
          <p>Sube tu imagen, logo o diseño, o pega una URL de la web:</p>

          <div className="carga-opciones-container">
            <div className="carga-opcion-item">
              <label
                htmlFor="inputImagenesEstampado"
                className="custom-file-upload-multiple"
              >
                Subir Imagen desde tu PC
              </label>
              <input
                type="file"
                id="inputImagenesEstampado"
                accept="image/*"
                multiple
                onChange={handleImagenesChange}
                className="input-file-estampado-oculto"
              />
            </div>

            <div className="carga-opcion-item">
              <input
                type="text"
                className="input-url-imagen"
                placeholder="Pega la URL de la imagen aquí (ej: https://ejemplo.com/img.png)"
                value={urlImagenInput}
                onChange={handleUrlInputChange}
              />
              <button
                className="btn btn-primary add-url-btn"
                onClick={handleAddImageUrl}
              >
                Agregar Imagen por URL
              </button>

              {errorUrl && <p className="error-url">{errorUrl}</p>}
            </div>
          </div>

          <div className="preview-imagenes-estampado">
            {imagenesEstampado.length === 0 && (
              <p className="no-archivo-seleccionado">
                No hay imágenes de estampado seleccionadas.
              </p>
            )}

            {imagenesEstampado.map((imagen) => (
              <div key={imagen.id} className="imagen-estampado-item">
                <img
                  src={imagen.src}
                  alt={imagen.name}
                  className="imagen-preview-mini"
                />
                <p className="nombre-archivo-subido">
                  Archivo: <strong>{imagen.name}</strong> (
                  {imagen.type === "file" ? "Local" : "Web"})
                </p>
                <div className="btn-group">
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleEliminarImagen(imagen.id)}
                  >
                    Eliminar
                  </button>

                  {imagen.type === "file" ? (
                    <label className="btn btn-info btn-sm btn-replace-image">
                      Reemplazar (Archivo)
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleReplaceImagen(imagen.id, e)}
                      />
                    </label>
                  ) : (
                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => handleReplaceImageUrl(imagen.id)}
                    >
                      Reemplazar (URL)
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <button className="boton-confirmar">¡Configurar Ahora!</button>
    </div>
  );
};

export default ResultadoConfiguracion;
