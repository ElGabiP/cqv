// import { useState } from "react";
// import { Signup } from "./Paginas/Signup/Signup";
import imgUser from "./profile.png";
import "./Perfil.css";

export const Perfil = () => {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <form>
        <section class="game-menu-frame">
          <header class="game-header">
            <h1 class="game-title">
              <img src={imgUser} alt="user" className="user" />
              <div class="line-1">Bienvenido</div>
            </h1>
          </header>
          <nav class="game-nav">
            <ul class="game-nav-list">
              <li class="game-nav-item">
                {" "}
                <a class="game-nav-button" href="https://www.youtube.com/">
                  💎 Deseados
                </a>
              </li>
              <li class="game-nav-item">
                {" "}
                <a class="game-nav-button" href="https://www.youtube.com/">
                  &#11088; Favoritos
                </a>
              </li>
              <li class="game-nav-item">
                {" "}
                <a class="game-nav-button" href="https://www.youtube.com/">
                  &#128077; Poseidos
                </a>
              </li>
              <li class="game-nav-item">
                {" "}
                <a class="game-nav-button" href="https://www.youtube.com/">
                  &#128736; Configuración
                </a>
              </li>
            </ul>
          </nav>
        </section>
      </form>
    </div>
  );
};
