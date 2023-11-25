import { useCartContext } from "../context/CartContext";

const ProductItemDelete = ({product}) => {
    const {dispatch} = useCartContext();

    const removeOfCart = () => {
        dispatch({type: "REMOVE_OF_CART", payload: product.id})
        alert("Producto eliminado del carrito")
    }

    return (<li className="flex flex-col gap-2 p-4 items-center bg-white rounded-xl shadow">
        <img src={product.image} className="w-20" />
        <span className="text-center font-bold text-black">{product.title}</span>
        <span className="text-center font-bold text-sm text-black">${product.price}</span>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={removeOfCart}>
            Eliminar del carrito
        </button>
    </li>)
}

export default ProductItemDelete;