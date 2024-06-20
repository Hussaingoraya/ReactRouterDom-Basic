import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Components/Menu";
import Home from "./Components/Home";
import ProuctsPgae from "./Components/ProuctsPgae";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/products/:pid" element={<ProuctsPgae />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
