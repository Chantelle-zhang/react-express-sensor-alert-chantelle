import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Monitor from './component/Monitor/Monitor';
import Alert from './component/Alert/Alert';
import { beerData, isLoading, unSafeBeers } from './store/reducer';
import './App.scss'

const middleware = [thunk];

const reducer = combineReducers({
  beerData,
  isLoading,
  unSafeBeers
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

const App = () => (
  <Provider store={store}>
    <div className="container">
      <Alert />
      <Monitor />
    </div>
  </Provider>
);

export default App;
