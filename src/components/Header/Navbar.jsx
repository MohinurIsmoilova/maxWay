import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { ModalPage } from "./ModalPage";
import { addToCart, updateTotalPrice } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  height: 560,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const Navbar = () => {
  //modal
  // const totalPrice = useSelector((state) => state.totalPrice);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal end

  const [language, setLanguage] = useState(10);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const renderValue = (selected) => {
    const languages = [
      {
        value: 10,
        imgSrc: "https://maxway.uz/images/uz.svg",
      },
      {
        value: 21,
        imgSrc: "https://maxway.uz/images/ru.svg",
      },
      {
        value: 22,
        imgSrc: "https://maxway.uz/images/en.svg",
      },
    ];
    const selectedLanguage = languages.find((lang) => lang.value === selected);
    return (
      <div className="flex space-x-2">
        <img src={selectedLanguage.imgSrc} alt={selectedLanguage.label} />
        <p>{selectedLanguage.label}</p>
      </div>
    );
  };

  const dispatch = useDispatch();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  console.log(totalPrice);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    dispatch(updateTotalPrice()); // Dispatch updateTotalPrice action after adding to cart
    alert("Successfully added to cart!");
  };

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open11 = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose11 = () => {
     setAnchorEl(null);
   };



       const [open1, setOpen1] = useState(false);
       const [phoneNumber, setPhoneNumber] = useState("");
       const [isButtonDisabled, setIsButtonDisabled] = useState(true);

       const handleOpen1 = () => setOpen1(true);
       const handleClose1 = () => setOpen1(false);

       const handlePhoneNumberChange = (event) => {
         const { value } = event.target;
         setPhoneNumber(value);
         setIsButtonDisabled(value === "");
       };

       const handleButtonClick = () => {
         // Perform any action with the phone number here
         console.log("Phone number:", phoneNumber);
         handleClose(); // Close the modal after button click
       };
  return (
    <>
      <div className="flex justify-between mt-4">
        <div className="md:hidden block">
          <Button
            id="basic-button"
            aria-controls={open11 ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open11 ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className="text-black" />
          </Button>

          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open11}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            // sx={{width:"300px", height:"500px"}}
          >
            <MenuItem onClick={handleClose11}>
              <div className="flex gap-5">
                <h1 className="text-xl">Menyu</h1>
                <CloseIcon className="text-gray-600" />
              </div>
            </MenuItem>
            <MenuItem>
              <nav className="mt-3 relative">
                <ul className="leading-[50px]">
                  <li>
                    <NavLink
                      to="/"
                      className="hover:text-black text-zinc-700 text-[17px] font-medium"
                    >
                      Bosh sahifa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/filial"
                      className="hover:text-black text-zinc-700 text-[17px] font-medium"
                    >
                      Filiallar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="hover:text-black text-zinc-700 text-[17px] font-medium"
                    >
                      Biz haqimizda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/connect"
                      className="hover:text-black text-zinc-700 text-[17px] font-medium"
                    >
                      Bog'lanish
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </MenuItem>
          </Menu>
        </div>

        <div className="relative right-16 md:left-0">
          <NavLink to="/">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="maxway"
            />
          </NavLink>
        </div>

        <nav className="mt-3 relative left-4 md:block hidden">
          <ul className="flex space-x-7">
            <li>
              <NavLink
                to="/"
                className="hover:text-black text-zinc-700 text-[17px] font-medium"
              >
                Menyu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/filial"
                className="hover:text-black text-zinc-700 text-[17px] font-medium"
              >
                Filiallar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="hover:text-black text-zinc-700 text-[17px] font-medium"
              >
                Biz haqimizda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/connect"
                className="hover:text-black text-zinc-700 text-[17px] font-medium"
              >
                Bog'lanish
              </NavLink>
            </li>
          </ul>
        </nav>

        <button onClick={handleOpen} className="hidden md:block">
          <div className="flex mt-1 relative left-44">
            <div className="w-[40px] h-[45px] bg-purple-100 rounded-[50%]">
              <FmdGoodIcon className="text-purple-900 mt-[10px] p-[1px]" />
            </div>
            <div className="ml-3">
              <p className="text-[15px]">Yetkazib berish yoki Olib ketish</p>
              <p className="text-purple-900 text-[14.5px] relative bottom-1">
                Qabul qilib olish turini tanlang
              </p>
            </div>
          </div>
        </button>

        {/* modal open */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-2xl">
            {/* Close button */}
            <Button onClick={handleClose}>
              <div className="relative left-[900px] bottom-4">
                <CloseIcon className="text-black" />
              </div>
            </Button>
            <ModalPage />
          </Box>
        </Modal>

        {/* modal end */}

        <div className="ml-48 hidden md:block">
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={language}
            onChange={handleChange}
            autoWidth
            renderValue={renderValue}
          >
            <MenuItem value={10}>
              <div className="flex space-x-2">
                <img src="https://maxway.uz/images/uz.svg" alt="uzb" />
                <p>O'zbekcha</p>
              </div>
            </MenuItem>
            <MenuItem value={21}>
              <div className="flex space-x-2">
                <img src="https://maxway.uz/images/ru.svg" alt="rus" />
                <p>Русский</p>
              </div>
            </MenuItem>
            <MenuItem value={22}>
              <div className="flex space-x-2">
                <img src="https://maxway.uz/images/en.svg" alt="eng" />
                <p>English</p>
              </div>
            </MenuItem>
          </Select>
        </div>

        <div className="flex space-x-2 mt-2">
          <NavLink to="/cart" className="flex space-x-2">
            <div className="w-[50px] h-[35px] bg-purple-100 rounded-[50%]">
              <ShoppingCartIcon className="text-purple-900 ml-[5px] mt-[5px] p-[2px]" />
            </div>
            <p className="mt-[5px] w-full">{totalPrice} so'm</p>
          </NavLink>

          <NavLink
            className="w-[32px] h-[32px] bg-purple-100 rounded-[50%] hidden md:block"
            onClick={handleOpen1}
          >
            <PersonIcon className="text-purple-900 ml-[4px] mt-[5px] p-[1px]" />
          </NavLink>

          <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{width:"600px", height:"700px", background:"white", borderRadius:"30px"}}
          >
            <div className="p-4">
              <div className="flex justify-between items-center">
                <h2 id="modal-modal-title">Enter Your Phone Number</h2>
                <CloseIcon onClick={handleClose1} />
              </div>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="Phone number"
                className="w-full border rounded p-2 mt-4"
              />
              <button
                disabled={isButtonDisabled}
                onClick={handleButtonClick}
                className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Submit
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};
