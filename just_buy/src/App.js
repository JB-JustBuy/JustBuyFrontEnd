import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/home';
import Search from './components/Search/search'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/"> Home </Link></li>
            <li><Link to="/"> About </Link></li>
            <li><Link to="/"> Users </Link></li>
          </ul>
        </nav>
      </div>
      
      <Switch>
        <Route path="/" component={Search} />
        <Route path='/search' component={Search}> </Route>
      </Switch>
    </Router>
  );
}


export default App;
