import React from 'react';
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export const BringProduct = () => {
  return (
    <>
      <div className="w-[500px] h-[100px] rounded-2xl p-3 border-[1px] border-purple-900">
        <div className="flex">
          <LocationOnOutlinedIcon className="text-purple-900" />
          <h1 className="font-semibold">MAX WAY BERUNIY</h1>
        </div>
        <p>улица Беруни, 47, Ташкент</p>
        <p>Restoran soat 22:00 da yopiladi</p>
      </div>
    </>
  );
}
