import React from 'react'
import {Carousel} from "react-responsive-carousel"

const Caraousel = () => {
  return (
    <div>
        <Carousel>
            <div>
                <img src='https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
                <p>aji</p>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' alt="hwaiol" />
                <p>aji</p>
            </div>
            <div>
                <img src='https://images.pexels.com/photos/13716813/pexels-photo-13716813.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load' />
                <p>aji</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Caraousel