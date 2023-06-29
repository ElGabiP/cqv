import { FaXbox, FaWindows, FaApple, FaLinux, FaGamepad, FaMouse } from 'react-icons/fa';
import { AiFillAndroid } from 'react-icons/ai';
import { SiNintendo, SiApplearcade, SiSega, SiPlaystation, SiCommodore, SiAtari } from 'react-icons/si';

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
        id: 6,
        icono: <FaLinux key="6" />
    },
    {
        id: 21,
        icono: <AiFillAndroid key="21" />
    },
    {
        id: 18,
        icono: <SiPlaystation key="18" />
    },
    {
        id: 3,
        icono: <FaApple key="3" />
    },
    {
        id: 55,
        icono: <FaApple key="55" />
    },
    {
        id: 166,
        icono: <SiCommodore key="166" />
    },
    {
        id: 23,
        icono: <SiAtari key="23" />
    },
    {
        id: 7,
        icono: <SiNintendo key="7" />
    },
    {
        id: 74,
        icono: <SiSega key="74" />
    },
    {
        id: 111,
        icono: <FaGamepad key="111" />
    },
    {
        id: 12,
        icono: <SiApplearcade key="12" />
    },
    {
        id: 171,
        icono: <FaMouse key="171" />
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