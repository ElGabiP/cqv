import { BsPeople } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./Presentacion.css";

export const Presentacion = () => {
  const navigate = useNavigate();
  const volverAInicio = () => {
    navigate("/");
  };
  return (
    <>
      <div className="contenedor-carga container">
        <div
          id="carouselPresentacion"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="primero carousel-item active"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/video-games-collage-Dota-2-Carnival-ART-festival-208769-wallhere.com.jpg)`,
              }}
              data-bs-interval="4000"
            >
              <div className="container contenido-slider">
                <img
                  src={process.env.PUBLIC_URL + "/img/logo.svg"}
                  className="d-block w-75 mx-auto"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="5000">
              <div className="container contenido-slider">
                <h3 className="letra text-center mb-5">¿Quienes somos?</h3>
                <p className=" mb-5">
                  Somos una WEB-APP dedicada al universo gamer, donde nuestros
                  usuarios y visitantes podran ver los nuevos lanzamientos,
                  poder chequear en que plataforma corren sus juegos. Nuestros
                  usuarios podras crearce una biblioteca donde puedan saber con
                  que juegos cuentan que juegos desean y cuales les gusta con un
                  simple click.
                </p>
                <div className="d-flex justify-content-center">
                  <div className="icon-target">
                    <BsPeople size={60} fill="#0b72a5" />
                  </div>
                  <h3 className="letra mb-5">People/target</h3>
                </div>
                <ul className="lista-presentacion">
                  <li>Jovenes y adultos de entre 14 y 45 años.</li>
                  <li>
                    No nos importa su clase social solo que pertenezcan a
                    nuestro mundo, GAMER.
                  </li>
                </ul>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="container contenido-slider">
                <h3 className="letra">Nuestra familia tipografica</h3>
                <div className="tipografia text-center">
                  <p className="bold">
                    Fuente principal Rajdhani{" "}
                    <span className="bold">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="medium">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="regular">Fuente secundaria Roboto</span>
                  </p>
                  <p>
                    Fuente principal Rajdhani{" "}
                    <span className="light">Fuente secundaria Roboto</span>
                  </p>
                </div>
                <div>
                  <h3 className="letra">Nuestra paleta cromática</h3>
                  <div className="d-flex justify-content-evenly align-items-center">
                    <div className="primario d-flex flex-column justify-content-center">
                      <h2 className="paleta texto-p text-center">Primaria</h2>
                      <div className="flex-row d-flex align-items-center justify-content-around px-2">
                        <div className="color-verde mx-2 text-center">
                          #00ff00
                        </div>
                        <div className="color-violeta mx-2 text-center">
                          #161645
                        </div>
                      </div>
                    </div>
                    <div className="secundario d-flex flex-column justify-content-center">
                      <h2 className="paleta texto-p text-center">Secundaria</h2>
                      <div className="flex-row d-flex align-items-center justify-content-around px-2">
                        <div className="color-gris mx-2 text-center">
                          #e6e6e6
                        </div>
                        <div className="color-oscuro mx-2 text-center">
                          #151515
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <div className="container contenido-slider">
                <h3 className="letra text-center">Recursos</h3>
                <h3 className="letra">Api’s</h3>
                <ul>
                  <li>
                    <p>
                      Juegos:{" "}
                      <a
                        href="https://api.rawg.io/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        RAWG Video Games Database API
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      Traductor:{" "}
                      <a
                        href="https://translate.googleapis.com/translate_a/single"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Translate API
                      </a>
                    </p>
                  </li>
                </ul>
                <div className="">
                  <h3 className="letra">Lenguajes</h3>
                  <div className="d-flex flex-row justify-content-around my-4">
                    <img
                      src={process.env.PUBLIC_URL + "/img/html-5_5968267.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/css-3_5968242.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/js_5968292.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/react_1183672.png"}
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                </div>
                <div className="">
                  <h3 className="letra">Herramientas</h3>
                  <div className="d-flex flex-row justify-content-around my-4">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/illustrator_5968472.png"
                      }
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/trello_174874.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/figma_5968705.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/vsc.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={process.env.PUBLIC_URL + "/img/boostrap.png"}
                      alt="..."
                      width="75"
                    ></img>
                    <img
                      src={
                        process.env.PUBLIC_URL + "/img/photoshop_5968520.png"
                      }
                      alt="..."
                      width="75"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="4000">
              <div className="container contenido-slider">
                <h3 className="letra text-center">Bocetos</h3>
                <div className="d-flex flex-row justify-content-around my-4">
                  <img
                    src={process.env.PUBLIC_URL + "/img/mpv.png"}
                    alt="..."
                    width="500px"
                  ></img>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="4000">
              <div className="container contenido-slider">
                <h3 className="letra text-center">Diseños</h3>
                <div className="row justify-content-evenly row-cols-2 align-items-center">
                  <div className="col-3 ps-5 align-self-end">
                    <div className="" height="100">
                      <img
                        src={process.env.PUBLIC_URL + "/img/paleta.png"}
                        className="img-fluid "
                        alt="..."
                      ></img>
                      <img
                        src={process.env.PUBLIC_URL + "/img/prueba index.png"}
                        className="img-fluid "
                        alt="..."
                      ></img>
                      <img
                        src={process.env.PUBLIC_URL + "/img/otra.png"}
                        className="img-fluid "
                        alt="..."
                      ></img>
                    </div>
                  </div>
                  <div className="col-7 pe-4">
                    <div className="">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/img/prueba general2.png"
                        }
                        className="img-fluid "
                        alt="..."
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item " data-bs-interval="4000">
              <div className="container contenido-slider">
                <h3 className="letra text-center">Proyecto Final</h3>
                <div className="d-flex justify-content-center">
                  <img
                    src={process.env.PUBLIC_URL + "/img/final.png"}
                    alt="..."
                    width="1000"
                  ></img>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="8000">
              <div className="container contenido-slider">
                <h3 className="titulo-logo text-center">
                  Producido y desarrollado por
                </h3>
                <div className="d-flex justify-content-center">
                  <img
                    className="proyecto-final"
                    src={
                      process.env.PUBLIC_URL + "/img/nuestro logo blanco.svg"
                    }
                    alt="..."
                    width="300"
                  ></img>
                </div>
                <p className="creditos text-center">
                  Mónica Alejandra Gallardo - Ezequiel Alejandro Bustos -
                  Eduardo Castillo - Gabriel Pescio - Brenda Hipper
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    className="boton-a-inicio btn btn-outline-primary"
                    onClick={volverAInicio}
                  >
                    Volver a CQV
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselPresentacion"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselPresentacion"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};
