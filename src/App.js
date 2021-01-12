import react, {Component} from "react";
import React from "react";
import Counter from "./counter.jsx";
import './app.css';


class App extends Component {
  render() {
    return (
      <div className="App" style={{paddingTop : '400px', paddingRight : '0px'}}>
        <Counter />
      </div>
  );
  }
}

export default App;
