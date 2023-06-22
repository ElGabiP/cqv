import { FaXbox, FaWindows, FaApple } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { SiNintendo, SiApplearcade } from 'react-icons/si';

const iconos = [
    {
        id: 1,
        icono: <FaXbox />
    },
    {
        id: 4,
        icono: <FaWindows />
    },
    {
        id: 21,
        icono: <AiFillAndroid />
    },
    {
        id: 3,
        icono: <FaApple />
    },
    {
        id: 7,
        icono: <SiNintendo />
    },
    {
        id: 28,
        icono: <SiApplearcade />
    },
]

export const obtenerIconoPlataforma = (idIcono) => {
    const icono = iconos.find(icono => icono.id === idIcono) || '';
    return icono.icono;
}