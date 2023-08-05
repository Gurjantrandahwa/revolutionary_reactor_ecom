const filterReducer = (state, action) => {

    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map((value) => value.price)
            let maxPrice = Math.max(...priceArr)
            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: {...state.filters, maxPrice, price: maxPrice}
            };

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;
            if (name === "price") {
                return {
                    ...state,
                    filters: {
                        ...state.filters,
                        price: parseInt(value),
                    },
                };
            }
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                },
            };


        case "FILTER_PRODUCTS":
            const { all_products } = state;
            let tempFilterProduct = [...all_products];

            const { text, category } = state.filters;
            if (text) {
                tempFilterProduct = tempFilterProduct.filter((item) => {
                    return item.title.toLowerCase().includes(text.toLowerCase());
                });
            }
            if (category !== "all") {
                tempFilterProduct = tempFilterProduct.filter(
                    (item) => item.category.toLowerCase() === category.toLowerCase()
                );
            }


            return {
                ...state,
                filter_products: tempFilterProduct,
            };


        case "CLEAR_FILTERS":
            return {
                ...state,
                filters:{
                    ...state.filters,
                    text: '',
                    category: "all",
                },
            }

        default:
            return state
    }
}

export default filterReducer;