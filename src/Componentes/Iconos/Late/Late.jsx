import { useState } from 'react';
import "../iconos-dinamicos.css";
import "./Late.css";

import { RiVipDiamondFill } from 'react-icons/ri';

export const Late = ({ clickAction, seleccionado }) => {
    const [clickeado, setClickeado] = useState(seleccionado || false);
    const [clickeable, setClickeable] = useState(true);

    const lateAction = () => {
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
            className={clickeado ? 'icono-wrapper late anim' : 'icono-wrapper late'}
            style={{ pointerEvents: clickeable ? '' : 'none' }}
        >
            <span className="icono" onClick={() => lateAction()}>
                <RiVipDiamondFill />
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
