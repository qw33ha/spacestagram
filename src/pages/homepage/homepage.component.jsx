import React from "react";
import { APIKey } from "../../assets/key";
import Images from "../../components/images/images.component";
import SearchBox from "../../components/search-box/search-box.component";
import { trackPromise } from 'react-promise-tracker';

import './homepage.styles.css';

class Homepage extends React.Component {
    constructor() {
        super();
        this.state = {
            images: [],
            searchFiled: ''
        };
    }
    componentDidMount() {
        try{
            trackPromise(
            fetch(`https://api.nasa.gov/planetary/apod?api_key=${APIKey}&count=8`)
            .then(response => response.json())
            .then(json => this.setState({images: json}))
            )
        } catch(error) {
            console.log(error);
        }
    }

    handlechange = e => {
        this.setState({searchField: e.target.value})
    }

    render(){
        const { images, searchField } = this.state;
        const filteredImages = searchField ? images.filter(img => img.date >= searchField) : images;
        return(
            <div className="homepage">
            <span className="search-box-text">Browse photos starting from this date</span>
            <div className="search-box">
            <SearchBox handlechange={this.handlechange} />
            </div>
            <Images images={filteredImages} />
            </div>
        )
    }
    
}

export default Homepage;