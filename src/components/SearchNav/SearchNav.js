import React, { useState } from 'react';
import './searchNav.scss';
import { BsChevronDown, BsPerson, BsSearch } from 'react-icons/bs';
import { TiShoppingCart } from 'react-icons/ti';
import logo from '../../assets/logo.jpg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const SearchNav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return    <div className={`navbar ${isNavOpen ? 'open' : ''}`}>
        <a href="/">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
                <h2>Shopcart</h2>
            </div>
        </a>
        <div className="menu-icon" onClick={toggleNav}>
            {isNavOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <ul>
                <li>Categories <BsChevronDown /></li>
                <li>Deals</li>
                <li>What's New</li>
                <li>Delivery</li>
            </ul>

            <div className="search-cart-wrapper">
                <div className="search-bar">
                    <input type="text" placeholder="Search Product" />
                    <BsSearch />
                </div>

                <div className="cart-wrapper">
                    <div>
                        <BsPerson />
                        <p>Account</p>
                    </div>
                    <div>
                        <TiShoppingCart />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default SearchNav;
