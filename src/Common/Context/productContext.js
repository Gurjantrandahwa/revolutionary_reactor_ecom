import {createContext, useEffect, useReducer, useContext} from "react";
import axios from "axios";
import ProductReducer from "../Reducer/productReducer";

const AppContext = createContext();
const API = "https://dummyjson.com/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: {},
};


const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type: "MY_DATA", payload: products});
        } catch (e) {
            dispatch({type: "API_ERROR"});
        }
    };

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            console.log(singleProduct,"single product")
            dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
        } catch (e) {
            dispatch({type: "SET_SINGLE_ERROR"});
        }
    };

    useEffect(() => {
        getProducts(API)
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return <AppContext.Provider value={{...state, getSingleProduct}}>
        {children}
    </AppContext.Provider>
}

const useProductContext = () => {
    return useContext(AppContext);
};

export {AppProvider, useProductContext};
