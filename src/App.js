import React from 'react'
import {Switch, Route} from "react-router-dom";
import Homepage from "./Homepage/homepage.component";
import ShopPage from "./Shop/shop.component";
import './App.css';
import Header from "./components/Header/header.component";

const HatsPage = ()=>(
    <div>
        <h1>
            HATS PAGE
        </h1>
    </div>
)

function App() {
  return (
    <div className="App">
        <Header/>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/shop' component={ShopPage} />
            <Route path='/shop/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
