import imgUser from "./profile.png";
import "./Perfil.css";
import { Link } from "react-router-dom";
import { FAVORITO, LATE, MEGUSTA } from "../../Utilidades/administrador-preferencias";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { useEffect, useState } from "react";

export const Perfil = () => {

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthUser(user.email);
      }
    })

  }, [])

  return (
    <div className="perfil template d-flex justify-content-center align-items-center vh-100">
      <form>
        <section className="game-menu-frame">
          <header className="game-header">
            <h1 className="game-title">
              <img src={process.env.PUBLIC_URL + '/img/perfil.svg'} alt="user" className="user" />
              <div className="line-1">Bienvenido</div>
            </h1>
            <h2 className="text-center">{authUser}</h2>

          </header>
          <nav className="game-nav">
            <ul className="game-nav-list">
              <li className="game-nav-item">
                {" "}
                <Link className="game-nav-button" to={`/guardados/${LATE}`}>
                  💎 Mi biblioteca
                </Link>
              </li>
              <li className="game-nav-item">
                {" "}
                <Link className="game-nav-button" to={`/guardados/${FAVORITO}`}>
                  &#11088; Mis favoritos
                </Link>
              </li>
              <li className="game-nav-item">
                {" "}
                <Link className="game-nav-button" to={`/guardados/${MEGUSTA}`}>
                  &#128077; Mis me gusta
                </Link>
              </li>
              {/*               <li className="game-nav-item">
                {" "}
                <a className="game-nav-button" href="https://www.youtube.com/">
                  &#128736; Configuración
                </a>
              </li> */}
            </ul>
          </nav>
        </section>
      </form>
    </div>
  );
};
