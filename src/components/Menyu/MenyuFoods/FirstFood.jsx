import React, { useEffect, useState } from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";

export const FirstFood = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://663489019bb0df2359a1cbc2.mockapi.io/adminka/v1/products")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <div className="flex items-center space-x-3 mb-5">
        <RestaurantOutlinedIcon className="text-red-500" />
        <RamenDiningOutlinedIcon className="text-orange-500" />
        <h1 className="font-bold text-3xl">Maxi BOX</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={todo.productImage}
              alt="img"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h1 className="font-semibold text-xl">{todo.productName}</h1>
              <p className="text-sm text-gray-500">{todo.productTitle}</p>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center">
                  <h1 className="font-bold text-lg text-slate-900">
                    {todo.productPrice}
                  </h1>
                  <p className="text-sm text-zinc-900 ml-1">so'm</p>
                </div>
                <button className="px-4 py-2 bg-purple-900 text-white rounded-2xl">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstFood;
