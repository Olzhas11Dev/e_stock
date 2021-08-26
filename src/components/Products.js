import dataItem from '../dataItem'
import '../style/products.css'

function Products(props) {

    let currentId = props.match.params.id  
    let getItemData = dataItem[currentId]
    
    return (
        <div className="products" >
            <div className='products_left'>
                <img src= {`../../${getItemData.image}`} alt=""/>
            </div>
            <div className='products_right'>
                 <h1>{getItemData.title}</h1>
                 <div className="products_price" >
                     <div>Price </div>
                     <div> $ {getItemData.price}</div>
                 </div>
                 <h3>Description</h3>
            <div className="products_description" >
                {getItemData.description}
            </div>
                
                <button onClick={()=>props.putToBag(getItemData)}>Add to Bag</button>
            </div>
        </div>
    )
}

export default Products
