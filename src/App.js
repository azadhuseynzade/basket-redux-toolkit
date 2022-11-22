import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";
import Basket from "./components/Basket";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/:id" element={<ProductsDetail />} />
          <Route exact path="/basket" element={<Basket />} />
        </Routes>
      </>
    </Provider>
  );
}

export default App;
