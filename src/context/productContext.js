import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducers/productReducer'

const AppContext = createContext();
const Api = "https://fakestoreapi.com/products";

const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    issigngleLoading: false,
    setSingleProduct: {}
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialstate);

    const getProducts = async (url) => {
        dispatch({ type: "Loading" })
        try {
            const res = await axios.get(url);
            const product = await res.data;
            dispatch({ type: "API_DATA", payload: product })
        } catch (error) {
            dispatch({ type: "Error" })
        }

    }

    const getSingleProduct = async (url) => {
        dispatch({ type: "SingleProduct_Loading" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLEPROFDUCT", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SET_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(Api)
    }, [])

    return (
        <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>)
}
// CUSTOME hOOK
const useProductContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useProductContext }