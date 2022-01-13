import React from "react";

import "./search-box.styles.css"

const SearchBox = ({ handlechange }) => {
    return (
        <input
            className="search"
            type="date" 
            onChange={handlechange}
        />
    )
}

export default SearchBox;