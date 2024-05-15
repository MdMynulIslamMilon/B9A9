import React from 'react';
const Banner = () => {
  return (
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/S61qnYH/slider-1.jpg"
            className="w-full h-[650px] "
          />
          
          <div className="absolute flex  justify-between  transform translate-y-72 left-5 right-5 top-1/2]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/n8fQGND/slider-2.jpg"
            className="w-full h-[650px] "
          />
          
          <div className="absolute flex  justify-between  transform translate-y-72 left-5 right-5 top-1/2]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/K0PDbQ2/office.jpg"
            className="w-full h-[650px] "
          />
          
          <div className="absolute flex  justify-between  transform translate-y-72 left-5 right-5 top-1/2]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
      </div>
  );
};

export default Banner;