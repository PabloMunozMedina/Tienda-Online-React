import React from 'react';
import Brands from './brands/brands';
import Slider from './slider/slider';
import About from './about/about';
import Contact from './contact/contact';

class Main extends React.Component {
    constructor(props){
      super(props);
      this.carrito = [];
    }

    anadirProducto(producto){
      if(localStorage['carrito']){
        this.carrito = JSON.parse(localStorage['carrito']);
        this.carrito.push(producto);
        localStorage.setItem('carrito',JSON.stringify(this.carrito));
      }else{
        this.carrito.push(producto);
        localStorage.setItem('carrito',JSON.stringify(this.carrito));
      }
    }
    
    render() {
      this.carrito = [];

      return <div id='main'>
          <Slider/>
          <Brands prodAnadidoCarrito={(producto)=>this.anadirProducto(producto)}/>
          <About/>
          <Contact/>

        </div>
    }
}

export default Main;
