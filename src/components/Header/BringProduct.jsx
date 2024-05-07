import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ruyhat from "../../ruyhat";

export const BringProduct = () => {
  return (
    <>
      <div>
        <div className="overflow-y-auto max-h-[286px] mt-10 w-full">
          {/* Adjust max height as needed */}
          {ruyhat.map((item) => (
            <div
              key={item.id}
              className="w-full h-[100px] rounded-2xl p-3 border-[1px] border-purple-900 mb-4"
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

        {/* button */}
        <button className="w-full bg-purple-900 text-white font-semibold rounded-3xl h-[46px] mt-4">
          Belgilash
        </button>
      </div>
    </>
  );
};

