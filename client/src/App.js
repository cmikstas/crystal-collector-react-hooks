import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactExample from "./pages/ReactExample";

function App()
{
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route component={ReactExample} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;