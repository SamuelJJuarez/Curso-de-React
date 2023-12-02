import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import Search from "./pages/Search";
import MoreInfo from "./pages/MoreInfo";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <main className="min-h-screen min-w-screen bg-gray-100 flex flex-col">
          <Navbar />
          <div className="w-full flex justify-center">
            <div className="container flex text-white p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/info" element={<MoreInfo />} />
              </Routes>
            </div>
          </div>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App