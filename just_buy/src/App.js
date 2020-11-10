import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/Home';
import NavBar from './components/nav_bar/NavBar'

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      </div>    
      <Switch>
        <Route path="/" component={Home} />
        <Route path='/search' component={Home}> </Route>
      </Switch>
    </Router>
  );
}


export default App;
