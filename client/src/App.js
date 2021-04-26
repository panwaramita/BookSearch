import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import Search from "./components/searchBook";
import Save from "./components/saveBook";
import {BrowserRouter as Router,Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Search}></Route>
      <Route exact path="/save" component={Save}></Route>
    </div>
    </Router>
  );
}

export default App;
