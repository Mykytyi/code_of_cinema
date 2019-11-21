import React from 'react';
import './App.css';
import {rootReducer} from './reducers/index';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";

import MoviesList from "./containers/MovieList/MoviesList";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <MoviesList/>
    </Provider>
  );
}

export default App;
