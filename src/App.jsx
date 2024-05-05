import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Menyu, Filallar, BizHaqimizda, Boglanish } from "./pages/HeaderSide/index";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Menyu />} />
            <Route path="filial" element={<Filallar/>} />
            <Route path="about" element={<BizHaqimizda/>}/>
            <Route path="connect" element={<Boglanish/>}/>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

// App.js
// import React from 'react';
// import StickyMenu from './components/StickyMenu';
// import MainContent from "./components/MainContent";

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <StickyMenu />
//       <MainContent />
//     </div>
//   );
// }

// export default App;

