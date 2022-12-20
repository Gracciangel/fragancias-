// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import What from "./components/what";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDeatilContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<h1>página principal</h1>}/>
            <Route path="/item"element={<ItemListContainer/>} />
            <Route path="/contacto" element={<h1>contacto</h1>} />
          </Routes>
        <What />
        </BrowserRouter>

    </> 
  );
}

export default App;
