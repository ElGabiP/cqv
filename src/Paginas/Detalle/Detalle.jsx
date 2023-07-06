import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./Detalle.css";

import { juegosApi, traductorApi } from '../../Utilidades/api';
import { LogoCarga } from '../../Componentes/Logo/LogoCarga';
import { obtenerIconoPlataforma } from '../../Utilidades/iconos';
import { FaChevronLeft } from 'react-icons/fa';
import { MeGusta } from '../../Componentes/Iconos/MeGusta/MeGusta';
import { Favorito } from '../../Componentes/Iconos/Favorito/Favorito';
import { Late } from '../../Componentes/Iconos/Late/Late';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
import { LATE, FAVORITO, MEGUSTA, borrarPreferencia, guardarPreferencia, obtenerIdDocDelLocalStorage } from '../../Utilidades/administrador-preferencias';
import { Modal } from '../../Componentes/Modal/Modal';

export const DetalleJuego = () => {

    const [juego, setJuego] = useState(null);
    const [cargando, setCargando] = useState(null);
    const [megusta, setMegusta] = useState(false);
    const [favorito, setFavorito] = useState(false);
    const [late, setLate] = useState(false);
    const [authUser, setAuthUser] = useState(null);
    const [show, setShow] = useState(false);

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
                actualizarReaciones(res);
            }
        });
    }

    const actualizarReaciones = (res) => {
        [MEGUSTA, FAVORITO, LATE].map(reaccion => {
            if (localStorage.getItem(reaccion) !== null) {
                JSON.parse(localStorage.getItem(reaccion)).map(reac => {
                    if (reac.juego && reac.juego.id === res.id) {
                        if (reaccion === "megusta") {
                            setMegusta(reac.juego.id === res.id);
                        }
                        if (reaccion === "favorito") {
                            setFavorito(reac.juego.id === res.id);
                        }
                        if (reaccion === "late") {
                            setLate(reac.juego.id === res.id);
                        }
                    }
                })
            }
        })
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
        if (authUser) {
            const estadoAnterior = favorito;
            if (juego && !estadoAnterior) {
                guardarPreferencia(FAVORITO, {
                    id: juego.id,
                    name: juego.name,
                    background_image: juego.background_image
                }, authUser.email)
            } else {
                const juegoGuardado = obtenerIdDocDelLocalStorage(FAVORITO, juego.id);
                if (juegoGuardado) {
                    borrarPreferencia(FAVORITO, juegoGuardado.id)
                }
            }
            setFavorito(!estadoAnterior);
            return true;
        } else {
            setShow(true);
            return false;
        }
    }

    const onMeGusta = () => {
        if (authUser) {
            const estadoAnterior = megusta;
            if (juego && !estadoAnterior) {
                guardarPreferencia(MEGUSTA, {
                    id: juego.id,
                    name: juego.name,
                    background_image: juego.background_image
                }, authUser.email)
            } else {
                const juegoGuardado = obtenerIdDocDelLocalStorage(MEGUSTA, juego.id);
                if (juegoGuardado) {
                    borrarPreferencia(MEGUSTA, juegoGuardado.id)
                }
            }
            setMegusta(!estadoAnterior);
            return true;
        } else {
            setShow(true);
            return false;
        }
    }

    const onLate = () => {
        if (authUser) {
            const estadoAnterior = late;
            if (juego && !estadoAnterior) {
                guardarPreferencia(LATE, {
                    id: juego.id,
                    name: juego.name,
                    background_image: juego.background_image
                }, authUser.email)
            } else {
                const juegoGuardado = obtenerIdDocDelLocalStorage(LATE, juego.id);
                if (juegoGuardado) {
                    borrarPreferencia(LATE, juegoGuardado.id)
                }
            }
            setLate(!estadoAnterior);
            return true;
        } else {
            setShow(true);
            return false;
        }
    }

    useEffect(() => {
        if (cargando === null) {
            getJuego();
        }
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            }
        })

    }, [cargando])

    if (juego && Object.keys(juego).length > 0) {
        return (
            <div className='detalle'>
                <div className="header">
                    <div className="navegacion">
                        <FaChevronLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="interaccion">
                        <MeGusta clickAction={onMeGusta} seleccionado={megusta} />
                        <Favorito clickAction={onFavorito} seleccionado={favorito} />
                        <Late clickAction={onLate} seleccionado={late} />
                    </div>
                </div>
                <div className='description'>
                    <img alt={"Imagen del juego " + juego.name} src={juego.background_image ? juego.background_image : `${process.env.PUBLIC_URL}/img/bati-profe.jpg`} />
                    <div className="iconos-plataformas">
                        {obtenerPlataformas(juego.platforms)}
                    </div>
                    <h1>{juego.name}</h1>
                    <p>{juego.descripcion}</p>

                </div>
                <Modal title="Upps...!" onClose={() => setShow(false)} show={show}>
                    <p>Debes loguearte para guardar tus preferencias</p>
                </Modal>
            </div >
        );
    } else {
        return (
            <LogoCarga />
        )
    }
}
