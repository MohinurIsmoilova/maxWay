import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ClearIcon from "@mui/icons-material/Clear";
import ruyhat from "../../ruyhat";

export const BringProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <>
      <div>
        <div className="mt-5 w-full">
          {/* Adjust max height as needed */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Restoran nomi bo'yicha qidirish"
              className="w-full h-[50px] px-3 py-2 pr-10 text-[13px] rounded-xl border border-gray-300 focus:outline-none focus:border-purple-500"
            />
            {searchQuery ? (
              <button
                onClick={clearSearch}
                className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-900 hover:text-gray-600 focus:outline-none"
              >
                <ClearIcon />
              </button>
            ) : (
              <div className="absolute inset-y-0 right-3 flex items-center px-2 text-gray-900">
                <ClearIcon />
              </div>
            )}
          </div>
          <div className="mt-7 overflow-y-auto max-h-[278px]">
            {ruyhat
              .filter((item) =>
                item.filial.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((item) => (
                <div
                  key={item.id}
                  className="w-full h-[100px] rounded-2xl p-3 border-[1px] border-purple-900 mb-3"
                >
                  <div className="flex">
                    <LocationOnOutlinedIcon className="text-purple-900" />
                    <h1 className="font-semibold">{item.filial}</h1>
                  </div>
                  <div className="mt-1 ml-1">
                    <p className="text-zinc-400 text-[13px]">{item.address}</p>
                    <p
                      className={`text-[13px] mt-2 ${
                        item.openTime === "open_until"
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {item.openTime}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* button */}
        <button className="w-full bg-purple-900 text-white font-semibold rounded-3xl h-[46px] mt-4">
          Belgilash
        </button>
      </div>
    </>
  );
};

export default BringProduct;
