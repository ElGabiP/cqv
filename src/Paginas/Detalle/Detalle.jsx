import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Detalle.css";

import { juegosApi, traductorApi } from '../../Utilidades/api';
import { LogoCarga } from '../../Componentes/Logo/LogoCarga';
import { obtenerIconoPlataforma } from '../../Utilidades/iconos';
import { FaChevronLeft } from 'react-icons/fa';
import { BsFillHandThumbsUpFill, BsHandThumbsUp, BsStarFill, BsStar } from 'react-icons/bs';
import { MeGusta } from '../../Componentes/Iconos/MeGusta/MeGusta';
import { Favorito } from '../../Componentes/Iconos/Favorito/Favorito';

export const DetalleJuego = () => {

    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(null);
    const [megusta, setMegusta] = useState(false);
    const [favorito, setFavorito] = useState(false);

    const navigate = useNavigate();
    const { juegoId } = useParams();

    const getJuego = async () => {
        setCargando(true);
        await juegosApi(`games/${juegoId}`).then(async res => {
            if (res) {
                const description_raw = res['description_raw']
                    .replace(/\n/g, '')
                    .replace(/\r/g, '')
                    .split(".", 4)
                    .join(',');
                const descripcion = await traductorApi(description_raw);
                setJuego({ ...res, descripcion });
                setCargando(juego && juego.length > 0);
            }
        });
    }

    const obtenerPlataformas = (plataformas) => {
        const iconosPlataformas = [];
        plataformas.map(plataforma => {
            const icono = obtenerIconoPlataforma(plataforma.platform.id);
            if (icono) {
                iconosPlataformas.push(icono);
            }
        })
        return iconosPlataformas;
    }

    const onFavorito = () => {
        setFavorito(prevFavorito => !prevFavorito);
        console.log("favorito ", favorito);
    }

    const onMeGusta = () => {
        setMegusta(prevState => !prevState);
        console.log("me gusta ", megusta);
    }

    useEffect(() => {
        if (cargando === null) {
            getJuego();
        }
    }, [cargando])

    if (juego && Object.keys(juego).length > 0) {
        return (
            <div className='detalle'>
                <div className="header">
                    <div className="navegacion">
                        <FaChevronLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="interaccion">
                        <MeGusta onClick={() => onMeGusta()} />
                        <Favorito onClick={() => onFavorito()} />
                    </div>
                </div>
                <div className='description'>
                    <img src={juego.background_image} />
                    <div className="iconos-plataformas">
                        {obtenerPlataformas(juego.platforms)}
                    </div>
                    <h1>{juego.name}</h1>
                    <p>{juego.descripcion}</p>

                </div>
            </div >
        );
    } else {
        return (
            <LogoCarga />
        )
    }
}
