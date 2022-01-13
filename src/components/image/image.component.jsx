import React from "react";

import LikeButton from "../like-button/like-button.component";
import './image.styles.css';

const Image = ({ image }) => {
    return(
        <div className="img-container">
            <img className="image" alt='Astronomy Picture' src={image.url}/>
            <h3 className="title">{image.title}</h3>
            <h5 className="date">{image.date}</h5>
            <p className="explanation">{image.explanation}</p>
            <LikeButton />
        </div>
    )
}

export default Image;