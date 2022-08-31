import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Item from "./Pages/Item";
import Login from "./Pages/Login";
import ProductItems from "./Pages/ProductItems";
import Rejester from "./Pages/Rejester";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.createRoot(
  document.getElementById("root")
);




const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Item" element={<Item />} />
        <Route path="Login" element={<Login />} />
        <Route path="ProductItems" element={<ProductItems />} />
        <Route path="Rejester"  element={<Rejester />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;