import React from "react";
import {FaStar, FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";


const Rating = ({stars}) => {
    const ratingStar = Array.from({length: 5}, (e, index) => {
        let number = index + 0.5;
        return <span key={index}>
            {
                stars >= index + 1
                    ? <FaStar color={"#13de13"} size={18}/>
                    : stars >= number
                        ? <FaStarHalfAlt color={"#13de13"} size={18}/>
                        : <AiOutlineStar color={"#13de13"} size={18}/>
            }
        </span>
    });
    return <div>
        <p
            style={{alignItems: "center", display: "flex", gap: "10px"}}>
            {ratingStar}
        </p>
    </div>
}
export default Rating;
