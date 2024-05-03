import React, { useState } from "react";
import { SendProduct, BringProduct } from "./index";

export const ModalPage = () => {
  const [number, setNumber] = useState(1);

  return (
    <>
      <div className="flex">
        <div>
          <h1 className="text-[27px] font-semibold">
            Qabul qilib olish turini tanlang
          </h1>
          <p className="text-stone-500">
            Real vaqt va joylashuvga mos menyuni ko'rish uchun
          </p>
          <div className="flex space-x-4 mt-4">
            <button
              className="w-[240px] text-gray-600 text-[18px] font-normal rounded-3xl hover:bg-slate-100 hover:text-purple-800 bg-gray-100 h-[50px]"
              onClick={() => setNumber(1)}
            >
              Yetkazib berish
            </button>
            <button
              className="w-[240px] text-gray-600 text-[18px] font-normal rounded-3xl hover:bg-slate-100 hover:text-purple-800 bg-gray-100 h-[50px]"
              onClick={() => setNumber(2)}
            >
              Olib ketish
            </button>
          </div>

          {/* buttons */}

          <div>{number === 1 && <SendProduct />}</div>
          <div>{number === 2 && <BringProduct />}</div>

          {/* buttons */}
        </div>

        <div>
          sdfgh
        </div>
      </div>
    </>
  );
};
