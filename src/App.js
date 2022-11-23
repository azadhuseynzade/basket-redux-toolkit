import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import ProductsDetail from "./components/ProductsDetail";
import Basket from "./components/Basket";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Navbar />
        <ToastContainer position="bottom-left" />

        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/:id" element={<ProductsDetail />} />
          <Route exact path="/basket" element={<Basket />} />
        </Routes>
      </Provider>
    </PersistGate>
  );
}

export default App;
