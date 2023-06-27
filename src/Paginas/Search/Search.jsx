import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation  } from "react-router-dom";
import { juegosApi } from "../../Utilidades/api";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { FaChevronLeft } from 'react-icons/fa';

export const Search = () => {

    const useQuery = ()=>{
        return new URLSearchParams(useLocation().search)
    }

    const query = useQuery();
    const search = query.get("search");
    
    const [juegos, setJuegos] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [buscado, setBuscado] = useState("");
    
    const navi = useNavigate();
    const { searchText } = useParams();
    console.log("buscaste: ",searchText);
  useEffect(() => {
    if (juegos === null) {
        obtenerJuegos()
    }
  }, [cargando]);

  useEffect(() => {
    if (buscado !== searchText) { 
        setCargando(true)       
        obtenerJuegos()
        
    }
    
  }, [searchText]);

  const obtenerJuegos = async () => {
    await juegosApi(`games`, { search: searchText }).then((games) => {
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
    <div>
        <div className="navegacion">
                        <FaChevronLeft onClick={() => navi(-1)} />
                    </div>
      <h1 className="fuente-principal">Resultado para: {searchText}</h1>
      <div className="container">
        <div className="row">
          {juegos && juegos.length > 0
            ? juegos.map((juego, key) => (
                <div className="col-6 col-sm-4 col-lg-3">
                  <Miniatura key={key} objetoJuego={juego} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
