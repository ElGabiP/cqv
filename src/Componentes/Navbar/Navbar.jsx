import React from "react";
import {BiCategory } from "react-icons/bi";
import {FaGamepad} from "react-icons/fa";
import {BsFillPersonFill} from "react-icons/bs";
 
export const Navbar = () => {
  return (
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link " href="#">
          < BiCategory />
        </a>
        <p>Generos</p>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <FaGamepad />
        </a>
        <p>Plataforma</p>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">
          <BsFillPersonFill />
        </a>
        <p>Login</p>
      </li>
    </ul>
  );
};


