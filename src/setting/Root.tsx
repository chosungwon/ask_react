import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "../Components/Main/App";
import Login from "../Components/Login/Login";

const Root = () => (
    <Router>
        <Route path={'/'} exact={true} component={App}/>
        <Route path={'/login'} component={Login}/>
    </Router>
)



export default Root;
