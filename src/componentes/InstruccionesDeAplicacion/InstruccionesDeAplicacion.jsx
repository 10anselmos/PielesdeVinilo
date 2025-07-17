import React from "react";
import "./InstruccionesDeAplicacion.css";

const InstruccionesDeAplicacion = () => {
  return (
    <aside className="aside-aplicacion">
      {" "}
      <section id="como-vestir-mod">
        {" "}
        <div className="flex-vestir">
          <h2 className="titulo-seccion">Cómo Aplicar Tu Vinilo al Mod</h2>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso1.jpg"
              width="100"
              alt="Paso 1: Manos limpias"
            />
            <p className="texto-paso">
              Asegurate de tener las{" "}
              <strong>manos limpias y libres de aceites</strong>. La suciedad o
              grasa pueden afectar la adhesión y el resultado final. ¡Lavate
              bien las manos antes de empezar!
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso2.jpg"
              width="100"
              alt="Paso 2: Limpiar dispositivo"
            />
            <p className="texto-paso">
              <strong>Limpia tu dispositivo a fondo</strong>. Cualquier suciedad
              o residuo impedirá una correcta adhesión y podría generar burbujas
              de aire indeseadas.
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso3.jpg"
              width="100"
              alt="Paso 3: Presentar vinilo"
            />
            <p className="texto-paso">
              <strong>Presenta la piel de vinilo sobre tu equipo</strong> para
              visualizar su posición correcta y asegurar una alineación perfecta
              antes de la aplicación final.
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso4.jpg"
              width="100"
              alt="Paso 4: Humedecer y despegar"
            />
            <p className="texto-paso">
              <strong>Retira cuidadosamente la piel del papel protector</strong>
              . Pulverizá ligeramente agua sobre el lado adhesivo. Esto te
              permitirá reposicionar el vinilo si es necesario y evitará la
              formación de burbujas. Si tu vinilo incluye un{" "}
              <strong>transportador</strong> (papel que va encima), asegurate de
              no despegarlo en este paso.
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso5.jpg"
              width="100"
              alt="Paso 5: Aplicar y alinear"
            />
            <p className="texto-paso">
              <strong>Aplica la piel a tu mod</strong>. Guíate por las
              perforaciones de los botones y puertos para una{" "}
              <strong>alineación precisa</strong>. Comienza a pegar desde el{" "}
              <strong>centro hacia los extremos</strong> para asegurar un
              acabado liso.
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso6.jpg"
              width="100"
              alt="Paso 6: Eliminar burbujas"
            />
            <p className="texto-paso">
              <strong>Elimina el aire y el agua:</strong> Desliza tus dedos o
              una espátula suave (si tienes) desde el centro hacia los bordes
              para expulsar cualquier burbuja de aire o exceso de agua. ¡Sé
              extremadamente cuidadoso de{" "}
              <strong>
                no permitir que entre agua al interior de tu equipo !
              </strong>{" "}
              Seca cualquier humedad con un paño o papel absorbente. Si
              aplicaste un vinilo con transportador, dejalo secar completamente
              hasta que el vinilo esté bien adherido antes de retirarlo con
              cuidado.
            </p>
          </div>

          <div className="paso">
            <img
              className="imagen-paso"
              src="/imagenes/como-vestir/paso7.jpg"
              width="100"
              alt="Paso 7: Secado final y ajuste"
            />
            <p className="texto-paso">
              <strong>Deja que tu equipo descanse:</strong> Es fundamental que
              el adhesivo se asiente. Evita guardar el mod en tu bolsillo o
              manipularlo excesivamente durante al menos{" "}
              <strong>24 horas</strong> para asegurar una adhesión óptima. Para
              que el vinilo se adapte perfectamente a las curvas de tu equipo,
              usa un <strong>secador de cabello en la posición más baja</strong>{" "}
              (a 10-15 cm de distancia) y calenta suavemente el vinilo mientras
              lo vas amoldando con tus dedos. Pon especial atención a los bordes
              y las curvas. Puedes ayudarte con un hisopo o cotonete para los
              espacios más pequeños.
            </p>
          </div>
        </div>
      </section>
      <div className="seccion-descargas">
        {" "}
        <div className="tarjeta-descarga">
          <h3>Descarga Nuestra Tarjeta de Contacto</h3>
          <a
            href="/imagenes/tarjeta.jpg"
            download="Tarjeta de Contacto Vapeta.jpg"
          >
            <img
              className="imagen-descarga"
              src="/imagenes/tarjeta.jpg"
              width="100px"
              alt="Tarjeta de Contacto"
            />
          </a>
        </div>
        <div className="instrucciones-descarga">
          <h3>Descarga las Instrucciones Completas</h3>
          <a
            href="/imagenes/Como vestir el mod.pdf"
            download="Instrucciones_Aplicacion_Mod.pdf"
          >
            <img
              className="imagen-descarga"
              src="/imagenes/como-vestir-mods.jpg"
              width="100px"
              alt="Instrucciones de cómo vestir el mod"
            />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default InstruccionesDeAplicacion;
