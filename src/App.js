import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Cabecera from './components/header/cabecera';
import Carrito from "./components/carrito/carrito";
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <div className="agrupar">
        <Cabecera id="header"></Cabecera> 
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/carrito.html" element={<Carrito />}/>
        </Routes>
        <Footer id="footer"></Footer>
      </div>
      
    </div>
  );
}

export default App;
