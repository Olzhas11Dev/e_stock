import React from 'react'
import dataItem from '../dataItem'
import '../style/itemsCards.css'

function ItemsCard() {
    return (
        <div className ='itemsCard_container'>
            {dataItem.map(function(e){
                return (
                    <div className='card'>
                        <img src={e.image} alt=""/>
                        <div className='card_content' >
                            <h4 className='itemsCard_title' >
                                {e.title}
                            </h4>
                            <h4 className='itemsCard_gender_descrip' >
                                {e.gender_description}
                            </h4>
                            <div className='card_price' >
                                $ {e.price}
                            </div>
                        </div> 
                    </div>
                )
            })} 
        </div>
    )
}

export default ItemsCard
