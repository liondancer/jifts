import React from 'react';
import {render} from 'react-dom';
// browserHistory handles history --> nice clean urls
import {BrowserRouter} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
// styles
import './styles/index.css';
import RootReducer from './reducers/index';
import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const store = configureStore();
const rootDOMNode = document.getElementById('app');

if (!rootDOMNode) {
  console.log("No 'app' element");
}

function renderRoot() {
  // Provider wraps our store into our react container components. Allows access to them
  // Wraps our entire application so it can be connected to our redux store!
  let root = (
    // AppContainer enables HMR and has to be the very root of the entire app. It automatically
    // disables itself in production (NODE_ENV==='production') so we don't need to check for
    // this here. https://github.com/gaearon/react-hot-loader/tree/master/docs
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </AppContainer>
  );
  render(root, rootDOMNode);
}

renderRoot();

// This performs the 'magic' of hot reloading. When the app is notified of the relevant
// dependency trees reloading, a) reload the root reducer and/or b) rebuild and re-render
// the entire app from the root up.

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(RootReducer);
  });
  module.hot.accept(['./components/App'], renderRoot);
}


//
// render(
//   // Provider wraps our store into our react container components. Allows access to them
//   // Wraps our entire application so it can be connected to our redux store!
//   <Provider store={store}>
//     <BrowserRouter>
//       <App/>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById('app')
//
// );
