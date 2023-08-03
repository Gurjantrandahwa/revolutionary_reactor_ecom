import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useProductContext} from "../../Common/Context/productContext";
import "./productCard.scss";

const MAX_DESC_LENGTH = 50;

const ProductCard = ({id, desc, image, name}) => {
    const {getSingleProduct} = useProductContext();
    const navigate = useNavigate();

    const handleProductClick = async () => {
        await getSingleProduct(`https://dummyjson.com/product/${id}`);
        navigate(`/singleProduct/${id}`);
    };

    // Function to truncate the description
    const truncateDescription = (description) => {
        if (description.length <= MAX_DESC_LENGTH) {
            return description;
        } else {
            return description.slice(0, MAX_DESC_LENGTH) + "...";
        }
    };

    const truncatedDesc = truncateDescription(desc);

    return <div className={"product-card"}>
        <img src={image} alt={name} onClick={handleProductClick}/>
        <div className={"product-card-text"}>
            <h4>{name}</h4>
            <p>{truncatedDesc}</p>
            <button>Add to Cart</button>
        </div>
    </div>
};

export default ProductCard;
