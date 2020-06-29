import React, { Component } from "react";
import AddSmurfForm from '../components/addSmurfForm';
import "./App.css";
import SmurfList from "./smurfList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>💙 Smurfs 💙</h1>
        <AddSmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
