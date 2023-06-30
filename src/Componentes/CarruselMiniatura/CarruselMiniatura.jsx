
import { useState } from "react";
import "./CarruselMiniatura.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { Miniatura } from "../Miniatura/Miniatura";

const obtenerNumeroDeMiniaturas = () => {
    if(window.innerWidth > '800'){
        return 6;
    }
    if(window.innerWidth > '600'){
        return 4;
    }
    return 2;
}

export const CarruselMiniatura = ({ listadoJuego, cantidadMiniaturas }) => {
    const [lista, setLista] = useState(listadoJuego);
    const [cantidad, setCantidad] = useState(obtenerNumeroDeMiniaturas());

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