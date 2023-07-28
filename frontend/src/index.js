// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import ContactUs from './ContactUs';
// import store from './store';
// import './index.css';

// ReactDOM.render(
//   <Provider store={store}>
//     <ContactUs />
//   </Provider>,
//   document.getElementById('root')
// );
