import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.css";

class Counter extends Component {
state = {
    count: 0
};

styles = {
    fontSize: 20,
    fontWeight: "bold"
}

increment = () => {
    this.setState({
        count: this.state.count + 1
    });
};
decrement = () => {
    this.setState({
        count: this.state.count - 1
    });
};
    render() {
        let classes;
        if(this.state.count === 0) {
            classes = "badge badge-warning m-2"
        }
        else if(this.state.count > 0) {
            classes = "badge badge-primary m-2"
        }
        else {
            classes = "badge badge-danger m-2"
        }       
        return (
          <div>
            <span className = {classes}>{this.state.count}</span>
            <button className = "btn btn-secondary m-2" onClick = {this.increment}>Increment</button>
            <button className = "btn btn-secondary m-2" onClick = {this.decrement}>Decrement</button>
          </div>
      );
    }
}
export default Counter;