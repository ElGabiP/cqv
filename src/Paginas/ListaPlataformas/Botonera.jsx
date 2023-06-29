import { useState, useEffect } from "react";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { juegosApi } from "../../Utilidades/api";
import "./Botonera.css";

export const Botonera = ({ plataforma }) => {
  const [juegos, setJuegos] = useState(null);
  const [cargando, setCargando] = useState(null);

  const getJuegosPorPlataforma = async (plataformas) => {
    setCargando(true);
    await juegosApi("games", { platforms: plataformas }).then(async (res) => {
      if (res) {
        console.log(res);
        setJuegos(res);
        setCargando(false);
      }
    });
  };

  const [botonSeleccionado, setBotonSeleccionado] = useState(
    new Array(plataforma.length).fill(false)
  );

  const listaInicial = () => plataforma.length === 1 ? plataforma[0].id : null;
  console.log("%c<?>", "color: lightgreen; background: black");
  console.log(listaInicial());
  const [listaPlataformas, setListaPlataformas] = useState(listaInicial());

  const actualizarBotonera = (posicion) => {
    let textoLista = null;
    setJuegos(null);
    const actualizarBotonSeleccionado = botonSeleccionado.map((item, index) =>
      index === posicion ? !item : item
    );

    setBotonSeleccionado(actualizarBotonSeleccionado);

    const ListaIdsPlataformas = [];

    actualizarBotonSeleccionado.map((currentState, index) => {
      if (currentState) {
        ListaIdsPlataformas.push(plataforma[index].id);
      }
      textoLista = ListaIdsPlataformas.join(",");
      return textoLista;
    });

    setListaPlataformas(textoLista);
  };

  useEffect(() => {
    if (listaPlataformas !== null) {
      getJuegosPorPlataforma(listaPlataformas);
    }
  }, [listaPlataformas]);

  return (
    <div className="contenedor-botonera">
      {plataforma.length === 1 ? (
        <div>
          <h3>Tu lista de juegos</h3>
        </div>
      ) : (
        <>
          <div className="my-3">
            <h3>Elegí una plataforma</h3>
          </div>
          <div
            className={cargando ? "btn-group botonera row row-cols-auto g-2 position-sticky sticky-top justify-content-around botonera-oculta" : "btn-group botonera row row-cols-auto g-2 position-sticky sticky-top justify-content-around"}
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            {plataforma.map(({ name, id }, index) => {
              return (
                <div key={id}>
                  <div className="plataforma-list-item">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={botonSeleccionado[index]}
                      onChange={() => actualizarBotonera(index)}
                    />
                    <label
                      className="btn boton-plataforma btn-outline-secondary"
                      htmlFor={`custom-checkbox-${index}`}
                    >
                      {name}
                    </label>
                  </div>
                </div>
              );
            })}{" "}
          </div>
        </>
      )}

      {cargando ? (
        <LogoCarga />
      ) : (
        <div>
          <div className="plataforma-list-item row">
            <div className="my-3">
              <h5>Los 20 principales:</h5>
            </div>
            {juegos && juegos.length > 0
              ? juegos.map((juego, key) => (
                  <div className="col-6 col-sm-4 col-lg-3">
                    <Miniatura key={key} objetoJuego={juego} />
                  </div>
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};
