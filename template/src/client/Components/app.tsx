import * as React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import Web3 from "web3";

import "../Less/app.less";
import Home from "./Home";
import { connectors } from "../utils/connectors";
import Web3Provider from "web3-react";

const App: React.FC = () => {
  return (
    <div className="layout">
      <Web3Provider
        connectors={connectors}
        web3Api={Web3}
        libraryName={"web3.js"}
      >
        <Router>
          <div className="menu">
            <Link to="/">Home</Link>
          </div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </Web3Provider>
    </div>
  );
};

export default App;
