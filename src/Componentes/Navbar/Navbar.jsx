import {BiCategory } from "react-icons/bi";
import {FaGamepad} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      <li className="nav-item icon">
        <a className="navegacion-icono" href="#">
          < BiCategory />
        </a>
        <p className= "fuente-principal regular">
          <Link to={"/generos"}>Generos</Link>
        </p>
      </li>
      <li className="nav-item icon">
        <a className="navegacion-icono" href="#">
          <FaGamepad />
        </a>
        <p className= "fuente-principal regular">
        <Link to={"/plataformas"}>Plataformas</Link>
        </p>
      </li>
      <li className="nav-item icon ">
        <a className="navegacion-icono" href="#">
          <BsFillPersonFill />
        </a>
        <p className= "fuente-principal regular text-center">
        <Link to={"/login"}>Login</Link>
        </p>
      </li>
    </ul>
    
    );
};


