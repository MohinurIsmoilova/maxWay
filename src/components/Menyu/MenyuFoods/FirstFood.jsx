import React, { useEffect, useState } from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";

export const FirstFood = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  useEffect(() => {
    fetch("https://663489019bb0df2359a1cbc2.mockapi.io/adminka/v1/products")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div>
      <div className="flex space-x-3">
        <RestaurantOutlinedIcon className="text-red-500 top-2 relative" />
        <RamenDiningOutlinedIcon className="text-orange-500 top-2 relative" />
        <h1 className="font-bold text-3xl">Maxi BOX</h1>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="w-[285px] h-[400px] shadow-2xl bg-red-400 rounded-2xl"
          >
            <img
              src={todo.productImage}
              alt="img"
              className="object-cover rounded-t-2xl rounded-none"
            />
            <h1 className="font-semibold">{todo.productName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
