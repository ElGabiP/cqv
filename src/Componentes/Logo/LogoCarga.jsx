import { Logo } from "./Logo";
import "./LogoCarga.css";


export const LogoCarga = () => {
  return (
    <div className="contenedor-carga">
      <div className="LogoCarga">
        <span className="loader">
        </span>
        <div className="Logo">
        <Logo/>
        </div>
      </div>
    </div>
  );
};
