import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { juegosApi } from "../../Utilidades/api";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { FaChevronLeft } from 'react-icons/fa';
import "./DetalleGenero.css";

export const DetalleGenero = () => {
  const [juegos, setJuegos] = useState(null);
  const [cargando, setCargando] = useState(true);

  const navi = useNavigate();
  const { generoId, nombregenero } = useParams();

  useEffect(() => {
    if (juegos === null) {
      obtenerJuegos()
    }
  }, [cargando]);

  const obtenerJuegos = async () => {
    await juegosApi(`games`, { genres: generoId }).then((games) => {
      if (games) {
        setJuegos(games);
        setCargando(false);
      }
    });
  };

  if (cargando) {
    return <LogoCarga />;
  }

  return (
    <>
      <div className="header">
        <div className="navegacion">
          <FaChevronLeft onClick={() => navi(-1)} />
        </div>
      </div>
      <h1 className="blacklime fuente-principal">{nombregenero}</h1>
      <div className="container">
        <div className="row">
          {juegos && juegos.length > 0
            ? juegos.map((juego, key) => (
              <div className="col-6 col-sm-4 col-lg-3 scale-in-center" style={{ animationDelay: `0.${1 + key}s` }}>
                <Miniatura key={key} objetoJuego={juego} />
              </div>
            ))
            : ""}
        </div>
      </div>
    </>
  );
};
