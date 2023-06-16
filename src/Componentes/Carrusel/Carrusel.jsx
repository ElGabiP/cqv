import React from "react"
import "./Carrusel.css";


export const Carrusel = ({sliders}) => {

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
