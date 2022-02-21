import React from 'react';
import { Link } from "react-router-dom";

class Cabecera extends React.Component {
    render() {
      return <div className="container">
               <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                        <div className="full">
                            <div className="center-desk">
                                <div className="logo">
                                    <a href="/"><img src="images/logo.png" alt="#"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                        <div className="menu-area">
                            <div className="limit-box">
                                <nav className="main-menu">
                                    <ul className="menu-area-main">
                                        <li className="active"><Link to="/">Home</Link> </li>
                                        <li> <Link to="carrito.html">Carrito</Link> </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
}

export default Cabecera;

                