import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { FifthFood, FirstFood, FourthFood, SecondFood, SixFood, ThirdFood } from "./MenyuFoods/index";

export const NavbarMenyu = () => {
  const sliderRef = useRef();
  const [counter, setCounter] = useState(1);

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
      <div className="sticky top-0 z-index bg-white">
        <div className="items-center justify-between pt-10">
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

            <button
              className="mx-3 p-3 hover:text-purple-900 relative right-2 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(1)}
            >
              <div className="flex">
                <div className="flex space-x-1">
                  <RestaurantOutlinedIcon className="text-red-500 top-[2px] relative p-[2px]" />
                  <RamenDiningOutlinedIcon className="text-orange-500 top-[2px] relative p-[2px]" />
                </div>

                <NavLink to="/">Maxi BOX</NavLink>
              </div>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(2)}
            >
              <NavLink to="/">Klab Sendvich</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(3)}
            >
              <NavLink to="/">Lavash</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(4)}
            >
              <NavLink to="/">Shaurma</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(5)}
            >
              <NavLink to="/">Panini</NavLink>
            </button>

            <button
              className="mx-3 p-3 relative active:focus:bg-purple-200 right-4 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(6)}
            >
              <NavLink to="/">Burger</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(7)}
            >
              <NavLink to="/">Donar Kebab</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(8)}
            >
              <NavLink to="/">Hot Dog</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(9)}
            >
              <NavLink to="/">Gazaklar</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(10)}
            >
              <NavLink to="/">Tamaddilar</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(11)}
            >
              <NavLink to="/">Desertlar</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(12)}
            >
              <NavLink to="/">Souslar</NavLink>
            </button>

            <button
              className="mx-3 p-3 hover:text-purple-900 font-semibold text-[18px] h-[6px] rounded-xl hover:bg-purple-200 pb-10"
              onClick={() => setCounter(13)}
            >
              <NavLink to="/">Tamaddilar</NavLink>
            </button>
          </Slider>
          <button
            className="absolute bottom-[24px] transform -translate-y-1/2 rounded-full text-black focus:outline-none"
            onClick={goToPrev}
          >
            <KeyboardArrowLeftIcon />
          </button>
          <button
            className="absolute bottom-[24px] right-1 transform -translate-y-1/2 rounded-full text-black focus:outline-none"
            onClick={goToNext}
          >
            <NavigateNextIcon />
          </button>
        </div>
      </div>

      <div>{counter === 1 && <FirstFood />}</div>
      <div>{counter === 2 && <SecondFood />}</div>
      <div>{counter === 3 && <ThirdFood />}</div>
      <div>{counter === 4 && <FourthFood />}</div>
      <div>{counter === 5 && <FifthFood />}</div>
      <div>{counter === 6 && <SixFood />}</div>
    </>
  );
};
