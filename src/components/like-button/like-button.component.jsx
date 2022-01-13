import React from "react";

import './like-button.styles.css';

class LikeButton extends React.Component {
    constructor() {
        super();
        this.state = {
            like: false
        }
    }

    render(){
        return(
            <button 
            className= {`like-button ${this.state.like ? 'Liked' : 'UnLiked'}`}
            onClick={() => this.setState({like: !this.state.like})}>
            {this.state.like ? 'Unlike' : 'Like'}</button>
        )
    }
    
}

export default LikeButton;