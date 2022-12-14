import {Carousel} from 'react-bootstrap';
import React from 'react';
import "./Carousel.css";
import {Card,edmData} from "./Card.jsx";
function CarouselFadeExample() {
  return (
    <Carousel  className="carousel">
    
    {edmData.map((artist,index)=>{
      return(
        <Carousel.Item key={index}>
        <Card key={index+"card"}
        img={artist.img}
      name={artist.name}
      date={artist.date}
      time={artist.time}
      info={artist.info}
      />
       </Carousel.Item>
       );
     
    })}
    </Carousel>
  );
}

export default CarouselFadeExample;