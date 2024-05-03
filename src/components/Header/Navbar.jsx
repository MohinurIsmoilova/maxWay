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
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {ModalPage} from "./ModalPage";

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

  return (
    <>
      <div className="flex justify-between mt-4">
        <div>
          <NavLink to="/">
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="maxway"
            />
          </NavLink>
        </div>

        <nav className="mt-3 relative left-4">
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

        <button onClick={handleOpen}>
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
            <ModalPage/>
          </Box>
        </Modal>

        {/* modal end */}

        <div className="ml-48">
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
          <NavLink className="w-[35px] h-[35px] bg-purple-100 rounded-[50%]">
            <ShoppingCartIcon className="text-purple-900 ml-[6px] mt-[5px] p-[2px]" />
          </NavLink>
          <p className="mt-[5px]">40 000 so'm</p>
          <NavLink className="w-[32px] h-[32px] bg-purple-100 rounded-[50%]">
            <PersonIcon className="text-purple-900 ml-[4px] mt-[5px] p-[1px]" />
          </NavLink>
        </div>
      </div>
    </>
  );
};
