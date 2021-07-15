
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './Login'
import Countries from './Countries'
import Register from './Register'
function App() {
  return (
    <Router>
      

        
        <Switch>
        <Route exact path="/">
            <div className="login-page">
              <Login /><br />
              <Link to="/register" className="btn btn-primary">Sign up</Link>
              <Link to="/select-countries" className="btn btn-primary">continue</Link>
            </div>
        </Route>
          
        <Route path="/select-countries/" >
            <Countries />
        </Route>
        <Route path="/register" exact>
            <Register />
        </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
