import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export const NavbarMenyu = () => {
  const sliderRef = useRef();

  //   const items = [
  //     "Aksiya 2+1",
  //     "Maxi BOX",
  //     "Klab Sendvich",
  //     "Lavash",
  //     "Shaurma",
  //     "Panini",
  //     "Burger",
  //     "Donar Kebab",
  //     "Hot Dog",
  //     "Gazaklar",
  //     "Tamaddilar",
  //     "Desertlar",
  //     "Ichimliklar",
  //     "Souslar",
  //   ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="mt-16 h-[80px] relative">
        <Slider
          {...settings}
          ref={sliderRef}
          className=" px-9 relative bottom-6"
        >
          {/* 
          {items.map((item, index) => (
            <div key={index} className="relative left-7">
              <NavLink to="/" className="text-black">
                <button className="hover:bg-gray-200 hover:text-gray-800 transition duration-300 ease-in-out">
                  {item}
                </button>
              </NavLink>
            </div>
          ))} */}
          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Aksiya 2+1</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Maxi BOX</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Klab Sendvich</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Lavash</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Shaurma</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Panini</NavLink>
          </button>

          <button className="mx-3 p-3 relative active:focus:bg-purple-200 right-4 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Burger</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Donar Kebab</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Hot Dog</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Gazaklar</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Tamaddilar</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Desertlar</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Souslar</NavLink>
          </button>

          <button className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10">
            <NavLink to="/">Tamaddilar</NavLink>
          </button>
        </Slider>
        <button
          className="absolute bottom-[52px] transform -translate-y-1/2 rounded-full text-black focus:outline-none"
          onClick={goToPrev}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <button
          className="absolute bottom-[52px] right-1 transform -translate-y-1/2 rounded-full text-black focus:outline-none"
          onClick={goToNext}
        >
          <NavigateNextIcon />
        </button>
      </div>
    </>
  );
};
