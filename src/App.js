import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Error from "./component/Error/Error";
import Home from './component/Home/Home';
import TeamDetails from './component/TeamDetails/TeamDetails';


function App() {
  return (
    <div>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/home">
              <Home/>
            </Route>
            <Route exact path="/details/:teamId">
              <TeamDetails/>
            </Route>
            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
