import React from "react";

import './header.styles.css';

const Header = () => {
    return(
        <div className="header">
            <h1 className="title">Spacestagram</h1>
            <h3 className="subtitle">Brought to you by NASA's image API</h3>
        </div>
    );
}

export default Header;