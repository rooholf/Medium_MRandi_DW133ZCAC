import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Content from "./Body/Content";
import OneZero from "./Body/OneZero";
import ArticlePage from "./Body/ArticlePage";
import MenuNavbar from "./Menu/MenuNavbar";
import Gaming from "./Body/Gaming"

function App() {
  return (
    <Router>
      <div>
        <MenuNavbar/>

        <Route path="/" exact component={Content}/>
        <Route path="/home" component={Content}/>
        <Route path='/onezero' component={OneZero}/>

        <Route path='/gaming' component={Gaming}/>
        <Route path='/articlepage' component={ArticlePage}/>
      </div>
    </Router>
  )
  }
export default App;

