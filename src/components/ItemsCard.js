import React,{ useState } from 'react'
import dataItem from '../dataItem'
import '../style/itemsCards.css'
import OneCard from './OneCard'

let btnsStatus = [
    {name:'Under $30', id: 0, status: false ,minPrice:0 ,maxPrice:30},
    {name:'$30-$70',   id: 1, status: false ,minPrice:30 ,maxPrice:70},
    {name:'$70-$90',   id: 2, status: false ,minPrice:70 ,maxPrice:90},
    {name:'Over $90',  id: 3, status: false ,minPrice:90 ,maxPrice:1000000}
]
function ItemsCard() {
    const[dataMod,setDataMod] = useState(dataItem)
    const[check,setCheck] = useState(btnsStatus)

///////// Change status    

    function changeStatus (e,item){
        let checkStatus = e.target.checked
            setCheck(check.map(function(elem){
                if(item.id===elem.id){
                    elem.status = checkStatus
                }
                return elem
            }))
        filterTrue()
    }

    function filterTrue(){
        let trueStatus = check.filter(e => e.status)     //Create array only for true status  e=> e.status===true As e.status is boolean not can cut it 
         console.log(trueStatus)
         let arrayData = dataItem.filter((element)=>{
             if(trueStatus.length===1){
                if( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice){
                    console.log(element.price)
                    return element
                }
             } 
             if(trueStatus.length===2){
                if (( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice)||
                    ( element.price>trueStatus[1].minPrice && element.price<trueStatus[1].maxPrice)){
                    console.log(element.price)
                    return element
                }
             } 
             else if(trueStatus.length===3){
                if (( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice)||
                    ( element.price>trueStatus[1].minPrice && element.price<trueStatus[1].maxPrice)||
                    ( element.price>trueStatus[2].minPrice && element.price<trueStatus[2].maxPrice)){
                    console.log(element.price)
                    return element
                }
             } 
         })
         setDataMod(arrayData)
         if(arrayData.length===0){
             setDataMod(dataItem)
         }
    }
   
    return (
        <div className ='itemsCard_container'>
            <div className='item_left' >
                <div className='items_left_btns' >
                    <h4>Shop by price</h4>
                    {btnsStatus.map(function(item){
                        return (
                            <div  key={item.id} className='left_btns_row' >
                                <input type="checkbox" name='btns' onChange={(e)=>changeStatus(e,item)} />
                                <div>{item.name}</div>
                            </div>
                        )
                    })}
                  
                </div>
            </div>
            <div className='item_right' >
                {dataMod.map(function(e){
                    return (
                    <OneCard items={e} key={e.id}/>
                    )
                })} 
                </div>
        </div>
    )
}

export default ItemsCard
