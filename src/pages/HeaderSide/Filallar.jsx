import React, { useState } from "react";
import { Ruyhat, Mapping } from "./index";
import { NavLink } from "react-router-dom/dist";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Filallar = () => {

   const instagramLink = "https://www.instagram.com/maxwayuz/";

   const handleClick = () => {
     window.location.href = instagramLink;
   };

  const [count, setCount] = useState(1);
  return (
    <>
      <div className="relative bottom-24 md:top-2">
        <div className="md:w-[1200px] w-[345px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="md:flex justify-between md:mt-14 mt-10">
          <h1 className="font-bold md:text-4xl text-3xl">Filiallar</h1>

          <div className="space-x-5 md:block flex md:bottom-8 relative top-4">
            <button
              className="w-[170px] h-[50px] hover:text-white text-slate-700 shadow-lg bg-gray-100 rounded-[50px] hover:bg-purple-900 text-xl"
              onClick={() => setCount(1)}
            >
              Ro'yhat
            </button>
            <button
              className="w-[170px] h-[50px] hover:text-white text-slate-700 shadow-lg bg-gray-100 rounded-[50px] hover:bg-purple-900 text-xl"
              onClick={() => setCount(2)}
            >
              Xarita
            </button>
          </div>
        </div>
        <div>{count === 1 && <Ruyhat />}</div>

        <div>
          {count === 2 && (
            <div id="map" style={{ height: "400px" }}>
              <Mapping />
            </div>
          )}
        </div>

        {/* footer side of the fillial */}
        <div className="md:w-[1270px] w-[350px] h-[1px] bg-slate-200 md:mt-28 mt-10"></div>
        <div className="md:flex md:space-x-[380px] md:ml-8 md:mt-9 mt-5">
          <div>
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="maxway"
            />
          </div>
          <div className="mt-2 relative md:left-10">
            <ul className="md:flex md:space-x-5 leading-10">
              <li>
                <NavLink
                  to="/filial"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Filiallar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connect"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Bog'lanish
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1182px] h-[1px] bg-slate-200 mt-10 ml-6"></div>

        <div className="flex justify-between mt-5">
          <div className="ml-8">
            <p className="text-gray-500">
              © Delever 2020 - 2024 Barcha huquqlar himoyalangan
            </p>
          </div>

          <div className="flex space-x-5 relative right-2 h-[60px]">
            <div>
              <NavLink to="#" onClick={handleClick}>
                <InstagramIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
            <div>
              <NavLink
                to="https://www.facebook.com/maxway.uzb/"
                target="_blank"
              >
                <FacebookIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
            <div>
              <NavLink to="https://www.youtube.com/@maxway2010" target="_blank">
                <YouTubeIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
