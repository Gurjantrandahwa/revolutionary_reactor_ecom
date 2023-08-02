const ProductReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "MY_DATA":

            return {
                ...state,
                isLoading: false,
                products: action.payload.products,
            };

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_SINGLE_PRODUCT":
            return {
                ...state,
                isLoading: false,
                singleProduct: action.payload
            };
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            return state;
    }
};

export default ProductReducer;
