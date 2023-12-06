import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext"

const Navbar = () => { 
    const { state: {cart}} = useCartContext();
    const [amountProducts, setAmountProducts] = useState(0);

    useEffect(()=>{
        setAmountProducts(cart.length);
    }, [cart])

    return (
        <nav className="bg-black p-4 w-full flex justify-center">
            <div className="container flex justify-between items-center text-white px-4">
                <h1 className="text-xl">FakeStore</h1>
                <Link to="/">Home</Link>
                <Link to="/cart">Carrito: {amountProducts}</Link>
                <Link to="/search">Buscar</Link>
            </div>
        </nav>
    )
}

export default Navbar;