import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { juegosApi } from "../../Utilidades/api";
import { obtenerIconoPlataforma } from "../../Utilidades/iconos";
import "./Plataformas.css";

export const Plataformas = () => {
  const [plataformas, setPlataformas] = useState(null);
  const [cargando, setCargando] = useState(null);

  useEffect(() => {
    if (plataformas === null) {
      getPlataformas();
    }
  }, [cargando, plataformas]);

  const obtenerIcono = (plataformas) => {
    let iconoPlataforma = "";
    // eslint-disable-next-line array-callback-return
    plataformas.map((plataforma) => {
      const icono = obtenerIconoPlataforma(plataforma.id);
      if (icono) {
        iconoPlataforma = icono;
      }
    });
    return iconoPlataforma;
  };

  const getPlataformas = async () => {
    setCargando(true);
    await juegosApi("platforms/lists/parents").then(async (res) => {
      if (res) {
        setPlataformas(res);
        setCargando(false);
      }
    });
  };

  if (cargando) {
    return <LogoCarga />;
  } else {
    return (
      <div className="container-fluid pt-3">
        <div className="row">
          <h1 className="text-center">Plataformas</h1>
          {plataformas && plataformas.length > 0
            ? plataformas.map((plataforma) => (
                <div className="col-6 col-sm-4 col-lg-3" key={plataforma.id}>
                  <Link
                    to={`/plataformas/${plataforma.slug}`}
                    className="enlace-plataformas"
                  >
                    <div className="icono-plataforma contenido-plataforma">
                      {obtenerIcono(plataforma.platforms)}
                    </div>
                    <div>
                      <h3 className="titulo-plataforma fuente-principal bold">
                        {plataforma.name}
                      </h3>
                    </div>
                  </Link>
                </div>
              ))
            : ""}
        </div>
      </div>
    );
  }
};
