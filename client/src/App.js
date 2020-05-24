import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" style={app_style}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <LandingPage /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

const app_style = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
};
