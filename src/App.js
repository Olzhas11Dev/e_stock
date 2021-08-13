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


const[oneItem,setOneItem] = useState()
const[bagList,setBagList] = useState([])

function addToList (someItem){
  setOneItem(someItem)
}

function putToBag (chosenItem){          ///[{},{}]
  setBagList([...bagList,chosenItem])
}

  return (
    <Router>
      <div className="App">
        <Navbar  bagList={bagList}/>
        <Switch>
            <Route exact path="/" component={()=><ItemsCard addToList={addToList}/>}  />
            <Route path="/men"    component={()=><Men addToList={addToList}   />} />  
            <Route path="/women" component={()=>< Women/> }/>
            <Route path = "/accessoires" component={()=><Accessoires/>}/>
            <Route path="/cart" component={()=><Cart bagList={bagList}/>}/>
            <Route path="/product" component = {()=> <Products  putToBag={putToBag} oneItem={oneItem}/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
