import React from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import Home from '../home/Home';
import Login from '../login/Login';
import NavBar from '../../components/navbar/NavBar'
class Main extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <NavBar />
                </div>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
            </BrowserRouter>
        )
    }
}

export default Main