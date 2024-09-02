
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalStorageData = () => {
    let localData = localStorage.getItem("Ecomm");
    if (localData){
        return JSON.parse(localData);
    }else{
        return [];
    }
}

const initialState = {
    cart: getLocalStorageData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Adding product to cart :
    const addToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
    };

    // Product quantity increaseing
    const setIncrement = (id) =>{
        dispatch({type: "SET_INCREMENT", payload: id });
    }

    // Product quantity decreaseing
    const setDecrease = (id) =>{
        dispatch({type: "SET_DECREMENT", payload: id });
    }

    // Remove a single product
    const removeItem = (id) =>{
        dispatch({type: "REMOVE_ITEM", payload: id});
    }

    // Clear cart 
    const clearCart = () =>{
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(() => {
        dispatch({type: "TOTAL_ITEM"});
        dispatch({ type: "TOTAL_PRICE"});
        
        localStorage.setItem("Ecomm", JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ ...state, addToCart, setIncrement, setDecrease, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}

export default CartProvider;
export { useCartContext };
