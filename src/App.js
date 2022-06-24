import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
