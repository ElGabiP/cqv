import { useState } from 'react'
import "../iconos-dinamicos.css";
import "./Me-gusta.css";
import { FaThumbsUp } from "react-icons/fa";
export const MeGusta = () => {

    const [clickeado, setClickeado] = useState(false);
    const [clickeable, setClickeable] = useState(true);

    const meGustaAction = () => {
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

    return (
        <div
            className={clickeado ? 'icono-wrapper like anim' : 'icono-wrapper like'}
            style={{ pointerEvents: clickeable ? '' : 'none' }}
        >
            <span className="icono" onClick={() => meGustaAction()}>
                <FaThumbsUp />
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
