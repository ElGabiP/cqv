import { BiCategory } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { auth } from "../../firebase/config";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Navbar = () => {
  const [authUser, setAuthUser] = useState("");

  useEffect(() => {
    const checkUserAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    })
    return () => {
      checkUserAuth();
    };
  }, [])

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("Desconexión exitosa");
    }).catch(error => console.log("Error al intentar desconectarse"));
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
              <Link to={"/"}>
                <BsFillPersonFill />
                <p className="fuente-principal regular text-center logout show"
                onClick={userSignOut}>
                  Logout
                </p>
              </Link>
            </li>
          </>
        )}
      </>
    </ul>
  );
};
