import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import App2 from './App2';

const root = ReactDOM.createRoot(document.getElementById('root'));
// #3. Store 연결
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <App2 />
    </Provider>
  </React.StrictMode>
);
