import { useState, useEffect } from "react";
import { useCartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import { useFakestoreApi } from "../hooks/useFakestoreApi";

const MoreInfo = () => {
    const { id } = useParams();
    const {dispatch} = useCartContext();
    const [validation, setValidation] = useState(true);
    const { data: products, loading, error, getProducts } = useFakestoreApi();

    useEffect(()=>{
        setValidation(validation);
    }, [])

    useEffect(() => {
        getProducts();
    }, []);

    const findProducts = products
        ? products.filter((product) =>
            product.id.equals(id)
    ): null;

    const product = findProducts.map((product) => (
    product))

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
    <span className="text-center font-bold text-black">{product.description}</span>
    <span className="text-center font-bold text-sm text-black">${product.price}</span>
    {validation === true ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addToCart}>
            Añadir al carrito
        </button>
    ) : (
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={removeOfCart}>
            Eliminar del carrito
        </button>
    )}
    </li>)
}

export default MoreInfo;