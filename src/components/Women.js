import React,{ useState } from 'react'
import dataItem from '../dataItem'
import OneCard from './OneCard'
import dataBtns from '../dataBtns'
import { Link } from 'react-router-dom'

function Women(props) {
    const womenStock = dataItem.filter(elem=>elem.gender==='Women')
    const[womenData,setWomenData] = useState(womenStock)
    const[checkBtnStatus,setCheckBtnsStatus] = useState(dataBtns)

    function changeBtns(e,item){
        let checkStatus = e.target.checked 
       setCheckBtnsStatus(dataBtns.map(function(elem){
           if(elem.id===item.id){
               elem.status = checkStatus
           }
           return elem
       }))
       filterTrueStatus ()
    }
    
    function filterTrueStatus(){
        let trueOnlyArr = checkBtnStatus.filter(item=>item.status)   
      
       let filteredArray =  womenStock.filter(function(element){
            if(trueOnlyArr.length===1){
                if(element.price>trueOnlyArr[0].minPrice && element.price<trueOnlyArr[0].maxPrice ){
                return element
                }
            }
            else if(trueOnlyArr.length===2){
                if((element.price>trueOnlyArr[0].minPrice && element.price<trueOnlyArr[0].maxPrice ) ||
                (element.price>trueOnlyArr[1].minPrice && element.price<trueOnlyArr[1].maxPrice )){
                return element
                }
            }
            else if(trueOnlyArr.length===3){
                if((element.price>trueOnlyArr[0].minPrice && element.price<trueOnlyArr[0].maxPrice ) ||
                (element.price>trueOnlyArr[1].minPrice && element.price<trueOnlyArr[1].maxPrice ) ||
                (element.price>trueOnlyArr[2].minPrice && element.price<trueOnlyArr[2].maxPrice )){
                return element
                }
            }
            })
            setWomenData(filteredArray)

        if(trueOnlyArr.length===0 || trueOnlyArr.length===4){
            setWomenData(womenStock)
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
                            <input type="checkbox" name='btns' onChange={(e)=>changeBtns(e,item)} />
                            <div>{item.name}</div>
                        </div>
                    )
                })}
              
            </div>
        </div>
        <div className='item_right' >
            {womenData.map(function(e){
                return (
                <Link className='items_links' key={e.id} to={`/product/${e.id}`}>
                    <OneCard  items={e} key={e.id}/>
                </Link>
                )
            })} 
            </div>
    </div>
    )
}

export default Women
