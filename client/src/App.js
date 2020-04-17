import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import ReactExample from "./pages/ReactExample";
import CrystalCollector from "./pages/CrystalCollector";

function App()
{
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route component={CrystalCollector} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;