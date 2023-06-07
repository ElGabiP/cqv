import "./Logo.css";
import {ImSearch} from 'react-icons/im'
export const Logo = () => {
  return (
    <div className="contenedor">
      <div className="glass rotation sombra">
      </div>
      <div className="logo-y-lema">
        <div className="logo resplandor">
          <span>C</span>
          <ImSearch className="rotation lupa"/>
          <span>Q</span>
        </div>
      </div>
    </div>
  );
};
