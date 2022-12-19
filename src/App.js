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
            <Route path="/home"element={<ItemListContainer/>} />

          </Routes>
        <What />
        </BrowserRouter>

    </> 
  );
}

export default App;
