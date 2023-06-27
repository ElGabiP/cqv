import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Componentes/Header/Header";
import { Inicio } from "./Paginas/Inicio/Inicio";
import { Generos } from "./Paginas/Generos/Generos";
import { DetalleJuego } from "./Paginas/Detalle/Detalle";
import {Login} from "./Paginas/Login/Login";
import {Plataformas} from "./Paginas/Plataformas/Plataformas";
import { DetalleGenero } from "./Paginas/Generos/DetalleGenero";
import { Search } from "./Paginas/Search/Search";
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
        <Route path="/plataformas" element={<Plataformas/>}></Route>
        <Route path="/detallegenero/:nombregenero/:generoId" element={<DetalleGenero/>}></Route>
        <Route path="/search/:searchText" element={<Search/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
