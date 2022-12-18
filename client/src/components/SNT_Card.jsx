import React, { Fragment, useState } from 'react'
import Card from './Card'
import './Agents.css'
const ACM_Card = () => {
  const[detail,setDetail]=useState(Card)
  return (
   
    <Fragment>
    
    <section className="agents">

    <div id='about' className="agents-heading">
    <span>Agents</span>
    <h2> Our Agents </h2>
    </div>

    <div className="agents-row">
        {
            detail.map((detail,index)=>{
                return(
                    <div key={index} className="agents-column" style={{backgroundColor:"rgba(255,255,255,0.2)"}}>
                        <div className="agents-card">
                            <div className="agent-thumb">
                            <img src={detail.Image} alt="agent" />
                            <div className="social-link">
                                <ul>
                                    <li>
                                       <a alt="facebook" href="#"><img style={{width:"clamp(40px,10%,500px)",height:"clamp(40px,10%,500px)"}} src={require('../images/facebook.png')} /></a>
                                    </li>
                                    <li>
                                       <a href="#">

                                       <img alt="twitter" style={{width:"clamp(40px,10%,500px)",height:"clamp(40px,10%,500px)"}} className="socialImage" src={require('../images/twitter.png')} />
                                       </a>
                                    </li>
                                    <li>
                                       <a href="#"> 

                                       <img alt='instagram' style={{width:"clamp(40px,10%,500px)",height:"clamp(40px,10%,500px)"}} className="socialImage" src={require('../images/instagram.png')} />
                                        </a>
                                    </li>
                                </ul>
                            </div>                       
                            </div>

                            <div className="agent-info">
                            <h3> {detail.name}</h3>
                            <p>{detail.info}</p>
                            </div>

                        </div>
                    </div>
                )
            })
        }
    </div>

    </section> 

    </Fragment>
  )
}

export default ACM_Card
