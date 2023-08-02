import React from 'react';
import { useProductContext } from "../../Common/Context/productContext";

const SingleProduct = () => {
    const { singleProduct, isLoading, isError } = useProductContext();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data. Please try Again...</div>;
    }

    return    <div>
        <h2>Single Product Details</h2>
        <div>
            <h4>{singleProduct.title}</h4>
            <button>Add to Cart</button>
        </div>
    </div>
};

export default SingleProduct;
