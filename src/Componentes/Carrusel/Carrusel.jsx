import { useNavigate } from 'react-router-dom';
import "./Carrusel.css";


export const Carrusel = ({ sliders }) => {

  const navigate = useNavigate();

  const verMas = (juegoId) => {
    navigate(`/juego/${juegoId}`);
  }

  if (sliders != null && sliders.length > 0) {
    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          {
            sliders.map((slider, key) => (
              <div key={key}
                className={key === 1 ? 'carousel-item active' : 'carousel-item'}
                style={{ backgroundImage: `url(${slider.background_image})` }}
              >
                <div className="title">{slider.name}</div>
                <div className="more">
                  <button className="more-btn" type="button" onClick={()=> verMas(slider.id)}>
                    <strong>VER MÁS</strong>
                    <div id="container-stars">
                      <div id="stars"></div>
                    </div>
                    <div id="glow">
                      <div className="circle"></div>
                      <div className="circle"></div>
                    </div>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  }
};