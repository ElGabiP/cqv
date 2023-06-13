
import { useState } from "react";
import "./CarruselMiniatura.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Miniatura } from "../Miniatura/Miniatura";

export const CarruselMiniatura = ({ listadoJuego, cantidadMiniaturas }) => {
    const [lista, setLista] = useState(listadoJuego);
    const [cantidad, setCantidad] = useState(cantidadMiniaturas ?? 4);

    return (
        <>
            <Swiper
                slidesPerView={cantidad}
                spaceBetween={0}
                modules={[Autoplay]} 
                autoplay
                className="mySwiper"
            >
                {
                    lista && lista.map((juego, key) => (
                        <SwiperSlide key={key}>
                            <Miniatura objetoJuego={juego} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
}