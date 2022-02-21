import React from 'react';

class Carrito extends React.Component {
    constructor(props){
      super(props);
      if(localStorage['carrito']){
        this.carrito = JSON.parse(localStorage['carrito']);
      }else{
        this.carrito = []
      }
    
      this.state={
        carrito: this.carrito,
        cantidad: 1,
        precioTotal: 0,
      }
    }

    calcPrecio(){
      let precioTotal = 0;
      this.carrito.forEach(objeto => {
        precioTotal += objeto.precio * objeto.cantidad;
      });
      return precioTotal;
    }

    aumentCantidad(index){
      let objeto = this.carrito[index];
      objeto.cantidad++;
      this.setState({
        cantidad: objeto.cantidad,
      })
      this.calcPrecio()
      localStorage.setItem('carrito',JSON.stringify(this.carrito));
    }

    dismCantidad(index){
      let objeto = this.carrito[index];
      if (objeto.cantidad !==1) {
        objeto.cantidad--;
        this.setState({
          cantidad: objeto.cantidad,
        })
        this.calcPrecio()
        localStorage.setItem('carrito',JSON.stringify(this.carrito));
      } 
    }

    borrarProducto(index){
      this.setState({
        carrito: this.carrito.splice(index, 1)
      })
      localStorage.setItem('carrito',JSON.stringify(this.carrito));      
    }
    
    vaciarCarrito(){
      this.setState({
        carrito: this.carrito = []
      })
      localStorage.setItem('carrito',JSON.stringify(this.carrito));      
    }

    render(){
      const precioTotal = this.calcPrecio();
      const productos= this.carrito.map((objeto, index)=> {
      return(
          <tr className="cart_item" key={index}>              
            <td className="product-remove">
            <input id ="delete" type='button' onClick={()=>{this.borrarProducto(index)}} defaultValue="X"></input>
            </td>
            <td className="product-name">
            <span className="amount">{objeto.nombre}</span>
            </td>
            <td className="product-price">
                <span className="amount">{objeto.precio}</span>
            </td>
            <td className="product-quantity">
              <div className="buttons_added">
                <input type='button' onClick={()=>{this.dismCantidad(index)}} defaultValue="-" min={1}></input>
                <span className="amount">{objeto.cantidad}</span>
                <input type='button' onClick={()=>{this.aumentCantidad(index)}} defaultValue="+"></input>
              </div>
            </td>
            <td className="product-subtotal">
              <span className="amount">{objeto.cantidad * objeto.precio}</span>
          </td>
          </tr>
       )
      }); 
      return(
              <div>
                <table cellSpacing="0" className="shop_table cart">
                    <thead>
                        <tr>
                            <th className="product-remove">Delete</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th><input id='vaciar' type='button' onClick={()=>{this.vaciarCarrito()}} defaultValue="Vaciar Carrito"></input></th>
                        <th></th>
                        <th></th>
                        <th>Precio total</th>
                        <th>{precioTotal}</th>
                      </tr>
                    </tfoot>
                </table>
                
            </div>
      ) 
    }
}

export default Carrito;
