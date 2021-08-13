import React from 'react'

function Cart({bagList}) {
    console.log(bagList)
    return (
        <div>
            {bagList.map((element)=>{
                return (
                    <div key={element.id} >{element.price}</div>
                )
            })}
        </div>
    )
}

export default Cart
