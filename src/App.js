import Navbar from './components/Navbar'
import ItemsCard from './components/ItemsCard'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Men from './components/Men'
import Women from './components/Women'
import Accessoires from './components/Accessoires'
import Cart from './components/Cart'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ItemsCard/>
          </Route>
          <Route path="/men">
              <Men/>
          </Route>
          <Route path="/women">
              < Women/>
          </Route>
          <Route path = "/accessoires">
              <Accessoires/>
          </Route>
          <Route path="/cart" >
              <Cart/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
