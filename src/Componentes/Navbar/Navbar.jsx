import { BiCategory } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../firebase/config";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FAVORITO, LATE, MEGUSTA } from "../../Utilidades/administrador-preferencias";


export const Navbar = () => {
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (!authUser) {
      checkUserAuth();
    }
  }, [])

  const checkUserAuth = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setAuthUser(user);
      } else {
        console.log("No esta logueado");
        navigate("/");
      }
    })
  }

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("Desconexión exitosa");
      [MEGUSTA, FAVORITO, LATE].map(preferencia => {
        localStorage.removeItem(preferencia);
      })
      setAuthUser(null);
      navigate("/");
    }).catch(error => console.log("Error al intentar desconectarse ", error));
  }

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      <li className="nav-item icon">
        <Link to={"/generos"}>
          <BiCategory />
          <p className="fuente-principal regular">Géneros</p>
        </Link>
      </li>
      <li className="nav-item icon">
        <Link to={"/plataformas"}>
          <FaGamepad />
          <p className="fuente-principal regular">Plataformas</p>
        </Link>
      </li>
      <>
        {authUser === null ? (
          <li className="nav-item icon ">
            <Link to={"/login"}>
              <BsFillPersonFill />
              <p className="fuente-principal regular text-center hidden">
                Login
              </p>
            </Link>
          </li>
        ) : (
          <>
            <li className="nav-item icon ">
              <div class="btn-group dropup user-options">
                <Link class="dropdown-toggle" data-bs-toggle="dropdown">
                  <BsFillPersonFill />
                  <p className="fuente-principal regular text-center hidden">
                    Yo
                  </p>
                </Link>
                <ul class="dropdown-menu">
                  <li className="fuente-principal regular text-center logout show">
                    <Link to={'/perfilusuario'}>Mi perfil</Link>
                  </li>
                  <li className="fuente-principal regular text-center logout show" onClick={userSignOut}>
                    Logout
                  </li>
                </ul>
              </div>
            </li>
          </>
        )}
      </>
    </ul>
  );
};
