import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa"
import { useNavigate, useParams } from "react-router-dom";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { FAVORITO, LATE, MEGUSTA } from "../../Utilidades/administrador-preferencias";

export const Guardados = () => {

  const navi = useNavigate();
  const { collection } = useParams();

  const [juegos, setJuegos] = useState();

  const obtenerJuegos = () => {
    if (localStorage.getItem(collection)) {
      setJuegos(JSON.parse(localStorage.getItem(collection)))
    }
  }

 const obtenerTituloPagina = () => {
  if(collection === LATE){
    return 'Los tengo';
  }
  if(collection === FAVORITO){
    return 'Mis favoritos'
  }
  if(collection === MEGUSTA){
    return 'Me gustaron'
  }
 } 

  useEffect(() => {
    obtenerJuegos();
  }, [collection])


  return (
    <>
      <div className="header">
        <div className="navegacion">
          <FaChevronLeft onClick={() => navi(-1)} />
        </div>
      </div>
      <h1 className="blacklime fuente-principal">{obtenerTituloPagina()}</h1>
      <div className="container">
        <div className="row">
          {juegos && juegos.length > 0
            ? juegos.map((juego, key) => (
              juego.juego ?
                <div className="col-6 col-sm-4 col-lg-3 scale-in-center" style={{ animationDelay: `0.${1 + key}s` }}>
                  <Miniatura key={key} objetoJuego={juego.juego} />
                </div>
                : ''
            ))
            : ""}
        </div>
      </div>
    </>
  )
}
