import React, { useState } from "react";
import { NavLink } from "react-router-dom/dist";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const BizHaqimizda = () => {
  const instagramLink = "https://www.instagram.com/maxwayuz/";
  
  const handleClick = () => {
    window.location.href = instagramLink;
  };

  return (
    <>
      <div className="relative bottom-24 md:top-2">
        <div className="md:w-[1200px] w-[345px] h-[1px] bg-slate-200 mt-2"></div>

        <div className="md:mt-8 mt-4">
          <h1 className="font-semibold md:text-4xl text-[28px]">
            Kompaniya haqida
          </h1>
          <div className="md:mt-8 mt-3">
            <img
              src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
              alt="img"
              className="rounded-xl w-full md:h-[320px] h-[150px] object-cover"
            />
            <p className="mt-8 text-gray-900 font-normal leading-7 text-[17px] sm:w-[70%] w-[100%]">
              Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil
              etilgan. Hozirda kompaniyaning Toshkent shahrida 18 ta filiali
              mavjud. <br /> Taomnoma asosan klаb sendvichlari, hot-doglar,
              burgerlar, lavashlar va donarlardan iborat. Bizning ustuvor
              yo'nalishlarimiz - ingredientlarning yangiligi va sifati,
              qo'shimchalarning xilma-xilligi, arzon narxlar va mehmonlarning
              takliflariga e'tibor. <br /> Har kuni turli xil odamlar MaxWay-dan
              buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham,
              filiallar sonini ham oshirishga harakat qilmoqdamiz. Har bir
              tayyorlangan taom bilan biz o'ziga xos retseptlarning
              tafsilotlarini aniqlaymiz va sizning sevimli brendingiz bo'lishda
              davom etish uchun narx va sifatning mukammal muvozanatini
              qidiramiz. <br /> Agar siz kutilmaganda biz tomondan yomon xizmat
              yoki past sifatli pishirilgan taomga duch kelsangiz, bizga{" "}
              <a href="https://t.me/maxwaymasterfood_bot">
                @maxwaymasterfood_bot{" "}
              </a>
              manziliga murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni
              mamnuniyat bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a,
              bu tufayli bizda o'sish uchun maqsad bo’ladi.
            </p>
          </div>
        </div>

        {/* footer side of the fillial */}
        <div className="md:w-[1270px] w-[340px] h-[1px] bg-slate-200 mt-8"></div>
        <div className="md:flex md:space-x-[380px] mt-9">
          <div>
            <img
              src="https://maxway.uz/_next/image?url=https%3A%2F%2Fcdn.delever.uz%2Fdelever%2Fcfff938f-a7f6-4694-972e-c7fa9c0f68ba&w=48&q=75"
              alt="maxway"
            />
          </div>
          <div className="mt-2 relative md:left-10">
            <ul className="md:flex md:space-x-5 leading-10">
              <li>
                <NavLink
                  to="/filial"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Filiallar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Biz haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/connect"
                  className="font-normal hover:text-gray-600 text-[17px] md:text-xl text-gray-800 md:text-black"
                >
                  Bog'lanish
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[1190px] h-[1px] bg-slate-200 mt-10 ml-1"></div>

        <div className="flex justify-between mt-5">
          <div className="ml-1">
            <p className="text-gray-500 md:text-[17px] text-[15px]">
              © Delever 2020 - 2024 Barcha huquqlar himoyalangan
            </p>
          </div>

          <div className="flex md:space-x-5 space-x-3 relative right-2 h-[60px]">
            <div>
              <NavLink to="#" onClick={handleClick}>
                <InstagramIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
            <div>
              <NavLink
                to="https://www.facebook.com/maxway.uzb/"
                target="_blank"
              >
                <FacebookIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
            <div>
              <NavLink to="https://www.youtube.com/@maxway2010" target="_blank">
                <YouTubeIcon className="text-zinc-500 hover:text-zinc-700" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
