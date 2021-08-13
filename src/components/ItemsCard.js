import React,{ useState } from 'react'
import dataItem from '../dataItem'
import '../style/itemsCards.css'
import OneCard from './OneCard'
import dataBtns from '../dataBtns'

function ItemsCard(props) {
    const[dataMod,setDataMod] = useState(dataItem)
    const[check,setCheck] = useState(dataBtns)

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
         let arrayData = dataItem.filter((element)=>{
             if(trueStatus.length===1){
                if( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice){
                    return element
                }
             } 
             if(trueStatus.length===2){
                if (( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice)||
                    ( element.price>trueStatus[1].minPrice && element.price<trueStatus[1].maxPrice)){
                    return element
                }
             } 
             else if(trueStatus.length===3){
                if (( element.price>trueStatus[0].minPrice && element.price<trueStatus[0].maxPrice)||
                    ( element.price>trueStatus[1].minPrice && element.price<trueStatus[1].maxPrice)||
                    ( element.price>trueStatus[2].minPrice && element.price<trueStatus[2].maxPrice)){
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
                    {dataBtns.map(function(item){
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
                    <OneCard addToList={props.addToList} items={e} key={e.id}/>
                    )
                })} 
                </div>
        </div>
    )
}

export default ItemsCard
