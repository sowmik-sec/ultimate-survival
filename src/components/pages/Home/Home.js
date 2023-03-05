import React from "react";

const Home = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i0.wp.com/bushcraftbuddy.com/wp-content/uploads/2019/09/jungle-survival-stories-1024x574.jpg?resize=1024%2C574"
            className="w-full h-[90vh]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.leatherman.com/on/demandware.static/-/Library-Sites-leatherman-shared2020/default/dwee13070b/blog/prepared/7-essential-desert-survival-tips/Desert2-full.jpg"
            className="w-full h-[90vh]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i0.wp.com/cms.sofrep.com/wp-content/uploads/2014/10/529849_10150777319342112_27981195_n.jpg?fit=960%2C720&ssl=1"
            className="w-full h-[90vh]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i0.wp.com/bushcraftbuddy.com/wp-content/uploads/2019/02/Antarctica.jpg?resize=1024%2C683&ssl=1"
            className="w-full h-[90vh]"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
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

export default Home;
