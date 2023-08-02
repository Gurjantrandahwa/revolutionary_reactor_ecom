import React from 'react';
import {useProductContext} from "../../Common/Context/productContext";
import ProductCard from "../ProductCard/ProductCard";
import "./productList.scss";


const ProductList = () => {
    const {isLoading, isError, products} = useProductContext();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data. Please try Later...</div>;
    }

    return <div className={"product-list-container"}>
        <h2>Products For You!</h2>

        <div className={"product-list"}>
            {products.map((product) => {
                    return <ProductCard
                        id={product.id}
                        name={product.title}
                        desc={product.description}
                        image={product.thumbnail}
                        rating={product.rating}
                    />
                }
            )}
        </div>


    </div>
};

export default ProductList;
