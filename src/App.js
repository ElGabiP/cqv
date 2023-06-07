
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Inicio } from './Paginas/Inicio/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
      
export default App;
