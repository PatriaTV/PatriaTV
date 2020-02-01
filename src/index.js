import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Movie from './components/Movie';
import Company from './components/Company';
import NotFound from './components/NotFound';
import * as serviceWorker from './serviceWorker';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/company/:id' component={Company} />
            <Route path='/movie/:id' component={Movie} />
            <Route component={NotFound} />
        </Switch>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
