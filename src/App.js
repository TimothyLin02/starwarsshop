import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import { ShopProvider } from './components/hoc/context/ShopContext'
import ShopItems from './components/hoc/ShopItems'
import Summary from './components/orderSummary/Summary'
import Controls from './components/orderControls/Controls'

function App() {
  return (
    <ShopProvider>
      <h1>StarWars Shop</h1>
      <Switch>
        <Route exact path="/summary" component={Summary}/>
        <Route exact path="/shop" component={ShopItems}/>
        <Route exact path="/" component={ShopItems}/>
      </Switch>
    </ShopProvider>
  );
}

export default App;
