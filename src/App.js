import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Home from "./Components/Home";
import Components from "./Components/Components";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
// import styles from "./App.sass";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/components">
          <Components />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
