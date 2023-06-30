import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ShopContextProvider from "./context/shop-context";
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";



const App = () => {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <div style={{ position: 'fixed', top: '0px', bottom: '10px', zIndex: '999' }}>
            
          </div>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
           
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
