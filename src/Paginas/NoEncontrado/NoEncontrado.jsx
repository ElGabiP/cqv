import { useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import "./NoEncontrado.css";

export const NoEncontrado = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex flex-column pt-3 justify-content-center">
      <h2 className="blacklime">¡Ups!</h2>
      <img
        src={`${process.env.PUBLIC_URL}/img/gameover.png`}
        alt="Página no encontrada"
        className="img-fluid mx-auto my-3 py-4 img-gameover sombra"
      />
      <div className="fuente-secundaria align-self-center">
        <p className="texto-no-encontrado">
          ¡Aquí en CQV nada puede malir sal! Pero, a veces, perdemos el
          control...
        </p>
        <p className="texto-no-encontrado">
          ¡No te preocupés! Podés dar un paso atrás y reintentar.
        </p>
        <button
          type="button"
          className="me-auto btn btn-outline-success btn-lg"
          onClick={() => navigate(-1)}>
          <FaChevronLeft /> Volver atrás
        </button>
      </div>
    </div>
  );
};
