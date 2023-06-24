import "./Inicio.css";
import { Carrusel } from "../../Componentes/Carrusel/Carrusel";
import { useState, useEffect } from "react";
import { juegosApi } from "../../Utilidades/api";
import { CarruselMiniatura } from "../../Componentes/CarruselMiniatura/CarruselMiniatura";
import { LogoCarga } from "../../Componentes/Logo/LogoCarga";

export const Inicio = () => {

    const [masBuscados, setMasBuscados] = useState([]);
    const [valorados, setValorados] = useState([]);
    const [nuevos, setNuevos] = useState([]);
    const [sliders, setSliders] = useState(null);
    const [cargando, setCargando] = useState(true);

    const getJuegos = async () => {
        const sliderRes = [];

        /* Primero se consulta si existe en el sessionStorage */
        let data1 = JSON.parse(sessionStorage.getItem('masBuscados'));
        if (!data1) {
            /* Si no existe entonces lo vamos a buscar a la API */
            data1 = await juegosApi('games', { page_size: 8 });
            /* Una vez tenemos el resultado lo guardamos en el sessionStorage */
            sessionStorage.setItem('masBuscados', JSON.stringify(data1));
        }
        /* Ahora lo guardamos en la variable, notese que independientemente de
        /* si se consigue la data en el sessionStorage o en la api, el resultado 
        /* siempre lo pasamos a la variable
        */
        setMasBuscados(data1);
        sliderRes.push({ ...getDataAleatoria(data1), action: 'Más Buscado' });

        /* Ahora buscamos los mejor valorados */
        let data2 = JSON.parse(sessionStorage.getItem('mejorValorados'));
        if (!data2) {
            data2 = await juegosApi('games', { page_size: 8, ordering: 'rating' });
            sessionStorage.setItem('mejorValorados', JSON.stringify(data2));
        }
        setValorados(data2);
        sliderRes.push({ ...getDataAleatoria(data2), action: 'Mejor Valorado' });

        /* Finalmente llenamos la lista de los mas nuevos */
        let data3 = JSON.parse(sessionStorage.getItem('masNuevos'));
        if (!data3) {
            data3 = await juegosApi('games', { page_size: 8, ordering: 'created' });
            sessionStorage.setItem('masNuevos', JSON.stringify(data3));
        }
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
        return (
            <LogoCarga />
        )
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


