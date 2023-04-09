import { Route, Routes } from "react-router-dom";
import Purchase from "../src/pages/PurchasePage";
import "./App.css";

import AirpodsProduct from "./components/Product/AirpodsProduct";
import ApplewatchProduct from "./components/Product/ApplewatchProduct";
import ImacProduct from "./components/Product/ImacProduct";
import IpadProduct from "./components/Product/IpadProduct";
import IphoneProduct from "./components/Product/IphoneProduct";
import MacbookProduct from "./components/Product/MacbookProduct";

import AirpodsCatalog from "./components/ProductCatalog/AirpodsCatalog";
import ApplewatchCatalog from "./components/ProductCatalog/ApplewatchCatalog";
import ImacCatalog from "./components/ProductCatalog/ImacCatalog";
import IpadCatalog from "./components/ProductCatalog/IpadCatalog";
import IphoneCatalog from "./components/ProductCatalog/IphoneCatalog";
import MacbookCatalog from "./components/ProductCatalog/MacbookCatalog";

import CartPage from "./pages/CartPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />

        <Route path="/iphone" element={<IphoneCatalog />} />
        <Route path="/airpods" element={<AirpodsCatalog />} />
        <Route path="/ipad" element={<IpadCatalog />} />
        <Route path="/applewatch" element={<ApplewatchCatalog />} />
        <Route path="/macbook" element={<MacbookCatalog />} />
        <Route path="/imac" element={<ImacCatalog />} />

        <Route path="/iphone/:id" element={<IphoneProduct />} />
        <Route path="/airpods/:id" element={<AirpodsProduct />} />
        <Route path="/ipad/:id" element={<IpadProduct />} />
        <Route path="/applewatch/:id" element={<ApplewatchProduct />} />
        <Route path="/macbook/:id" element={<MacbookProduct />} />
        <Route path="/imac/:id" element={<ImacProduct />} />
        
        <Route path="/cart" element={<CartPage />} />
        <Route path="/purchase" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
