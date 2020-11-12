import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import components
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";

function App() {



  
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="*" component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
