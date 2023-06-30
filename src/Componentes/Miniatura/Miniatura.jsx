import { useState } from "react";
import { Link } from "react-router-dom";
import "./Miniatura.css";

export const Miniatura = ({ objetoJuego, enlaceDetalle }) => {
  const [juego, setJuego] = useState(objetoJuego);
  const [enlace, setEnlace] = useState(enlaceDetalle || `/juego/${juego.id}`)

  return (
    <Link to={enlace} className="enlace-miniatura">
      <div key={juego.id} className="contenido_miniatura">
        <div className="box" style={{ backgroundImage: `url(${juego.background_image})` }}>
          <h3 className="titulo_miniatura fuente-principal bold">{juego.name}</h3>
        </div>
      </div>
    </Link >
  );
};
