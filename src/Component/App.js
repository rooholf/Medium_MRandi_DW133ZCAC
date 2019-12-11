import React from "react";

import MenuHeader from "./Menu/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Segment } from "semantic-ui-react";
import Content from "./Body/Content";
import Category from "./Body/Categories/Category";
import OneZero from "./Body/Categories/OneZero";

function App() {
  return (
    <Router>
      <div>
        <MenuHeader />

        <Route path="/" exact component={Content}/>
        <Route path='/onezero' component={OneZero}/>
      </div>
    </Router>
  );
}

export default App;
