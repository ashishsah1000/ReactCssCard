import React from 'react'
import "./card.css"
import facebook from "../images/facebook.svg"
import instagram from "../images/instagram.svg"
import twitter from "../images/twitter.svg"
import profile from "../images/profile-1.jpg"

const Card = ({name,role})=>{
    return(
        <div className="card">
            <div className="picture">
                <div className="cardContainer">
                    <div className="icons">
                        <div className="iconContainer">
                            <i ><img src={facebook} alt="" /></i>
                            <i ><img src={instagram} alt="" /></i>
                            <i ><img src={twitter} alt="" /></i>
                        </div>
                        
                    </div>
                </div>
               
                <div className="info">
                    <div className="pic">
                        <img src={profile} alt=""></img>
                    </div>
                    <div className="data">
                        <h4>{name}</h4>
                        <span>{role}</span>
                    </div>
                    <div className="more">
                        <a href="/">...</a>
                    </div>
                </div>
            </div>

            <div className="back"></div>
        </div>
    )
}

export default Card