import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Componentes/Header/Header";
import { Inicio } from "./Paginas/Inicio/Inicio";
import { Generos } from "./Paginas/Generos/Generos";
import { DetalleJuego } from "./Paginas/Detalle/Detalle";
import {Login} from "./Paginas/Login/Login";
import { Signup } from "./Paginas/Signup/Signup";
import { Perfil } from "./Paginas/PerfilUsuario/Perfil";
import { Plataformas } from "./Paginas/Plataformas/Plataformas";
import { ListaPorPlataformas } from "./Paginas/ListaPlataformas/ListaPorPlataformas";
import { DetalleGenero } from "./Paginas/Generos/DetalleGenero";
import { Search } from "./Paginas/Search/Search";
import { Presentacion } from "./Paginas/Presentacion/Presentacion";
import { NoEncontrado } from "./Paginas/NoEncontrado/NoEncontrado";
import { Guardados } from "./Paginas/Guardados/Guardados";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/generos" element={<Generos/>}></Route>
        <Route path="/juego/:juegoId" element={<DetalleJuego/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/perfilusuario" element={<Perfil/>}></Route>
        <Route path="/plataformas" element={<Plataformas/>}></Route>
        <Route path="/detallegenero/:nombregenero/:generoId" element={<DetalleGenero/>}></Route>
        <Route path="/search/:searchText" element={<Search/>}></Route>
        <Route path="/plataformas/:plataformasId" element={<ListaPorPlataformas/>}></Route>
        <Route path="/presentaciong7" element={<Presentacion/>}></Route>
        <Route path="*" element={<NoEncontrado />} />
        <Route path="/guardados/:collection" element={<Guardados/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
