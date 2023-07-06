import { useState } from 'react';
import "../iconos-dinamicos.css";
import "./Favorito.css";

import { FaStar } from 'react-icons/fa';

export const Favorito = ({ clickAction, seleccionado }) => {
    const [clickeado, setClickeado] = useState(seleccionado || false);
    const [clickeable, setClickeable] = useState(true);

    const favoritoAction = () => {
        const seGuardo = clickAction();
        if (seGuardo) {
            if (clickeado) {
                setClickeado(prevValue => !prevValue);
            } else {
                setClickeable(false);
                setClickeado(prevValue => !prevValue);
                setTimeout(() => {
                    setClickeable(true)
                }, 1200);
            }
        }
    }

    return (
        <div
            className={clickeado ? 'icono-wrapper favorito anim' : 'icono-wrapper favorito'}
            style={{ pointerEvents: clickeable ? '' : 'none' }}
        >
            <span className="icono" onClick={() => favoritoAction()}>
                <FaStar />
            </span>
            <div className="borde"><span></span></div>
            <div className="spark">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
            </div>
        </div>
    )
}
