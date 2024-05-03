import React, { useState } from "react";
import { Ruyhat, Mapping } from "./index";
import { NavLink } from "react-router-dom/dist";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Filallar = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div>
        <div className="w-[1200px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="flex justify-between mt-14">
          <h1 className="font-bold text-4xl">Filiallar</h1>

          <div className="space-x-5">
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
        <div className="w-[1270px] h-[1px] bg-slate-200 mt-28"></div>
        <div className="flex space-x-[380px] ml-8 mt-9">
          <div>
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="maxway"
            />
          </div>
          <div>
            <ul className="flex space-x-5">
              <li>
                <NavLink
                  to="/filial"
                  className="font-normal hover:text-gray-600 text-xl"
                >
                  Filiallar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font-normal hover:text-gray-600 text-xl"
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connect"
                  className="font-normal hover:text-gray-600 text-xl"
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
              <InstagramIcon className="text-zinc-500 hover:text-zinc-700" />
            </div>
            <div>
              <FacebookIcon className="text-zinc-500 hover:text-zinc-700" />
            </div>
            <div>
              <YouTubeIcon className="text-zinc-500 hover:text-zinc-700" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
