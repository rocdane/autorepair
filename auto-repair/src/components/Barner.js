import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Barner(){
    var items = [
        {
            picture: "assets/img/carousel-1.jpg",
            title: "Washing & Detailing",
            subtitle: "Keep your Car Newer",
            description: "Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac"
        },
        {
            picture: "assets/img/carousel-2.jpg",
            title: "Washing & Detailing",
            subtitle: "Quality service for you",
            description: "Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales"
        },
        {
            picture: "assets/img/carousel-3.jpg",
            title: "Washing & Detailing",
            subtitle: "Exterior & Interior Washing",
            description: "Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam"
        }
    ]

    return(
        <Carousel className="carousel">
        {
        items.map( (item, i) => (
            <Paper className="carousel-item" key={i}>
                <div className="carousel-img">
                    <img src={item.picture} alt="Image"/>
                </div>
                <div className="carousel-text">
                    <h3>{item.title}</h3>
                    <h1>{item.subtitle}</h1>
                    <p>{item.description}</p>
                    <Button className="btn btn-custom" href='/service'> Explore More</Button>
                </div>
            </Paper>
        ))
        }
        </Carousel>
    );
}

export default Barner;