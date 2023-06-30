import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { juegosApi } from "../../Utilidades/api";
import { Botonera } from "./Botonera";
import { FaChevronLeft } from "react-icons/fa";
import "./ListaPorPlataformas.css";

export const ListaPorPlataformas = () => {
  const { plataformasId } = useParams();
  const navigate = useNavigate();
  const [plataformas, setPlataformas] = useState(null);
  const [cargando, setCargando] = useState(null);

  const getPlataformas = async () => {
    setCargando(true);
    await juegosApi("platforms/lists/parents").then(async (res) => {
      if (res) {
        setPlataformas(res);
        setCargando(false);
      }
    });
  };

  useEffect(() => {
    if (plataformas === null) {
      getPlataformas();
    }
  }, [cargando, plataformas]);

  if (cargando) {
    return <LogoCarga />;
  } else {
    return (
      <div className="container-fluid pt-3">
        <div className="navegacion-plataformas clearfix">
          <div className="icono-navegacion float-left">
            <FaChevronLeft onClick={() => navigate(-1)} />
          </div>
        </div>
        {plataformas && plataformas.length > 0
          ? plataformas.map((plataforma) => {
            if (plataforma.slug === plataformasId) {
              return (
                <div className="row" key={plataforma.id}>
                  <h1 className="text-center blacklime">{plataforma.name}</h1>
                  <Botonera plataforma={plataforma.platforms} />
                </div>
              );
            }
          })
          : ""}
      </div>
    );
  }
};
