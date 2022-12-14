import React, { useEffect, useState } from "react";
import '../css/Herosection.css';
import left from '../images/final-left.png';
import right from '../images/Right-image.png';
import text from '../images/tesseract_png.png';
// import '../components/Mousemoveeffect.js';

const Herosection = () => {

    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);

        return () => window.removeEventListener('scroll',handleScroll);
    },[])
    window.addEventListener('scroll',handleScroll)

    return ( 
        <>
            <div className="hero-section">
                <div className="mouse-move">
                    <div className="left">
                        <h2 className="front-left"> Explore the </h2>
                        <h1 className="front-left"> tesseract </h1>
                    </div>
                    <div className="right">
                        <p className="back-right">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus autem earum aliquid fugiat? Fugit, quis?
                        </p>
                    </div>
                </div>
            <div className="zoom">
                    {/* <img className="left-img" src={left} alt="" 
                        style={
                            {width: (100 + offset * 0.3) + '%'}
                            
                        }
                    />
                    <img className="right-img" src={right} alt="" 
                        style={{width: (100 + offset * 0.3) + '%'}}
                    />
                    <img className="text-img" src={text} alt=""
                        style={{top : `-${10 + offset * 0.3 + `%` }`}}
                    /> */}
                </div>
            </div>
            <div className="general-info">
                <h1>
                    Great start of 2023
                </h1>
                <div className="space-background">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
                         necessitatibus nesciunt maxime architecto! Excepturi voluptate, repellat
                          vero recusandae amet quidem corrupti cumque nesciunt veniam aut tempore
                           facere cupiditate eos expedita nulla ad quam aliquid? Nesciunt commodi
                            voluptate ratione veritatis unde eum, natus esse placeat praesentium
                             perferendis atque similique iusto dolorem animi. Laboriosam aspernatur 
                             hic enim eaque. Enim sunt quasi porro sit, ex nemo harum maxime saepe 
                             sint mollitia non possimus a dicta doloremque iusto et earum commodi 
                             suscipit error! Adipisci sapiente, eaque commodi facere culpa laborum 
                             distinctio dolor. Quibusdam atque nihil, ut fuga blanditiis esse. 
                             Corrupti ad quidem aliquid voluptates quo placeat similique! Veritati
                    </p>
                </div>
                <div>
                    <p>
                        check here
                    </p>
                    <p>
                        again check
                    </p>
                </div>
            </div>
            
        </>
     );
}
 
export default Herosection;