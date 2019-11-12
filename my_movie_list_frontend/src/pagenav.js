import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LogIn from './LogIn/login'
import SignUp from './SignUp/signup'


class PageNav extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path = "/" exact component = {LogIn}/>
                    <Route path = "/SignUp" exact component = {SignUp}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default PageNav;
