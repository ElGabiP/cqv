import "./Perfil.css";

export const Perfil = () => {
  return (
    <div className="perfil template d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row w-100 d-flex justify-content-center align-items-center main_div">
          <div className="col-12 col-lg-6 col-md-8 col-xxl-5">
            <div className="card py-3 px-2">
              <div className="separador">
                <div className="row">
                  <div className="col-6 mx-auto mb-4">
                    <span className="main-heading">Welcome</span>
                  </div>
                </div>

                <form className="formRegister">
                  <div className="d-grid  mb-2">
                    <button type="submit" className="btn btn-primary">
                      Deseados
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button type="submit" className="btn btn-primary">
                      Favoritos
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button type="submit" className="btn btn-primary">
                      Poseidos
                    </button>
                  </div>
                  <div className="d-grid mb-2">
                    <button type="submit" className="btn btn-primary">
                      Configuracion
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
