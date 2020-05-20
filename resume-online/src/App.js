import React from "react";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App" style={app_style}>
      <LandingPage />
    </div>
  );
}

export default App;

const app_style = {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
};
