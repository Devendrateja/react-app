import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage/index.js";
import Page1 from "./components/Page1";
import "./App.css";


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


import {observable} from 'mobx';
// import {configure} from "mobx";
import themeStore from "./stores/ThemeStore/"




class App extends React.Component {
  
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/counter-page">
          <CounterPage />
        </Route>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/carApp">
            <CarsList />
        </Route>

        <Route path="/formComponents">
            <FormComponents />
        </Route>
        <Route path="/countriesDashboardApp">
            <Header onChangeTheme={themeStore.updateTheme} />
            <CountriesDashhBoardApp onChangeTheme={themeStore.updateTheme} selectedTheme={themeStore.getCurrentTheme()}/>
        </Route>
        <Route exact path="/redirectToCountryDetails/:countryCode">
            <Header onChangeTheme={themeStore.updateTheme} />
            <CountryDetails selectedTheme={themeStore.getCurrentTheme()} onChangeTheme={themeStore.updateTheme}/>
        </Route>
        <Route exact path="/emojiGameApp">
            <EmojiGame />
        </Route>

        <Route exact path="/todoapp-mobx-2">
            <TodoApp />
        </Route>
         <Route exact path="/events">
            <Event />
        </Route>
        <Route exact path="/provider">
            <ProviderExample />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
  }
};




export default (App);



//selectedTheme={themeStore.getCurrentTheme()}