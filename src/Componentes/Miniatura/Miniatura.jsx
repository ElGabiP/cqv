import { useEffect, useState } from "react"
import "./Miniatura.css"



export const Miniatura = ({objetoJuego})=>{
    const[juego, setJuego] = useState(objetoJuego)
   
    
    return (
        <div key={juego.id} className="contenedor_miniatura">
            <img src={juego.background_image_additional} alt={juego.name} />
            <h3>{juego.name}</h3>
        </div>
    )
}