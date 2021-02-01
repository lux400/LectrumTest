import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { App } from './App';
import store, { history } from './store';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
       <App/>
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

render();
