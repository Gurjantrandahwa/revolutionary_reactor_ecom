import React, {useState} from 'react';
import {useFilterContext} from '../../Common/Context/filter_context';
import ProductCard from '../ProductCard/ProductCard';
import './productList.scss';

const ProductList = () => {
    const {isLoading, isError, filter_products} = useFilterContext();
    const [visibleProducts, setVisibleProducts] = useState(12);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data. Please try Later...</div>;
    }

    const loadMoreProducts = () => {
        setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 12);
    };

    return <div className="product-list-container">
        <h2>Products For You!</h2>
        <div className="product-list">
            {filter_products.slice(0, visibleProducts).map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.title}
                    desc={product.description}
                    image={product.thumbnail}
                    rating={product.rating}
                />
            ))}
        </div>
        {visibleProducts < filter_products.length && (
            <button className="load-button" onClick={loadMoreProducts}>
                Load More
            </button>
        )}
    </div>
};

export default ProductList;
