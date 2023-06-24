import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { ImSearch } from "react-icons/im";
import { Navbar } from "../Navbar/Navbar";
import "./Header.css";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark navbar-bg ">
      <div className="container-fluid d-flex">
        <Link className="navbar-brand " to={"/"}>
          <Logo />
        </Link>
        <div className="navbar-collapse " id="navbarSupportedContent">
          <form className="d-flex mx-auto w-75">
            <input className="form-control me-2" type="search" placeholder="Con que te quieres enviciar hoy?" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><ImSearch /></button>
          </form>
          <div className="nav-dextop d-sm-none d-md-flex ">
            <Navbar />
          </div>
        </div>
      </div>
    </nav>
  );
}

