import { BiCategory } from "react-icons/bi";
import { FaGamepad } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";


export const Navbar = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
      <li className="nav-item icon">
        <Link to={"/generos"}>
          < BiCategory />
          <p className="fuente-principal regular">Generos</p>
        </Link>
      </li>
      <li className="nav-item icon">
        <Link to={"/plataformas"}>
          <FaGamepad />
          <p className="fuente-principal regular">
            Plataformas
          </p>
        </Link>
      </li>
      <li className="nav-item icon ">
        <Link to={"/login"}>
          <BsFillPersonFill />
          <p className="fuente-principal regular text-center">
            Login
          </p>
        </Link>
      </li>
    </ul>

  );
};


