import './style.less';
import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Template from 'components/template';
import HomePage from 'containers/pages/home';
import DetailsPage from 'containers/pages/details';
import SettingsPage from 'containers/pages/settings';

export default class App {

    constructor(o = {}) {
        this.$root = o.rootElement;
        this.store = o.store;
    }
    init() {

    }
    render() {
        const history = syncHistoryWithStore(browserHistory, this.store);

        ReactDom.render(
            (<Provider store={this.store}>
                <Router history={history}>
                    <Route path="/" component={Template}>
                        <IndexRoute component={HomePage}/>
                        <Route path="details" component={DetailsPage}/>
                        <Route path="settings" component={SettingsPage}/>
                    </Route>
                </Router>
            </Provider>)
            , this.$root
        )
    }
}