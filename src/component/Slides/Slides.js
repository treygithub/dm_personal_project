import React, { Component } from "react";
import Slider from "react-slick";
import "./Slides.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slides extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    };
    return (
      <Slider {...settings} className="slidesWrapper">
        <div>
          <img
            className="slides"
            src="https://images.unsplash.com/photo-1493398961404-f06dd2f81108?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7866028f76bbf75ba18ee00babfd06d8&auto=format&fit=crop&w=755&q=80"
            alt="slide1"
          />
        </div>
        <div>
          <img
            className="slides"
            src="https://images.unsplash.com/photo-1519752594763-2633d8d4ea29?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc3cdb12920c4ba2ec6eb4abdddf38f2&auto=format&fit=crop&w=1500&q=80"
            alt="slide2"
          />
        </div>
        <div>
          <img
            className="slides"
            src="https://images.unsplash.com/photo-1511407401960-0ee203836665?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4e25c12cfc64718e9ae704520a370887&auto=format&fit=crop&w=667&q=80"
            alt="slide3"
          />
        </div>
      </Slider>
    );
  }
}

export default Slides;
