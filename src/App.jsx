import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Menyu, Filallar, BizHaqimizda, Boglanish } from "./pages/HeaderSide/index";
// import { Foods } from "./components/Header/Foods";

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
            {/* <Route path="/foods" element={<Foods/>}/> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
