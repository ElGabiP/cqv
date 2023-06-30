import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";
import { Buscador } from '../Buscador/Buscador';

export const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark navbar-bg ">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand " to={"/"}>
          <Logo />
        </Link>
        <div className="navbar-collapse " id="navbarSupportedContent">
          <Buscador />
          <div className="nav-dextop d-sm-none d-md-flex ">
            <Navbar />
          </div>
        </div>
      </div>
    </nav>
  );
}

