import React from 'react'

function Products({oneItem}) {
   console.log(oneItem)
    return (
        <div>
           {oneItem?oneItem.title:null} 
           <img src={oneItem ?oneItem.image:null} alt=""/>
        </div>
    )
}

export default Products
