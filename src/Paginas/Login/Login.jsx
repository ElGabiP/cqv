import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase/config";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(email, password);
        console.log(user);
        console.log("Login exitoso");
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
        <div className="row w-100 d-flex justify-content-center align-items-center main_div">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
            <div className="card py-3 px-2">
              <div className="separador">
                <div className="row">
                  <div className="col-6 mx-auto mb-4">
                    <span className="main-heading">Inicia Sesión</span>
                  </div>
                </div>

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
                      placeholder="Ingresa contrasenia"
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                  <p className="text-end mt-2">
                    <Link to="/signup" className="ms-2">
                      Registrate Acá
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
