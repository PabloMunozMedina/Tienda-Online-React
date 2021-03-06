import React from 'react';

class Footer extends React.Component {
    render() {
      return <div>
                <div className="section_footer">
                    <div id="contact" className="footer">
                        <div className="container">
                            <div className="footer-box">
                                <div className="headinga">
                                    <h3>Address</h3>
                                    <span>Healing Center, 176 W Streetname,New York, NY 10014, US</span>
                                    <p>(+71) 8522369417
                                        <br/>demo@gmail.com</p>
                                </div>
                                <ul className="location_icon">
                                    <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li> <a href="#"><i className="fa fa-instagram"></i></a></li>

                                </ul>
                                <div className="menu-bottom">
                                    <ul className="link">
                                        <li> <a href="#">Home</a></li>
                                        <li> <a href="#">About</a></li>
                                        
                                        <li> <a href="#">Brand </a></li>
                                        <li> <a href="#">Specials  </a></li>
                                        <li> <a href="#"> Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="container">
                                <p>© 2019 All Rights Reserved. Design By<a href="https://html.design/"> Free Html Templates</a></p>
                            </div>
                        </div>
                    </div>
                    </div>       
            </div>
    }
}

export default Footer;