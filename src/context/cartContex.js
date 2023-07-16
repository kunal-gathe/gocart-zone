import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/cartReducer'

const CartContext = createContext()
const getLocalcartData = () => {

    let newCartData = localStorage.getItem("Gocart");
    if (newCartData === []) {
        return [];
    } else {
        return JSON.parse(newCartData)
    }
}
const initialState = {
    // cart:[],
    cart: getLocalcartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 4.99,
}

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const removeCartitem = (title) => {
        dispatch({ type: "REMOVE_ITEM", payload: title })
    }
    const clearcart = (id) => {
        dispatch({ type: "CLEAR_CART", payload: id })
    }

    const addToCart = (alis, title, image, price, setSingleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { alis, title, image, price, setSingleProduct } })
    }

    useEffect(() => {
        dispatch({type: "CART_TOTAL_ITEM"})
        dispatch({type: "CART_TOTAL_PRICE"})
        localStorage.setItem("Gocart", JSON.stringify(state.cart))
    }, [state.cart])


    return <CartContext.Provider value={{ ...state, addToCart, removeCartitem, clearcart }}>{children}</CartContext.Provider>
}
const useCartContext = () => {
    return useContext(CartContext)
}
export { CartProvider, useCartContext }