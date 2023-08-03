import React, {useState} from 'react';
import {useProductContext} from "../../Common/Context/productContext";
import "./singleProduct.scss";
import Rating from "../Rating/Rating";
import CartAmount from "../CartAmount/CartAmount";
import {BsClipboard, BsTruck} from "react-icons/bs";

const SingleProduct = () => {
    const {singleProduct, isLoading, isError} = useProductContext();
    const [amount, setAmount] = useState(1)
    const {title, thumbnail, description, images, rating, price, brand, category, stock} = singleProduct;
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error occurred while fetching data. Please try Again...</div>;
    }


    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);


    }

    return <div className={"single-product-container"}>
        <hr/>

        <div className={"single-title"}>
            <p>{category}</p>/
            <p>{brand}</p>/
            <p className={"title"}>{title}</p>
        </div>

        <div className={"single-product-wrapper"}>
            <div className={"single-product"}>

                <img
                    className={"main-img"}
                    src={thumbnail} alt={title}/>

                <div className={"bottom-images"}>
                    {images.slice(0, 4).map((img, index) => {
                        return <img key={index} src={img} alt={`Image ${index}`} />
                    })}
                </div>


            </div>

            <div className={"single-product"}>
                {/*Name*/}
                <div className={"product-name"}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                {/*Rating*/}
                <div className={"rating-wrapper"}>
                    <Rating stars={rating}/>
                    <p>(121)</p>
                </div>
                <hr style={{margin: "25px auto"}}/>

                {/*price*/}
                <div className={"price-wrapper"}>
                    <h2>$ {price}</h2>
                    <p>Suggested payments with 6 months special financing</p>
                </div>

                <hr style={{margin: "25px auto"}}/>


                {/*Quantity*/}
                <div className={"quantity-wrapper"}>
                    <CartAmount
                        amount={amount}
                        setDecrease={setDecrease}
                        setIncrease={setIncrease}/>
                    <div>
                        <p>Ony <span>{stock} items</span> Left! </p>
                        <p>Don't miss it</p>
                    </div>

                </div>

                <hr style={{margin: "25px auto"}}/>
                {/*buttons*/}
                <div className={"single-p-buttons"}>
                    <button className={"filled-btn"}>Buy Now</button>
                    <button className={"outline-btn"}>Add to Cart</button>
                </div>
                {/* delivery*/}
                <div className={"delivery-wrapper"}>
                    <div className={"single-delivery"}>
                        <BsTruck/>
                        <div>
                            <h5>Free Delivery</h5>
                            <p>Enter your Postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <div className={"single-delivery"}>
                        <BsClipboard/>
                        <div>
                            <h5>Return Delivery</h5>
                            <p>Free 30days Delivery Returns. <span>Details</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default SingleProduct;
