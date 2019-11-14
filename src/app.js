import React from 'react';
import { Provider } from 'react-redux';
import Routing from './routing';
import createStore from './redux';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <Routing />
  </Provider>
);

export default App;
