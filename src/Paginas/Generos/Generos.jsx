import { useState, useEffect } from "react";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";
import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import { juegosApi } from "../../Utilidades/api";
import "./Generos.css"

export const Generos = () => {

  const [generos, setGeneros] = useState(null);
  const [cargando, setCargando] = useState(null);

  useEffect(() => {
    if (generos === null) {
      getGeneros();
    }
  }, [cargando])

  const getGeneros = async () => {
    setCargando(true);
    await juegosApi('genres').then(async res => {
      if (res) {
        const resultadoModificado = res.map(genero => ({ ...genero, background_image: genero.image_background }))
        setGeneros(resultadoModificado);
        setCargando(false);
      }
    })
  }

  if (cargando) {
    return (<LogoCarga />)
  } else {
    return (
      <div className="container-fluid pt-3">
        <div className="row">
          <h1 className="blacklime text-center">Géneros</h1>
          {
            generos && generos.length > 0 ?
              generos.map((genero, key) => (
                <div className="col-6 col-sm-4 col-lg-3 scale-in-center" style={{ animationDelay: `0.${1 + key}s` }}>
                  <Miniatura key={key} objetoJuego={genero} enlaceDetalle={`/detallegenero/${genero.name}/${genero.id}`} />
                </div>
              ))
              : ''
          }
        </div>
      </div>
    )
  }


};
