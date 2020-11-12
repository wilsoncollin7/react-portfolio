import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import components
import { Home, Projects, Contact, About, NoMatch} from "./pages";
// import Home from "./pages/Home";
// import Projects from "./pages/Projects";
// import Contact from "./pages/Contact";
// import About from "./pages/About";
// import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav/Nav";

class App extends React.Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL + "/"}>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={NoMatch} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
