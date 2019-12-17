import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from "../Components/Main/App";

const Root: React.FC = () => (
    <Router>
        <Route path={'/'} exact={true} component={App}/>
    </Router>
)



export default Root;
