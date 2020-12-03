import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";
import thunk from "redux-thunk";

import customerReducer from "../reducers/customerSlice";

// import createSagaMiddleware from 'redux-saga'
// import rootSaga from '../sagas'
// import Reactotron from '../../debug/ReactotronConfig'
import { composeWithDevTools } from "redux-devtools-extension";

// const sagaMonitor = Reactotron.createSagaMonitor()
// const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
// const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer()))

const store = configureStore(
  { reducer: reducers },
  //   composeWithDevTools(),
  composeEnhancers(applyMiddleware(thunk))
  //   composeEnhancers(applyMiddleware(sagaMiddleware), Reactotron.createEnhancer())
);
// sagaMiddleware.run(rootSaga)

export default store;
