import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from '../reducers/filterReducer'

const FilterContex = createContext();

const initialstate = {
    filter_product: [],
    all_product: [],
    filter_value: "popular",
    filters:{
        text: "",
        category:""

    }
}

export const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialstate)

    const getFiltervalue = (e)=>{
        dispatch({type:"SELECT_VALUE", payload: e.target.value})
    }

    const getsearchvalue=(e)=>{
        let name = e.target.name;
        let value = e.target.value;

        return dispatch({type: "UPDATE_SEARCH_VALUE" , payload:{name, value}})
    }

    useEffect(()=>{
        
        dispatch({type:"SORTING-PRODDUCT", payload: products})
    },[products, state.filter_value])

    useEffect(() => {
        dispatch({ type: 'FILTER_PRODUCT', payload: products })
        dispatch({type: "SEARCH_PRODUCT"})
    }, [products,state.filters])

    return (
        <FilterContex.Provider value={{ ...state, getFiltervalue,getsearchvalue }}>
            {children}
        </FilterContex.Provider>
    )
}

//custome hook
export const useFilterContex = () => {
    return useContext(FilterContex)
}