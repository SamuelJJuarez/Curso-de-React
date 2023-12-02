import { useCartContext } from "../context/CartContext";
import ProductItemDelete from "../components/ProductItemDelete";
import { useState, useEffect } from "react";

const Cart = () =>{
    const [total, setTotal] = useState(0);
    const {state: {cart}} = useCartContext();

    useEffect(()=>{
        setTotal(
            cart.reduce((acc, product) => acc + product.price, 0).toFixed(2)
        )
    }, [cart])
    
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold text-black">Carrito</h1>
            <ul className="flex flex-col gap-2">
                {cart.map((product) => (
                    <ProductItemDelete product={product} key={product.id}/>
                ))}
            </ul>
            <span className="text-2xl font-bold text-black">Total de la compra: ${total}</span>
        </div>
    )
}

export default Cart;