import React, {useEffect, useState} from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                // Assuming 'products' is the key containing the array of products
                const productList = data.products || [];
                setProducts(productList);
            } catch (error) {
                console.error('Error fetching data:', error);
                setProducts([]);
            }
        };

        fetchData();
    }, []);
    console.log(products)
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <div key={product.id}>
                        <li>
                            {product.title}
                        </li>
                        <img src={product.images[0]} alt={""} width={100}/>
                    </div>

                ))}
            </ul>
        </div>
    );
};

export default ProductList;
