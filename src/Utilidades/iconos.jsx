import { FaXbox, FaWindows, FaApple } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { SiNintendo, SiApplearcade } from 'react-icons/si';

const iconos = [
    {
        id: 1,
        icono: <FaXbox key="1" />
    },
    {
        id: 4,
        icono: <FaWindows key="4" />
    },
    {
        id: 21,
        icono: <AiFillAndroid key="21" />
    },
    {
        id: 3,
        icono: <FaApple key="3" />
    },
    {
        id: 7,
        icono: <SiNintendo key="7" />
    },
    {
        id: 28,
        icono: <SiApplearcade key="28" />
    },
]

export const obtenerIconoPlataforma = (idIcono) => {
    const icono = iconos.find(icono => icono.id === idIcono) || '';
    return icono.icono;
}