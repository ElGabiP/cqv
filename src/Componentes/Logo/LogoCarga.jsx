import { React } from "react";
import "./LogoCarga.css";
import { Spinner } from "reactstrap";
import { Logo } from "./Logo";

export const LogoCarga = () => {
  return (
    <div className="contenedor-carga">
      <div className="LogoCarga">
        <span class="loader">
        </span>
        <div className="Logo">
        <Logo/>
        </div>
      </div>
    </div>
  );
};
