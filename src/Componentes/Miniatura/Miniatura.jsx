import { useState } from "react";
import { Link } from "react-router-dom";
import "./Miniatura.css";

export const Miniatura = ({ objetoJuego, enlaceDetalle }) => {
  const [juego, setJuego] = useState(objetoJuego);
  const [enlace, setEnlace] = useState(enlaceDetalle || `/juego/${juego.id}`)

  return (
    <Link to={enlace} className="enlace-miniatura">
      <div key={juego.id} className="contenido_miniatura">
        <div>
          <div className="box" style={{backgroundImage: juego.background_image  ?  `url(${juego.background_image})` : `url(${process.env.PUBLIC_URL}/img/bati-profe.jpg)` }}></div>
          <h3 className="titulo_miniatura fuente-principal bold">{juego.name}</h3>
        </div>
      </div>
    </Link >
  );
};
