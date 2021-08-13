import React from 'react'
import '../style/products.css'

function Products({oneItem,putToBag}) {
    return (
        <div className="products" >
            <div className='products_left'>
                <img src={oneItem ? oneItem.image:null} alt=""/>
            </div>
            <div className='products_right'>
                 <h1>{oneItem ? oneItem.title:null} </h1>
                 <div className="products_price" >
                     <div>Price</div>
                     <div> $ {oneItem ? oneItem.price : null}</div>
                 </div>
                 <h3>Description</h3>
            <div className="products_description" >
                 {oneItem ? oneItem.description : null}
            </div>
                <button onClick={()=> putToBag(oneItem)} >Add to Bag</button>
            </div>
        </div>
    )
}

export default Products
