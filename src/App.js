import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import CounterComponent from './CounterComponent';

const App = () => {
  return (
    //Wrapping the CounterComponent with the Provider and providing the store
    <Provider store={store}>
      <CounterComponent />
    </Provider>
  );
};

export default App;