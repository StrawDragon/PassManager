import App from 'containers/app';
import reducer from 'reducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

let app = new App({
    rootElement: document.getElementById('root'),
    store: createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
});

app.init();
app.render();
