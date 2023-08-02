import React from 'react';
import Banner from "../components/Banner/Banner";
import ProductList from "../components/ProductList/ProductList";

const Homepage = () => {
    return <div className={"container"}>
        <Banner/>
        <ProductList/>
    </div>
}

export default Homepage;