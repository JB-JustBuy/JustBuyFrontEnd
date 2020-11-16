import React from 'react';
import {BrowserRouter,  Route, Link} from 'react-router-dom';
import {Home} from '../Home';
import {Login} from '../Login';
import {NavBar} from '../NavigationBar';

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


export {Main};