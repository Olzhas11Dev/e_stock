import React,{ useState } from 'react'
import dataItem from '../dataItem'
import '../style/itemsCards.css'
import OneCard from './OneCard'

let btnsStatus = [
    {name:'Under $30',id: 0, status: false },
    {name:'$30-$70'  ,id: 1, status: false },
    {name:'$70-$90',  id: 2, status: false },
    {name:'Over $90',id: 3, status: false },
]

function ItemsCard() {
    const[dataMod,setDataMod] = useState(dataItem)
    const[check,setCheck] = useState(btnsStatus)

    function changeStatus (e,item){
        let checkStatus = e.target.checked
        if(checkStatus){
            setCheck(check.map(function(elem){
                if(item.id===elem.id){
                    elem.status=true
                }
                return elem
            }))
        } else{
            setCheck(check.map(function(elem){
                if(item.id===elem.id){
                    elem.status=false
                }
                return elem
            }))
        }
       
    }

     console.log(check)
    return (
        <div className ='itemsCard_container'>
            <div className='item_left' >
                <div className='items_left_btns' >
                    <h4>Shop by price</h4>
                    {btnsStatus.map(function(item){
                        return (
                            <div  key={item.id} className='left_btns_row' >
                                <input type="checkbox" onChange={(e)=>changeStatus(e,item)} />
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
