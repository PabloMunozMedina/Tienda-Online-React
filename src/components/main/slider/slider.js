import React from 'react';

class Slider extends React.Component {
    render() {
      return <div id="slider">
               <section className="slider_section">
                  <div id="myCarousel" className="carousel slide banner-main" data-ride="carousel">
                    <div className="carousel-inner">
                          <div className="carousel-item active"> 
                            <img className="first-slide" src="images/banner.jpg" alt="First slide"/>
                              <div className="container">
                                  <div className="carousel-caption relative">
                                    <span>All New Phones </span>
                                    <h1>up to 25% Flat Sale</h1>
                                    <p>It is a long established fact that a reader will be distracted by the readable content
                                    <br/> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                    <a className="buynow" href="#">Buy Now</a>
                                    <ul className="social_icon">
                                      <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                      <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                            <img className="second-slide" src="images/banner.jpg" alt="Second slide"/>
                              <div className="container">
                                <div className="carousel-caption relative">
                                  <span>All New Phones </span>
                                  <h1>up to 25% Flat Sale</h1>
                                  <p>It is a long established fact that a reader will be distracted by the readable content
                                  <br/> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                  <a className="buynow" href="#">Buy Now</a>
                                  <ul className="social_icon">
                                      <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                      <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                  </ul>
                                </div>
                              </div>
                          </div>
                          <div className="carousel-item">
                            <img className="third-slide" src="images/banner.jpg" alt="Third slide"/>
                            <div className="container">
                              <div className="carousel-caption relative">
                                <span>All New Phones </span>
                                <h1>up to 25% Flat Sale</h1>
                                <p>It is a long established fact that a reader will be distracted by the readable content
                                <br/> of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                                <a className="buynow" href="#">Buy Now</a>
                                <ul className="social_icon">
                                  <li> <a href="#"><i className="fa fa-facebook-f"></i></a></li>
                                  <li> <a href="#"><i className="fa fa-twitter"></i></a></li>
                                  <li> <a href="#"><i className="fa fa-instagram"></i></a></li>
                                </ul>
                              </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <i className='fa fa-angle-left'></i>
                    </a>
                    <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <i className='fa fa-angle-right'></i>
                    </a>
                  </div>
                </section>
            </div>
    }
}

export default Slider;   