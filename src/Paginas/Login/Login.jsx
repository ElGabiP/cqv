import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/config";
import "./Login.css";
import { getData, getUserPreferences } from "../../Utilidades/administrador-preferencias";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login exitoso");
        getUserPreferences();
        navigate("/perfilusuario");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
            <h1 className="blacklime">Inicia Sesión</h1>
            <form className="formLogin" onSubmit={loginUser}>
              <div class="mb-3">
                <input
                  type="email"
                  value={email}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa tu mail"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  value={password}
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Ingresa contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary boton-registro btn-lg">
                  Enviar
                </button>
              </div>
              <p className="text-end mt-2">
                <Link to="/signup" id="linkRegistro" className="ms-2">
                  Registrate Acá
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <video class="video" autoPlay loop muted>
        <source src={process.env.PUBLIC_URL + '/video/videobkgrnd.mp4'} type='video/mp4' />
      </video>
    </div>
  );
};
