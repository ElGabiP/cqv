import React, { useState, useEffect } from "react"
import "./Carrusel.css";

import { juegosApi } from "../../Utilidades/api";

export const Carrusel = () => {

  const [sliders, setSliders] = useState(null);

  useEffect(() => {
    if (sliders == null) {
      getSliders();
    }
  }, [])

  const getSliders = async () => {
    const results = [];
    await juegosApi('games', { page_size: 5 }).then(res => {
      const masBuscado = getDataAleatoria(res);
      results.push({ ...masBuscado, action: 'Más Buscado' });
    })
    await juegosApi('games', { page_size: 5, ordering: 'rating' }).then(res => {
      const mejorValorado = getDataAleatoria(res);
      results.push({ ...mejorValorado, action: 'Mejor Valorado' });
    });

    await juegosApi('games', { page_size: 5, ordering: 'rating' }).then(res => {
      const masNuevo = getDataAleatoria(res);
      results.push({ ...masNuevo, action: 'Más Nuevo' });
    });
    setSliders(results);
  }

  const getDataAleatoria = (data) => {
    return data[Math.floor(Math.random() * data.length)];
  }

  if (sliders != null && sliders.length > 0) {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          {
            sliders.map((slider, key) => (
              <div key={key} className={key === 1 ? 'carousel-item active' : 'carousel-item'}>
                <div class="carousel-caption">
                  <h5>{slider.name}</h5>
                  <p><button className="btn-carrusel">{slider.action}</button></p>
                </div>
                <img src={slider.background_image} alt={slider.name} />
              </div>
            ))
          }
        </div>
        <button button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  } else {
    return (
      <div className="cube-container">
        <div className="cube-loader">
          <div className="cube-top"></div>
          <div className="cube-wrapper">
            <span style={{ "--i": 0 }} className="cube-span"></span>
            <span style={{ "--i": 1 }} className="cube-span"></span>
            <span style={{ "--i": 2 }} className="cube-span"></span>
            <span style={{ "--i": 3 }} className="cube-span"></span>
          </div>
          <p>Cargando</p>
        </div>
      </div>
    )
  }
}
