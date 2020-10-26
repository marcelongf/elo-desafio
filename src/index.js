import React from 'react';
import ReactDOM from 'react-dom';
import ReduxToastr from 'react-redux-toastr'
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store';
import * as serviceWorker from './serviceWorker';

import './index.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <ReduxToastr 
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          getState={(state) => state.toastr} // This is the default
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
        />
      </div>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
