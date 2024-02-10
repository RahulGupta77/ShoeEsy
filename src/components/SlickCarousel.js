import React from "react";
import Slider from "react-slick";

const SlickCarousel = ({ elements, height, isImage }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
    autoplay: true,
    pauseOnHover: false,
    slickGoTo: true,
    draggable: false,
    dotsClass: "slick-dots",
    appendDots: (dots) => (
      <div
        style={{
          marginBottom: "35px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Slider {...settings} className="m-0">
      {isImage ? (
        elements.map((element, id) => {
          return (
            <div key={id} className={"overflow-hidden " + height}>
              <img
                src={element}
                alt={id}
                className="h-full w-full object-cover"
              />
            </div>
          );
        })
      ) : (
        <>
          <div className="bg-blue-200 h-[30vh] w-[30vw] flex justify-center items-center">
            <h3>1</h3>
          </div>
          <div className="bg-red-200 h-[30vh] w-[30vw]  flex justify-center items-center">
            <h3>2</h3>
          </div>
        </>
      )}
    </Slider>
  );
};

export default SlickCarousel;
