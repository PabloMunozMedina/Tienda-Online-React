import React from 'react';

class Clients extends React.Component {
    render() {
      return <div id="">
                <div className="clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="titlepage">
                                  <h2>what say our clients</h2>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>    
                <div className="clients_red">
                    <div className="container">
                        <div id="testimonial_slider" className="carousel slide" data-ride="carousel">
                          {/* <!-- Indicators --> */}
                            <ul className="carousel-indicators">
                                <li data-target="#testimonial_slider" data-slide-to="0" className=""></li>
                                <li data-target="#testimonial_slider" data-slide-to="1" className="active"></li>
                                <li data-target="#testimonial_slider" data-slide-to="2" className=""></li>
                            </ul>
                          {/* <!-- The slideshow --> */}
                            <div className="carousel-inner">
                                <div className="carousel-item">
                                    <div className="testomonial_section">
                                        <div className="full center"></div>
                                            <div className="full testimonial_cont text_align_center cross_layout">
                                                <div className="cross_inner">
                                                    <h3>Due markes<br/><strong className="ornage_color">Rental</strong></h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                                                    <div className="full text_align_center margin_top_30">
                                                        <img src="icon/testimonial_qoute.png"/>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item active">
                                <div className="testomonial_section">
                                    <div className="full center"></div>
                                    <div className="full testimonial_cont text_align_center cross_layout">
                                        <div className="cross_inner">
                                            <h3>Due markes<br/><strong className="ornage_color">Rental</strong></h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                            </p>
                                            <div className="full text_align_center margin_top_30">
                                                <img src="icon/testimonial_qoute.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="testomonial_section">
                                    <div className="full center"></div>
                                        <div className="full testimonial_cont text_align_center cross_layout">
                                            <div className="cross_inner">
                                                <h3>Due markes<br/><strong className="ornage_color">Rental</strong></h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess
                                                </p>
                                                <div className="full text_align_center margin_top_30">
                                                    <img src="icon/testimonial_qoute.png"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    }
}

export default Clients;