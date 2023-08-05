import {createContext, useContext, useEffect, useReducer} from "react";
import {useProductContext} from "./productContext";
import reducer from "../Reducer/filterReducer"

const FilterContext = createContext();

export const FilterContextProvider = ({children}) => {
    const initialState = {
        filter_products: [],
        all_products: [],
        filters: {
            text: '',
            category: "all",
        },
    }

    const {products} = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        dispatch({type: "FILTER_PRODUCTS"})
    }, [state.filters])


    const updateFilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name, value}})
    }

    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }


    useEffect(() => {
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})

    }, [products])

    return <FilterContext.Provider
        value={{
            ...state,
            updateFilterValue,
            clearFilters
        }}>
        {children}
    </FilterContext.Provider>
}

export const useFilterContext = () => {
    return useContext(FilterContext)
}