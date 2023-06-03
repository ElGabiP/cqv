import { Miniatura } from "../../Componentes/Miniatura/Miniatura";
import "./Inicio.css";
import { objetoJuego } from "../../Componentes/Miniatura/objetoJuego";

export const Inicio = ()=>{
    return (
        <Miniatura objetoJuego={objetoJuego}/>
    )

}


