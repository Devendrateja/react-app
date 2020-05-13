import {observer} from "mobx-react"
import {observable} from "mobx"
import React from "react";
import { Link, Redirect } from "react-router-dom";
import logo from "../../logo.svg";

import {E_COMMERCE_PRODUCTS_PAGE_PATH} from "../../ProductsPageModule/constants/RouteConstants"

@observer
class HomePage extends React.Component{  
  
  gotoLoginPage =() =>{
    return (
      <Redirect
      to = {{
        pathname: '/grid-game'
      }}
      />
      )
  }
  
 render(){ 
  return (
    <div>
        <nav>
          <div>
              <Link key='Projects'  to="/">Projects</Link>
            </div>
            <div>
              <Link key='carApp' to="/carApp">Car App</Link>
            </div>
            <div>
              <Link key='formComponents' to="/formComponents">Form Components</Link>
            </div>
            <div>
              <Link key="countriesDashboardApp" to="/countriesDashboardApp">Countries Dashboard App</Link>
            </div>
            <div>
              <Link key='emojiGameApp' to="/emojiGameApp">Emoji Game Application</Link>
            </div>
            <div>
              <Link key="todoapp-mobx-2" to="/todoapp-mobx-2">Todo Application with MobX Store and Model</Link>
            </div>
            <div>
              <Link key='events' to="/events">Events App</Link>
            </div>
            <div>
              <Link key="providerprovider" to="/provider">provider App</Link>
            </div>
            <div>
              <Link key="grid-game" to="/grid-game">Grid Memory Game</Link>
            </div>
            <div>
              <Link key="userspage" to="/userspage">Users Page</Link>
            </div>
            <div>
              <Link key="login-page" to="/login-page">Login</Link>
            </div>
            <div>
              <Link key="signin" to="/ecommerce-store/sign-in/">Sign in</Link>
            </div>
            <div>
              <Link key="header" to={E_COMMERCE_PRODUCTS_PAGE_PATH}>e-commerce</Link>
            </div>
        </nav>
      </div>
        
  );
}
}

export default HomePage;