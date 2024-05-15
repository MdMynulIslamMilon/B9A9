import React from 'react';
import Navbar from "../Navbar/Navbar";
const Banner = () => {
  return (
    <div className=''>
      <div className=''>
        <Navbar></Navbar>
      </div>
      <div className="carousel ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/S61qnYH/slider-1.jpg"
            className="w-full h-[650px] "
          />
          {/* <div className=''><h1>This is our property</h1></div> */}
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
            className=" mx-auto lg:w-[600px] h-72 "
          />
          <div className="absolute flex  justify-evenly  transform translate-y-24 left-5 right-5 top-1/2]">
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
            src="https://i.ibb.co/r4WdL30/slider-3.jpg"
            className=" mx-auto lg:w-[600px] h-72"
          />
          <div className="absolute flex  justify-evenly  transform translate-y-24 left-5 right-5 top-1/2]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;