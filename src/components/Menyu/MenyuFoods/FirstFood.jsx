import React, { useEffect, useState } from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

// Modal component to display card information
const Modal = ({ isOpen, onClose, card }) => {
const [isChecked, setIsChecked] = useState(false);
const [isChecked1, setIsChecked1] = useState(false);
const [isChecked2, setIsChecked2] = useState(false);
const [count, setCount]=useState("")

const toggleInputGroup = () => {
  setIsChecked(!isChecked);
  setIsChecked1(false);
  setIsChecked2(false);
};

const toggleInputGroup1 = () => {
  setIsChecked(false);
  setIsChecked1(!isChecked1);
  setIsChecked2(false);
};

const toggleInputGroup2 = () => {
  setIsChecked(false);
  setIsChecked1(false);
  setIsChecked2(!isChecked2);
};

  const handleCloseModal = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-50"
      onClick={handleCloseModal}
    >
      <div
        className="bg-white rounded-lg w-[750px] h-[530px] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <CloseOutlinedIcon
          className="absolute top-4 right-4 cursor-pointer"
          onClick={onClose}
        />

        <div className="flex">
          <div className="flex mt-32 w-[320px]">
            <img
              src={card.productImage}
              alt="img"
              className="h-60 object-cover mb-4"
            />
          </div>

          <div className="flex flex-col ml-10 mt-9">
            <h1 className="font-semibold text-2xl mb-2">{card.productName}</h1>
            <p className="text-[17px] text-gray-500 mt-2 mb-4 w-[92%]">
              {card.productTitle}
            </p>

            {/* 1 st div */}

            <div className="w-[360px] h-[84px] mt-2 rounded-xl border-2 p-3">
              <h2 className="font-normal text-gray-600">kartoshka-fri</h2>

              <div className="flex space-x-3 mt-2">
                <input type="checkbox" className="text-purple-900" />

                <p className="text-gray-600 text-[14px]">
                  kichik kartoshka-fri
                </p>

                <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                  <button>-</button>
                  <p className="text-[13px] mt-[2px]">1</p>
                  <button>+</button>
                </div>

                <h2 className="text-gray-500 text-[14px] mt-[1px] relative left-[75px]">
                  + 0 so'm
                </h2>
              </div>
            </div>

            {/* 1 st div */}

            {/* 2nd div */}

            <div className="w-[360px] h-[164px] mt-2 rounded-xl border-2 p-3">
              <h2 className="font-semibold text-gray-600">siz tanlagan sous</h2>
              {/*  */}
              <div className="flex space-x-3 mt-2">
                <input
                  type="checkbox"
                  className="text-purple-900"
                  onChange={toggleInputGroup}
                  checked={isChecked}
                />

                <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>

                {isChecked && (
                  <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                    <button>-</button>
                    <p className="text-[13px] mt-[2px]">1</p>
                    <button>+</button>
                  </div>
                )}

                <h2 className="text-gray-500 text-[14px] mt-[1px] absolute right-[112px]">
                  + 0 so'm
                </h2>
              </div>
              {/*  */}

              <div className="flex space-x-3 mt-2">
                <input
                  type="checkbox"
                  className="text-purple-900"
                  onChange={toggleInputGroup1}
                  checked={isChecked1}
                />

                <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>

                {isChecked1 && (
                  <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                    <button>-</button>
                    <p className="text-[13px] mt-[2px]">1</p>
                    <button>+</button>
                  </div>
                )}

                <h2 className="text-gray-500 text-[14px] mt-[1px] absolute right-[112px]">
                  + 0 so'm
                </h2>
              </div>

              {/*  */}
              <div className="flex space-x-3 mt-2">
                <input
                  type="checkbox"
                  className="text-purple-900"
                  onChange={toggleInputGroup2}
                  checked={isChecked2}
                />

                <p className="text-gray-600 text-[14px]">sarimsoqli sous</p>

                {isChecked2 && (
                  <div className="font-semibold text-gray-600 flex space-x-2 relative bottom-[2px] left-4">
                    <button>-</button>
                    <p className="text-[13px] mt-[2px]">1</p>
                    <button>+</button>
                  </div>
                )}

                <h2 className="text-gray-500 text-[14px] mt-[1px] absolute right-[112px]">
                  + 0 so'm
                </h2>
              </div>

              {/*  */}
            </div>

            {/* 2nd div */}

            <div className="w-[340px] h-[1px] mt-6 ml-2 bg-gray-200"></div>

            {/* buttons */}

            <div className="mt-4 flex space-x-24">
              <div className="w-[140px] h-[43px] flex space-x-9 p-2 border-[1px] border-purple-800 rounded-3xl">
                <button className="text-3xl ml-4 relative bottom-2">-</button>
                <h2 className="text-xl relative right-2">1</h2>
                <button className="text-3xl right-6 relative bottom-[7px]">
                  +
                </button>
              </div>

              <button className="w-[130px] h-[43px] bg-purple-800 text-white rounded-3xl font-semibold">
                42 000 so'm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FirstFood = () => {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://663489019bb0df2359a1cbc2.mockapi.io/adminka/v1/products")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex items-center space-x-3 mb-5">
        <RestaurantOutlinedIcon className="text-red-500" />
        <RamenDiningOutlinedIcon className="text-orange-500" />
        <h1 className="font-bold text-3xl">Maxi BOX</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 space-y-3">
        {todos.map((todo) => (
          <div key={todo.id} className="rounded-2xl overflow-hidden shadow-sm">
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
                <button
                  onClick={() => openModal(todo)}
                  className="px-4 py-2 bg-purple-900 text-white rounded-2xl"
                >
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} card={selectedCard} />
    </div>
  );
};

export default FirstFood;
