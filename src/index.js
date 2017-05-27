import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import reducers from './reducers';

import App from './components/app';
import Setup from './container/setup';
import Main from './container/main';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
	    <BrowserRouter>
			<Switch>

				<Route path="/main" component={Main} />
				<Route path="/" component={Setup} />
				
			</Switch>
		</BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
