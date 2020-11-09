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
      <Switch>
        <Route path="/" component={Search} />
        <Route path='/search' component={Search}> </Route>
      </Switch>
    </Router>
  );
}


export default App;
