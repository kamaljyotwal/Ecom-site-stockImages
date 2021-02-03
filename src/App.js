import './App.css';
import Header from './COMPONENTS/Header'
import Cart from './PAGES/Cart';
import Photos from './PAGES/Photos';
import { Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
