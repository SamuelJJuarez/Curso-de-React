import { useEffect } from "react";
import { createContext, useContext } from "react";
import { useReducer } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const cartReducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_CART":
            return {...state, cart: [...state.cart, action.payload]}
        case "REMOVE_OF_CART":
            return {...state, cart: [...state.cart, action.remove]}        
        default:
            return state;    
    }
}


const initialValue = {
    cart: JSON.parse(localStorage.getItem("cart") || [])
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialValue)
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state.cart))
    }, [state.cart])

    return (
        <CartContext.Provider value ={{state, dispatch}}>
            {children}
       </CartContext.Provider>
    )    
}