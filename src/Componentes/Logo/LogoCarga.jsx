import { React } from "react";
import "./LogoCarga.css";
import { Logo } from "./Logo";

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
