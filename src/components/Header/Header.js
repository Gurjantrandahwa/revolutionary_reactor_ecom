import React, {useState} from 'react';
import "./header.scss";
import {BsChevronDown, BsTelephone} from "react-icons/bs";

const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('Eng');
    const [selectedLocation, setSelectedLocation] = useState('Location');
    const languageOptions = ['Eng', 'Hindi'];
    const locationOptions = ['Location 1', 'Location 2'];

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    return <div className={"header"}>
        <div style={{gap: 8}}>
            <BsTelephone/>
            <p>+001234567890</p>
        </div>
        <div style={{gap: 15}}>
            <p>Get 50% Off on Selected Items </p> |
            <p>Shop Now</p>
        </div>
        <div>
            <div className="dropdown">
                <div>
                    <p>{selectedLanguage}</p>
                    <BsChevronDown/>
                </div>

                <div className="dropdown-content">
                    {languageOptions.map((language) => (
                        <p key={language} onClick={() => handleLanguageChange(language)}>
                            {language}
                        </p>
                    ))}
                </div>
            </div>

            <div className="dropdown">
                <div>
                    <p>{selectedLocation}</p>
                    <BsChevronDown/>
                </div>

                <div className="dropdown-content">
                    {locationOptions.map((location) => (
                        <p key={location} onClick={() => handleLocationChange(location)}>
                            {location}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </div>
};

export default Header;
