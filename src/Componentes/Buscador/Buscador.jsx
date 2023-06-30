import { ImSearch } from "react-icons/im";
import {useState} from "react"
import { useNavigate } from "react-router-dom";

export const Buscador = () => {
    const [searchText, setSearchText] = useState("");
    const navegate = useNavigate();

    const handLeSubmit =(e)=>{
        e.preventDefault()
        navegate(`/search/${searchText}`)
        setSearchText("")
    }
  return (
    <form className="d-flex mx-auto" id="buscador"  onSubmit={handLeSubmit}>
      <input value={searchText} onChange={(e=>setSearchText(e.target.value))} className="form-control me-2" type="search" placeholder="¿Con qué te querés enviciar hoy?" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">
        <ImSearch />
      </button>
    </form>
  );
};
