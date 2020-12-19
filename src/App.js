// import './App.css';
import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppNavigator from "./navigation/AppNavigator";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavigator />
      </div>
    </Provider>
  );
}

export default App;
