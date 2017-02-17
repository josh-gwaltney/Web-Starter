import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Home from './home';
import TopBar from './template/top-bar';
import Template from './template/template';

ReactDOM.render((
    <Router history={ browserHistory }>
        <Route component={ Template }>
            <Route path="/" component={ Home } />
        </Route>
    </Router>
), document.getElementById('root'));