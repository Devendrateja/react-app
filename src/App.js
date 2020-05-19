import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "mobx-react"
import "./App.css";
import HomePage from "./components/HomePage/index.js";
import Page1 from "./components/Page1";
import CounterPage from "./components/CounterPage/index"
import {CarsList} from "./components/CarsList";
import {FormComponents} from "./components/formsApp/formComponents"
import CountriesDashhBoardApp from "./components/countriesDashboardApp/countriesDashboard";
import CountryDetails from "./components/countriesDashboardApp/redirectToCountryDetails"
import Header from "./components/countriesDashboardApp/header"
import EmojiGame from "./components/EmojiGameApp/EmojiGame"
import TodoApp from "./components/TodoApp-mobx-2/TodoApp"
import Event from "./components/EventsApp/index"
import ProviderExample from "./components/Provider/Provider"
import GridMemoryGame from "./components/GridMemoryGame/index"
import UserLoginPage from "./components/UserLoginPage"
import routes from "./AuthenticationModule/routes"
import productsPageRoutes from "./ProductsPageModule/routes"
import PracticeAdvancedConceptsRoute from "./common/routes/PracticeAdvancedConceptsRoute/PracticeAdvancedConceptsRoute"



import {observable} from 'mobx';
import themeStore from "./stores/ThemeStore/"

import UsersPage from "./components/UsersPage"
import stores from "./stores"

class App extends React.Component {
    
  render(){
  return (
    <Provider {...stores}>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/counter-page">
          <CounterPage />
        </Route>
        <Route   exact path="/page-1">
          <Page1 />
        </Route>
        <Route  path="/carApp">
            <CarsList />
        </Route>

        <Route  path="/formComponents">
            <FormComponents />
        </Route>
        <Route  path="/countriesDashboardApp">
            <Header onChangeTheme={themeStore.updateTheme} />
            <CountriesDashhBoardApp onChangeTheme={themeStore.updateTheme} selectedTheme={themeStore.getCurrentTheme()}/>
        </Route>
        <Route  exact path="/redirectToCountryDetails/:countryCode">
            <Header onChangeTheme={themeStore.updateTheme} />
            <CountryDetails selectedTheme={themeStore.getCurrentTheme()} onChangeTheme={themeStore.updateTheme}/>
        </Route>
        <Route  exact path="/emojiGameApp">
            <EmojiGame />
        </Route>

        <Route  exact path="/todoapp-mobx-2">
            <TodoApp />
        </Route>
         <Route exact path="/events">
            <Event />
        </Route>
        <Route exact path="/provider">
            <ProviderExample />
        </Route>
        <Route  exact path="/grid-game">
            <GridMemoryGame />
        </Route>
        <Route path="/userspage" component = { UsersPage }/>
        <Route  path="/login-page" component = { UserLoginPage }/>
           {routes}
           {productsPageRoutes}
        <Route path="/practice-advanced-concepts">
          <PracticeAdvancedConceptsRoute />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
  }
};




export default (App);



//selectedTheme={themeStore.getCurrentTheme()}