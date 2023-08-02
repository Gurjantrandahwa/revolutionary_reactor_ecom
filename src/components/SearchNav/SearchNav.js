import React from 'react';
import "./searchNav.scss";
import {BsChevronDown, BsPerson, BsSearch} from "react-icons/bs";
import {TbShoppingCartPlus} from "react-icons/tb";
import logo from "../../assets/logo.jpg";


const SearchNav = () => {
    return <div className={"navbar"}>
        {/*logo*/}
        <a href={"/"}>
        <div className={"logo-wrapper"}>

                <img src={logo} alt={"logo"}/>
                <h2>Shopcart</h2>


        </div>
        </a>
        {/* Categories*/}
        <div>
            <ul>
                <li>Categories <BsChevronDown/></li>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
            </ul>
        </div>

        <div className={"search-cart-wrapper"}>
            {/*Search*/}
            <div className={"search-bar"}>
                <input type={"text"}
                       placeholder={"Search Product"}
                />
                <BsSearch/>
            </div>

            {/* cart*/}

            <div className={"cart-wrapper"}>
                <div>
                    <BsPerson/>
                    <p>Account</p>
                </div>
                <div>
                    <TbShoppingCartPlus/>
                    <p>Cart</p>
                </div>
            </div>
        </div>


    </div>
};

export default SearchNav;