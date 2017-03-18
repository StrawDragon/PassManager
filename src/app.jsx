import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Template from 'components/template';
import HomePage from 'containers/pages/home';
import DetailsPage from 'containers/pages/details';
import SettingsPage from 'containers/pages/settings';




export default class App {

    constructor() {
        this.$root = document.getElementById('root') || document.body;
    }
    init() {
        ReactDom.render(
            (<Router history={browserHistory}>
                <Route path="/" component={Template}>
                    <IndexRoute component={HomePage} />
                    <Route path="details" component={DetailsPage} />
                    <Route path="settings" component={SettingsPage} />
                </Route>
            </Router>)
            ,this.$root
        )
    }
}