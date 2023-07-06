import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Navbar } from "../Navbar/Navbar";
import { Buscador } from '../Buscador/Buscador';
import "./Header.css";

export const Header = () => {
  const location = useLocation();
  console.log(location);
  if (!location.pathname.includes("presentaciong7")){
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
  
}

