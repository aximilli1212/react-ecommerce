import React from 'react'
import {Switch, Route} from "react-router-dom";
import Homepage from "./Homepage/homepage.component";
import './App.css';

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
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
