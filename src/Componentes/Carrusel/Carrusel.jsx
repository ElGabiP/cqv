import "./Carrusel.css";


export const Carrusel = ({ sliders }) => {

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
                <div class="carousel-caption">
                  <h5>{slider.name}</h5>
                  <p><button className="btn-carrusel">{slider.action}</button></p>
                </div>
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
  }
};