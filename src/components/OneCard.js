import React from 'react'

function OneCard({items}) {
    return (
        <div className='card'>
            <img src={items.image} alt=""/>
            <div className='card_content' >
                <h4 className='itemsCard_title' >
                    {items.title}
                </h4>
                <h4 className='itemsCard_gender_descrip' >
                    {items.gender_description}
                </h4>
                <div className='card_price' >
                    $ {items.price}
                </div>
        </div> 
    </div>
    )
}

export default OneCard
