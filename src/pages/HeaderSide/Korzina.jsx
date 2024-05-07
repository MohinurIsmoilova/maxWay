import { useState } from "react";
import { useSelector } from "react-redux";
import { addToCart, updateTotalPrice } from "../../actions";

dispatch(addToCart(item));

dispatch(updateTotalPrice());

export const Korzina = () => {
  const [count, setCount] = useState(1);
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="mt-8">
      <h1 className="font-bold md:text-4xl text-[28px]">Savatcha</h1>

      <div className="flex space-x-12">
        <ul className="mt-10">
          <div className="w-[780px] h-[165px] shadow-sm rounded-2xl p-4 flex space-x-4 pt-12 pl-7">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fe876e478-efea-4992-a7ab-0b5cdb650582&w=1200&q=75"
              alt="img"
              className="w-[90px] h-[90px] object-cover rounded-2xl"
            />
            <div>
              <p className="text-xl font-semibold mt-6">Kraft packet</p>
            </div>

            <div className="flex space-x-16 relative left-[176px]">
              <div className="w-[140px] h-[40px] relative flex space-x-9 p-2 border-[1px] mt-5 border-purple-800 rounded-3xl">
                <button
                  className="text-3xl ml-4 relative bottom-2"
                  // onClick={decrementCount}
                >
                  -
                </button>
                <h2 className="text-xl relative right-2 bottom-[2px]">1</h2>
                <button
                  className="text-3xl right-6 relative bottom-[7px]"
                  // onClick={incrementCount}
                >
                  +
                </button>
              </div>

              <p className="font-bold text-xl text-gray-800 mt-7">2 000 so'm</p>
            </div>
          </div>
          {cartItems.map((item) => (
            <li key={item.id}>
              <div className="w-[780px] h-[150px] shadow-sm rounded-2xl p-4 flex pt-6 pl-7">
                <div className="flex space-x-4 w-[56%]">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-[90px] h-[90px] object-cover rounded-2xl"
                  />
                  <div>
                    <p className="text-xl">{item.productName}</p>
                    <p className="text-slate-500 mt-1 ml-2 w-[70%]">
                      {item.productTitle}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between gap-14">
                  <div className="w-[140px] h-[40px] relative flex space-x-9 p-2 border-[1px] mt-5 border-purple-800 rounded-3xl">
                    <button
                      className="text-3xl ml-4 relative bottom-2"
                      // onClick={decrementCount}
                    >
                      -
                    </button>
                    <h2 className="text-xl relative right-2 bottom-[2px]">
                      {count}
                    </h2>
                    <button
                      className="text-3xl right-6 relative bottom-[7px]"
                      // onClick={incrementCount}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <p className="font-bold text-[18px] text-gray-800 mt-7">
                      {item.productPrice} so'm
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="w-[380px] h-[310px] rounded-2xl shadow-md p-6 mt-10">
          <h1 className="text-2xl font-bold">Umumiy</h1>

          <div className="flex items-start justify-between mt-3">
            <h2 className="text-xl text-gray-800">Mahsulotlar</h2>
            <p className="text-xl text-gray-800">so'm</p>
          </div>
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-xl text-gray-800">Yetkazib berish</h2>
            <p className="text-xl text-gray-800"> so'm</p>
          </div>

          <div className="w-[330px] mt-4 h-[1px] bg-slate-400"></div>
          <div className="flex items-start justify-between mt-3">
            <h2 className="text-xl text-gray-800">To'lash uchun</h2>
            <p className="text-xl text-gray-800"> so'm</p>
          </div>

          <button className="w-[330px] h-[50px] rounded-3xl mt-4 font-semibold bg-slate-300 text-slate-400">
            To'lov sahifasiga o'tish
          </button>
          <p className="text-red-600 text-[13px] ml-5 mt-1">
            Eng kam buyurtma narxi 40 000 so'm bo'lishi kerak
          </p>
        </div>
      </div>
    </div>
  );
};
