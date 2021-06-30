import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {createStore, applyMiddleware, compose} from 'redux'
// import rootReducer from './store/reducers/rootReducer'
// import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import {
//   ReactReduxFirebaseProvider,
//   getFirebase
// } from 'react-redux-firebase'
// import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
// import firebase from 'firebase/app'
// import fbconfig from './config/fbconfig'

// const store = createStore(rootReducer, compose(
//   applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//   reduxFirestore(fbconfig)
// )
// )

// const rrfProps = {
//   firebase,
//   config: fbconfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  ReactReduxFirebaseProvider,
  getFirebase
} from 'react-redux-firebase'
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore' // <- needed if using firestore
import firebase from 'firebase/app'
import fbconfig from './config/fbconfig'
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reduxFirestore(fbconfig)
),
)

const rrfProps = {
  firebase,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
   </ReactReduxFirebaseProvider>
  </Provider>
  ,
  document.getElementById('root')
);

reportWebVitals();
