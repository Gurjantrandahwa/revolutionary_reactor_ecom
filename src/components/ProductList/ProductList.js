import React, {useState} from 'react';
import {useProductContext} from '../../Common/Context/productContext';
import ProductCard from '../ProductCard/ProductCard';
import './productList.scss';

const ProductList = () => {
    const {isLoading, isError, products} = useProductContext();
    const [visibleProducts, setVisibleProducts] = useState(12); // Number of products initially visible

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data. Please try Later...</div>;
    }

    const loadMoreProducts = () => {
        setVisibleProducts(visibleProducts + 12); // Load 12 more products
    };

    return <div className={'product-list-container'}>
        <h2>Products For You!</h2>

        <div className={'product-list'}>
            {products.slice(0, visibleProducts).map((product) => (
                <ProductCard
                    key={product.id} // Make sure to add a unique key
                    id={product.id}
                    name={product.title}
                    desc={product.description}
                    image={product.thumbnail}
                    rating={product.rating}
                />
            ))}
        </div>

        {visibleProducts < products.length && (
            <button className="load-button" onClick={loadMoreProducts}>
                Load More
            </button>
        )}


    </div>
}

export default ProductList;
