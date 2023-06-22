import { useState } from "react";
import "./Miniatura.css";
import { Link } from "react-router-dom";

export const Miniatura = ({ objetoJuego }) => {
  const [juego, setJuego] = useState(objetoJuego);

  return (
    <Link to={`/juego/${juego.id}`} className="enlace-miniatura">
      <div key={juego.id} className="contenido_miniatura">
        <div className="box">
          <img className="img_miniatura" src={juego.background_image} alt={juego.name} />
        </div>
        <h3 className="titulo_miniatura fuente-principal bold">{juego.name}</h3>
      </div>
    </Link >
  );
};
