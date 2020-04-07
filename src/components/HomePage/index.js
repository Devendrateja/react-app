import React from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "tailwindcss"

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
              <Link to="/todosApp">Todos App</Link>
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
        </nav>
        </div>
  );
}

export default App;


