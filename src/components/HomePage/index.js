import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";

function App() {
  return (
    <div>
        <nav>
          <div>
              <Link to="/">Projects</Link>
            </div>
            <div>
              <Link to="/carApp">Car App</Link>
            </div>

            <div>
              <Link to="/formComponents">Form Components</Link>
            </div>
            <div>
              <Link to="/countriesDashboardApp">Countries Dashboard App</Link>
            </div>
            <div>
              <Link to="/emojiGameApp">Emoji Game Application</Link>
            </div>
            <div>
              <Link to="/todoapp-mobx-2">Todo Application with MobX Store and Model</Link>
            </div>
            <div>
              <Link to="/events">Events App</Link>
            </div>
            <div>
              <Link to="/provider">provider App</Link>
            </div>
            <div>
              <Link to="/grid-game">Grid Memory Game</Link>
            </div>
        </nav>
        </div>
  );
}

export default App;


