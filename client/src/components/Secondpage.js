import React from "react";
import '../css/Secondpage.css';

const Secondpage = () => {
    return ( 
        <>
            <div className="general-info">
                <h1>
                    Great start of 2023
                    <p className="small-heading">
                        Lorem ipsum dolor sit <br /> amet.
                    </p>
                </h1>
                <div className="infos">
                <section className="info-1">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore illo
                         necessitatibus nesciunt maxime architecto! Excepturi voluptate, repellat
                        vero recusandae amet quidem corrupti cumque nesciunt veniam aut tempore
                        facere cupiditate eos expedita nulla ad quam aliquid? Nesciunt commodi
                        voluptate ratione veritatis unde eum, natus esse placeat praesentium      
                    </p>
                </section>
                <section className="info-2">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt molestiae soluta laudantium atque, 
                        accusamus fuga alias. Laudantium eligendi cum veritatis molestiae eum dolores quis. Placeat!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis explicabo 
                        voluptate velit adipisci, asperiores obcaecati quisquam quod! Fugiat, est qui 
                        velit labore alias aut corrupti tempora molestias tenetur perspiciatis 
                        dignissimos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odio asperiores voluptas?
                    </p>
                </section>
                    <section className="btn">
                        <button className="button">
                            <span className="text">
                                <a href="">
                                    EDM
                                </a>
                            </span>
                        </button>
                    </section>
                </div>
            </div>
            
        </>
     );
}
 
export default Secondpage;