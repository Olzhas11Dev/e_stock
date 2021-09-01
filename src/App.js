import { useState } from 'react'
import Navbar from './components/Navbar'
import ItemsCard from './components/ItemsCard'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women'
import Accessoires from './components/Accessoires'
import Cart from './components/Cart'
import Products from './components/Products'



function App() {
  const[bagList,setBagList] = useState([])
 
  function putToBag (chosenItem){         
    let exist = bagList.find( elem => elem.id===chosenItem.id) 
      if(!exist){ 
        setBagList([...bagList,chosenItem])   ///[{},{}]
        } 
      }

 function remove (item){
    setBagList(bagList.filter ( elem  => elem.id!==item.id))
 }   

  return (
    <Router>
      <div className="App">
        <Navbar  bagList={bagList}/>
        <Switch>
            <Route exact path="/" component={()=><ItemsCard />}  />
            <Route path="/men"    component={()=><Men />} />  
            <Route path="/women" component={()=>< Women/> }/>
            <Route path = "/accessoires" component={()=><Accessoires/>}/>
            <Route path="/cart" component={()=><Cart remove={remove} bagList={bagList}/>}/>
            <Route path="/product/:id" render = {(props)=> <Products {...props}  putToBag={putToBag}/>} />  //Sending props   
        </Switch>
      </div>
    </Router>
  );
}

export default App;
