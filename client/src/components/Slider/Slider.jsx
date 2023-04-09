import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import sliderPhoto from "../../assets/images/slider.svg";

function Sliders() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "#E9E9E9",
          borderRadius: "10px",
          // padding: "10px"
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="sliders">
      <Slider {...settings}>
        <img className="sliderPhoto" src={sliderPhoto} alt="SliderPhoto" />
        <img className="sliderPhoto" src={sliderPhoto} alt="SliderPhoto" />
        <img className="sliderPhoto" src={sliderPhoto} alt="SliderPhoto" />
        <img className="sliderPhoto" src={sliderPhoto} alt="SliderPhoto" />
      </Slider>
    </div>
  );
}

export default Sliders;
