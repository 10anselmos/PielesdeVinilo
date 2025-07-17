import React, { useState, useEffect } from "react";
import SelectorEquipo from "../ConfiguradorVinilos/SelectorEquipo.jsx";
import SelectorTipoVinilo from "../ConfiguradorVinilos/SelectorTipoVinilo.jsx";
import ResultadoConfiguracion from "../ConfiguradorVinilos/ResultadoConfiguracion.jsx";
import {  vinilosTexturados,  vinilosLisos,  vinilosEspejados,  vinilosReflectivos,} from "../TiposDeVinilo/datosVinilos.jsx";
import datosModelosMod from "../ModelosYTamanos/datosModelosMod.jsx";
import "../ConfiguradorVinilos/Selectores.css";


const todosLosVinilos = [
  ...vinilosTexturados.map((item) => ({ ...item, categoria: "texturados" })),
  ...vinilosLisos.map((item) => ({ ...item, categoria: "lisos" })),
  ...vinilosEspejados.map((item) => ({ ...item, categoria: "espejados" })),
  ...vinilosReflectivos.map((item) => ({ ...item, categoria: "reflectivos" })),
];

const ConfiguradorVinilos = () => {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);
  const [viniloSeleccionado, setViniloSeleccionado] = useState(null);
  const [puedeEstamparse, setPuedeEstamparse] = useState(false);

  const [descripcionEstampado, setDescripcionEstampado] = useState("");

  useEffect(() => {
    if (equipoSeleccionado && viniloSeleccionado) {
      const esTexturado = vinilosTexturados.some(
        (v) => v.id === viniloSeleccionado.id
      );

      if (esTexturado) {
        setDescripcionEstampado("NO apto para estampado (es texturado).");
        setPuedeEstamparse(false);
      } else {
        if (
          viniloSeleccionado.es_estampable === "Puede ser estampado." ||
          viniloSeleccionado.es_estampable ===
            "Pueden ser estampados los colores claros."
        ) {
          setDescripcionEstampado("Sí, es apto para estampado.");
          setPuedeEstamparse(true);
        } else {
          setDescripcionEstampado("No es apto para estampado.");
          setPuedeEstamparse(false);
        }
      }
    } else {
      setPuedeEstamparse(false);
      setDescripcionEstampado("");
    }
  }, [equipoSeleccionado, viniloSeleccionado]);

  return (
    <section className="configurador-container">
      <h1 className="titu">Personaliza tu Equipo y Vinilo</h1>
      <p className="descripcion">
        Selecciona tu equipo y luego el tipo de vinilo para ver las opciones
        disponibles y sus características.
      </p>

      <h2 className="sub-titu">Paso 1: Elige tu Equipo</h2>
      <SelectorEquipo
        datosModelos={datosModelosMod}
        onSelectEquipo={setEquipoSeleccionado}
        equipoSeleccionado={equipoSeleccionado}
      />

      {equipoSeleccionado && (
        <>
          <h2 className="sub-titu">Paso 2: Elige el Tipo de Vinilo</h2>
          <SelectorTipoVinilo
            datosVinilos={todosLosVinilos}
            onSelectVinilo={setViniloSeleccionado}
            viniloSeleccionado={viniloSeleccionado}
          />
        </>
      )}

      {equipoSeleccionado && viniloSeleccionado && (
        <ResultadoConfiguracion
          equipo={equipoSeleccionado}
          vinilo={viniloSeleccionado}
          puedeEstamparse={puedeEstamparse}
          descripcionEstampado={descripcionEstampado}
        />
      )}
    </section>
  );
};

export default ConfiguradorVinilos;
