import React from 'react';
import { Link } from 'react-router-dom';
import kayakData from '../kayakData';

import './KayakCard.scss';

function KayakCard() {
  return (
    <div className="kayakCards">
        {kayakData.map((kayak) => {
            return (
                <div className="kayakCards__card">
                    <div className="kayakCards__card__banner">
                        {/* {kayak} */}
                        <span>D</span><span>Only at Dick's</span>
                        <span>D</span><span>New</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    </div>


                    <div className="kayakCards__card__details">
                        <div>{kayak.image}</div>
                        <div>{kayak.colors}</div>
                        <div>{kayak.itemName}</div>
                        <div>{kayak.price}</div>
                        <div>{kayak.availability ? <span>yes</span> : <span>no</span>}</div>
                        <div>{kayak.nearby ? <span>yes</span> : <span>no</span>}</div>
                    </div>
                    <div>
                        <Link to="/cart">Add To Cart</Link>
                    </div>
                </div>
            )
  
           
        })}
        
    </div>
  )
}

export default KayakCard;