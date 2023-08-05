import React from 'react';
import Banner from "../components/Banner/Banner";
import ProductList from "../components/ProductList/ProductList";
import FilterProducts from "../components/FilterProducts/FilterProducts";


const Homepage = () => {
    return <div>
        <Banner/>
        <FilterProducts/>
        <ProductList/>
    </div>
}

export default Homepage;