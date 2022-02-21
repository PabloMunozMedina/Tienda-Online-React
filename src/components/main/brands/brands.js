import React from 'react';
import producto from './producto';
// import db from '../../../../firebase';
// import {collection, doc, onSnapshot} from 'firebase/firestore'
class Brands extends React.Component {

    comprobarEstado(objeto) { // Para mostrar detalles de los productos
        const div = document.getElementById(objeto.id)
        if (objeto.estilo === "detallesOff") {
            objeto.estilo = "detallesOn";
            return div.className = objeto.estilo;

        }
        else {
            objeto.estilo = "detallesOn";
            objeto.estilo = "detallesOff"
            return div.className = objeto.estilo;

        }
    }

    
    render(){
        // const productos = onSnapshot(collection(db, "productos"), (objeto) => {
        //     console.log("Current data: ", objeto.data());
        // });

        const productos= producto.map((objeto, index)=> {
            return(
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin" key={index}>
                    <div className="brand_box">
                        <img src={objeto.imagen} alt="img" />
                        <h3>$<strong className="red">{objeto.precio}</strong></h3>
                        <span>{objeto.nombre}</span>
                        <i><img src="images/star.png" alt='1 estrella'/></i>
                        <i><img src="images/star.png" alt='1 estrella'/></i>
                        <i><img src="images/star.png" alt='1 estrella'/></i>
                        <i><img src="images/star.png" alt='1 estrella'/></i><br/><br/>
                        <button onClick={() => this.comprobarEstado(objeto)}>Detalles</button> &nbsp;&nbsp;&nbsp;
                        <button id="agregar" onClick={()=> this.props.prodAnadidoCarrito(objeto)}>Agregar Carrito</button>
                        <div id={objeto.id} className={objeto.estilo}>
                        <p>
                        Nombre: {objeto.nombre}<br/>
                        Descripcion: {objeto.descripcion}<br/>
                        Precio: {objeto.precio}$<br/>
                        </p><br/>
                        </div>

                    </div>
                </div>
            )
        });  
        return <div id="">
               <div className="brand">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-12">
                              <div className="titlepage">
                                  <h2>Our Brand</h2>
                              </div>
                          </div>
                      </div>
                </div>
                <div className="brand-bg">
                    <div className="container">
                        <div className="row">
                            {productos}
                        </div>
                    </div>
                </div>
              </div>
            </div>
    }
}

export default Brands;