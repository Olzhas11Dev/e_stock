import React from 'react'
import { Link } from 'react-router-dom'

function OneCard(props) {
   
    return (
        <div className='card'>
            <img src={props.items.image} alt=""/>
                <div className='card_content' >
                    <h4 className='itemsCard_title' >
                        {props.items.title}
                    </h4>
                    <h4 className='itemsCard_gender_descrip' >
                        {props.items.gender_description}
                    </h4>
                    <div className='card_price' >
                        $ {props.items.price}
                    </div>
              </div> 
          
        </div>
    )
}

export default OneCard
