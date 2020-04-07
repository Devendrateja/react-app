import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage/index.js";
import Page1 from "./components/Page1";
import "./App.css";



import {CarsList} from "./components/CarsList";
import {Todo} from "./components/todoApp/index.js";
import {FormComponents} from "./components/formsApp/formComponents.js"
import CountriesDashhBoardApp from "./components/countriesDashboardApp/countriesDashboard.js";
import CountryDetails from "./components/countriesDashboardApp/redirectToCountryDetails.js"
import Header from "./components/countriesDashboardApp/header.js"
import EmojiGame from "./components/EmojiGameApp/EmojiGame.js"


export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      selectedTheme : 'Light mode'
    }
  }
  
  onChangeTheme = () => {
        let theme = (this.state.selectedTheme === 'Light mode') ? 'Dark mode' : 'Light mode'
        this.setState({selectedTheme : theme})
  }
  
  render(){
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
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
            <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
            <CountriesDashhBoardApp onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
        </Route>
        <Route exact path="/redirectToCountryDetails/:countryCode">
            <Header onChangeTheme={this.onChangeTheme} selectedTheme={this.state.selectedTheme}/>
            <CountryDetails selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme}/>
        </Route>
        <Route exact path="/emojiGameApp">
            <EmojiGame />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
  }
};
