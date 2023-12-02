import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductItem = ({product}) => {
    const {dispatch} = useCartContext();
    const [validation, setValidation] = useState(true);

    useEffect(()=>{
        setValidation(validation);
    }, [])

    const addToCart = () =>{
        dispatch({type: "ADD_TO_CART", payload: product})
        alert("Producto agregado al carrito")
        setValidation(false)
    }

    const removeOfCart = () => {
        dispatch({type: "REMOVE_OF_CART", payload: product.id})
        alert("Producto eliminado del carrito")
        setValidation(true)
    }

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold text-black">{product.title}</span>
        <span className="text-center font-bold text-sm text-black">${product.price}</span>
        if(validation === true){
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={addToCart}>
                Añadir al carrito
            </button>
        } else {
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={removeOfCart}>
                Eliminar del carrito
            </button>
        }
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/info">Más información</Link>
        </button>
    </li>)
}

export default ProductItem;