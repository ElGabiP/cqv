import { Logo } from '../Logo/Logo';
import "./Header.css";
import {ImSearch} from "react-icons/im";
export const Header = () => {
  return (
    <nav class="navbar navbar-expand navbar-dark navbar-bg ">
      <div class="container-fluid d-flex ">
        <a class="navbar-brand " href="#">
          <Logo />
        </a>
       
        <div class="navbar-collapse" id="navbarSupportedContent">
        
          <form class="d-flex mx-auto w-75">
            <input class="form-control me-2" type="search" placeholder="Con que te quieres enviciar hoy?" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit"><ImSearch/></button>
          </form>
          <div class="nav-dextop d-sm-none d-md-block">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link "  href="#">Genero</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plataforma</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" >Login</a>
        </li>
      </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}

