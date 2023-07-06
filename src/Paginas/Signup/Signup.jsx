import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";

export const Signup = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setrepeatPass] = useState("");

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== repeatPass) {
      console.log("Las contraseñas no coinciden");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("Registro exitoso");
        navigate("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row w-100 d-flex justify-content-center main_div align-items-stretch">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
            <div className="card py-3 px-2">
              <div className="separador">
                <div className="row">
                  <div className="col-6 mx-auto mb-4">
                    <span className="main-heading">Welcome</span>
                  </div>
                </div>

                <form className="formRegister" onSubmit={registerUser}>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Nombre"
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Apellido"
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      value={userName}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Nombre de Usuario"
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    ></input>
                  </div>
                  <div class="mb-3">
                    <input
                      type="email"
                      value={email}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="E-mail"
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
                  <div class="mb-3">
                    <input
                      type="password"
                      value={repeatPass}
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Repite tu contraseña"
                      onChange={(e) => setrepeatPass(e.target.value)}
                    ></input>
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary boton-registro btn-lg">
                      Registrate
                    </button>
                  </div>
                  <p className="text-end mt-2">
                    Ya estás registrado?
                    <Link to="/login" className="ms-2">
                      Inicia Sesión
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
