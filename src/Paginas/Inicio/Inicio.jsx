import "./Inicio.css";
import { Carrusel } from "../../Componentes/Carrusel/Carrusel";
import { useState, useEffect } from "react";
import { juegosApi } from "../../Utilidades/api";
import { CarruselMiniatura } from "../../Componentes/CarruselMiniatura/CarruselMiniatura";

export const Inicio = () => {

    const [masBuscados, setMasBuscados] = useState([]);
    const [valorados, setValorados] = useState([]);
    const [nuevos, setNuevos] = useState([]);
    const [sliders, setSliders] = useState(null);
    const [cargando, setCargando] = useState(true);

    const getJuegos = async () => {
        const sliderRes = [];

        /* Se llena la lista con los mas buscados */
        const data1 = await juegosApi('games', { page_size: 8 });
        setMasBuscados(data1);
        sliderRes.push({ ...getDataAleatoria(data1), action: 'Más Buscado' });

        /* Ahora buscamos los mejor valorados */
        const data2 = await juegosApi('games', { page_size: 8, ordering: 'rating' });
        setValorados(data2);
        sliderRes.push({ ...getDataAleatoria(data2), action: 'Mejor Valorado' });

        /* Finalmente llenamos la lista de los mas nuevos */
        const data3 = await juegosApi('games', { page_size: 8, ordering: 'created' });
        setNuevos(data3);
        sliderRes.push({ ...getDataAleatoria(data3), action: 'Más Nuevo' });
        setSliders(sliderRes);
        setCargando(sliders && masBuscados.length > 0 && valorados.length > 0 && nuevos.length > 0);
    }

    useEffect(() => {
        if (masBuscados && masBuscados.length === 0) {
            getJuegos();
        }
    }, [masBuscados])

    const getDataAleatoria = (data) => {
        return data[Math.floor(Math.random() * data.length)];
    }

    if (cargando) {
        return (<h1>Cargando</h1>)
    } else {
        return (
            <>
                <Carrusel sliders={sliders} />
                {/* Los más buscados */
                    masBuscados.length > 0 ?
                        <>
                            <h2>Los más buscados</h2>
                            < CarruselMiniatura listadoJuego={masBuscados} />
                        </> : ''
                }
                {/* Mejor valorados */
                    valorados.length > 0 ?
                        <>
                            <h2>Mejor valorados</h2>
                            < CarruselMiniatura listadoJuego={valorados} />
                        </> : ''
                }
                {/* Nuevos */
                    nuevos.length > 0 ?
                        <>
                            <h2>Nuevos</h2>
                            < CarruselMiniatura listadoJuego={nuevos} />
                        </> : ''
                }
            </>
        )
    }
}


