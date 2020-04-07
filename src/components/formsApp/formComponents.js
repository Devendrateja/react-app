import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Greetings} from "./greetings.js"
import {FavouriteDessert,DessertsList} from "./favouriteDessert.js"
import {VisitedCities, CityList} from "./visitedCities.js"
import {YourState} from "./yourState.js"
import {DisableOrEnable} from "./disableButton.js"
//import {Counter} from "./favouriteDessert.js"
function FormComponents(){
  return (
    <Router>
   <h1>Forms</h1>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link to="/greetings">Greetings</Link>
                    </li>
                    <li>
                    <Link to="/favouriteDessert">Favourite Dessert</Link>
                    </li>
                    <li>
                    <Link to="/visitedCities">Visited Cities</Link>
                    </li>
                    <li>
                    <Link to="/yourState">Your State</Link>
                    </li>
                    <li>
                    <Link to="/disableButton">Disable Button</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path="/greetings">
                <Greetings />
                </Route>
                <Route path="/favouriteDessert">
                <FavouriteDessert typesOfDesserts={DessertsList()} />
                </Route>
                <Route path="/visitedCities">
                <VisitedCities cities={CityList()}/>
                </Route>
                <Route path="/yourState">
                <YourState stateList={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
                </Route>
                <Route path="/disableButton">
                <DisableOrEnable />
                </Route>
            </Switch>
        </div>
    </Router>
    );
}

export { FormComponents,Greetings,FavouriteDessert,VisitedCities};



