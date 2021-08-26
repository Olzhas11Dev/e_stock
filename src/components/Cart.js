import React ,{ useState}from 'react'
import '../style/cart.css'

function Cart({bagList,remove}){
   
    let storage = 0
    let sum = bagList.map(e => storage+=e.price)
   
    return (
        <div className='cart_main' >
            <div className='cart_left'>
                <h1>Bag</h1>
            {bagList.map((element)=>{
                return (
                    <div className='cart_item'  key={element.id} >
                        <div className= "cart_item_left">
                            <img src={element.image} alt=""/>
                        </div>
                        <div className= "cart_item_right">
                            <div className='cart_title' >{element.title}</div>
                            <div className='cart_description' >{element.description}</div>
                             <div className='cart_btn_rem' onClick={()=>remove(element)}>Remove</div>
                        </div>
                        <div className='cart_price' >${ element.price }</div>
                    </div>
                )
            })}
            </div>
            <div className='cart_main_right'>
                <h1>Summary</h1>
                <div className='cart_subtotal' >
                     <div> Subtotal </div>
                    {sum.length!==0 ? <div>${sum[sum.length-1]}</div>: <div>$0</div>}
                </div>
               
            </div>
        </div>
    )
}

export default Cart
