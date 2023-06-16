import "./Inicio.css";
import {Carrusel} from "../../Componentes/Carrusel/Carrusel";
import { useState, useEffect } from "react";
import { juegosApi } from "../../Utilidades/api";
import { CarruselMiniatura } from "../../Componentes/CarruselMiniatura/CarruselMiniatura";

export const Inicio = () => {

    const [masBuscados, setMasBuscados] = useState([]);
    const [valorados, setValorados] = useState([]);
    const [nuevos, setNuevos] = useState([]);

    const getJuegos = async () => {
        /* Se llena la lista con los mas buscados */
        const data1 = await juegosApi('games', { page_size: 8 });
        setMasBuscados(data1);

        /* Ahora buscamos los mejor valorados */
        const data2 = await juegosApi('games', { page_size: 8, ordering:'rating' });
        setValorados(data2);

        /* Finalmente llenamos la lista de los mas nuevos */
        const data3 = await juegosApi('games', { page_size: 8, ordering:'created' });
        setNuevos(data3);  
        
    }

    useEffect(() => {
        if (masBuscados && masBuscados.length === 0) {
            getJuegos();
        }
    }, [masBuscados])

    return (
        <> 
        <Carrusel/>
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


