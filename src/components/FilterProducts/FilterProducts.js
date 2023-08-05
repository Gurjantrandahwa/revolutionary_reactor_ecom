import React from "react";
import {useFilterContext} from "../../Common/Context/filter_context";
import "./filterProducts.scss";

export default function FilterProducts() {
    const {
        filters: {category},
        updateFilterValue,
        clearFilters,
        all_products,
    } = useFilterContext();

    const getUniqueData = (data, property) => {
        let uniqueValues = [];

        if (data && data.length > 0) {
            data.forEach(item => {
                if (item[property] && !uniqueValues.includes(item[property])) {
                    uniqueValues.push(item[property]);
                }
            });
        }

        return uniqueValues;
    };


    const categoryData = getUniqueData(all_products, "category");


    return <div className={"filter-p-container"}>
        <form>
            <p>Categories</p>
            <select
                name="category"
                id="category"
                onChange={updateFilterValue}
                value={category}
            >
                {categoryData && categoryData.length > 0 && categoryData.map((elem, index) => {
                    return <option
                        key={index}
                        name={"category"}
                        value={elem}
                        onClick={updateFilterValue}
                    >
                        {elem}
                    </option>
                })}
            </select>
        </form>

        <button onClick={clearFilters}>
            Clear filters
        </button>
    </div>
}
