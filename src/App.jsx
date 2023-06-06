
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Header} from "./Componentes/Header/Header";
import { Inicio } from './Paginas/Inicio/Inicio';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
      
export default App;
