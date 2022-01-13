import React from "react";
import Image from "../image/image.component";

import './images.styles.css';

const Images = props => {
    return(
        <div className="Images">
            {props.images.map(img => <Image key={img.title} image={img}/>)}
        </div>
    )
}

export default Images;
