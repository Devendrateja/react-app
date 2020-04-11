import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index.js";
import Page1 from "./components/Page1";
import "./App.css";


import CounterPage from "./components/CounterPage/index.js"
import {CarsList} from "./components/CarsList";
import {Todo} from "./components/todoApp/index.js";
import {FormComponents} from "./components/formsApp/formComponents.js"
import CountriesDashhBoardApp from "./components/countriesDashboardApp/countriesDashboard.js";
import CountryDetails from "./components/countriesDashboardApp/redirectToCountryDetails.js"
import Header from "./components/countriesDashboardApp/header.js"
import EmojiGame from "./components/EmojiGameApp/EmojiGame.js"
import Counter from "./components/CounterPage-2/CounterPage-2.js"
//import TodoApp from "./components/TodoApp-mobx/TodoApp.js"
import TodoApp from "./components/TodoApp-mobx-2/TodoApp.js"
import Event from "./components/EventsApp/index.js"
import ProviderExample from "./components/Provider/Provider.js"


import {observable} from 'mobx';
// import {configure} from "mobx";
import themeStore from "./stores/ThemeStore/"



// configure ({ enforceActions:true })



// const config = {
  
// }


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
        <Route path="/todosApp">
            <Todo />
        </Route>
        <Route path="/formComponents">
            <FormComponents />
        </Route>
        <Route path="/countriesDashboardApp">
            <Header onChangeTheme={themeStore.updateTheme} selectedTheme={themeStore.getCurrentTheme()}/>
            <CountriesDashhBoardApp onChangeTheme={themeStore.updateTheme} selectedTheme={themeStore.getCurrentTheme()}/>
        </Route>
        <Route exact path="/redirectToCountryDetails/:countryCode">
            <Header onChangeTheme={themeStore.updateTheme} selectedTheme={themeStore.getCurrentTheme()}/>
            <CountryDetails selectedTheme={themeStore.getCurrentTheme()} onChangeTheme={themeStore.updateTheme}/>
        </Route>
        <Route exact path="/emojiGameApp">
            <EmojiGame />
        </Route>
        <Route exact path="/CounterPage-2">
            <Counter />
        </Route>
        {/*<Route exact path="/todoapp-mobx">
            <TodoApp />
        </Route> */}
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



