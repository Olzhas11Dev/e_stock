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

const[listItems,setListItems] = useState([])
const[oneItem,setOneItem] = useState()

function addToList (some){
  // setListItems([...listItems,some])
  setOneItem(some)
}


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
            <Route exact path="/" component={()=><ItemsCard addToList={addToList}/>}  />
            <Route path="/men"    component={()=><Men addToList={addToList}  
                setListItems={setListItems}
                listItems={listItems} />} />  
            <Route path="/women">
                < Women/>
            </Route>
            <Route path = "/accessoires">
                <Accessoires/>
            </Route>
            <Route path="/cart" >
                <Cart/>
            </Route>
            <Route path="/product" component = {()=> <Products oneItem={oneItem}/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
