import React, { useContext } from "react";
import logo from "./logo.svg";
import Notifications from "./components/Notifications";
import {useShowNotification} from "./utlils/helper"
import { Store } from "./Store";
import "./App.css";

function App() {
  const { state, dispatch } = useContext(Store);
  const showNotification = useShowNotification(); 
  // const showNotification = (msg, time = 1000) => {
  //   dispatch({ type: "ADD_NOTIFICATION", payload:{msg} });
  //   setTimeout(() => {
  //     dispatch({ type: "DELETE_NOTIFICATION" });
  //   }, time);
  // };
  return (
    <div className="App">
      <Notifications />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            showNotification("hello",4000)   
          }}
        ></button>
      </header>
    </div>
  );
}

export default App;
