import React from "react";
import {BiCategory } from "react-icons/bi";
import {FaGamepad} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
      <li class="nav-item icon">
        <a class="navegacion-icono" href="#">
          < BiCategory />
        </a>
        <p className= "fuente-principal regular">Generos</p>
      </li>
      <li class="nav-item icon">
        <a class="navegacion-icono" href="#">
          <FaGamepad />
        </a>
        <p className= "fuente-principal regular">Plataforma</p>
      </li>
      <li class="nav-item icon ">
        <a class="navegacion-icono" href="#">
          <BsFillPersonFill />
        </a>
        <p className= "fuente-principal regular text-center">Login</p>
      </li>
    </ul>
    
    );
};


