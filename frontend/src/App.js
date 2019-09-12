import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import AdicionarTarefa from "./pages/AdicionarTarefa";

const classes = {
  container: {
    padding: "5%",
    margin: "0 auto"
  }
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div style={classes.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/adicionar" component={AdicionarTarefa} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
