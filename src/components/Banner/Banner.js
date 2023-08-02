import React from 'react';
import "./banner.scss";
import banner from "../../assets/banner.jpg"

const Banner = () => {
    return <div className={"banner-wrapper"}>

        <div className={"banner-text"}>
            <h1>
                Grab Upto 50% Off On
                Selected Product
            </h1>
            <button>Buy Now</button>
        </div>

        <img src={banner} alt={"banner-img"}/>
    </div>
}

export default Banner;