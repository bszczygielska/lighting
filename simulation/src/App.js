import React, { Component } from "react";
import * as io from 'socket.io-client';
import 'antd/dist/antd.css';

const socket = io('http://localhost:5000');

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  componentWillMount()  {
    socket.on('toSimulation', message => {
      console.log(message);
      this.setState({ text: message });
    })
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        Message from client: {this.state.text}
      </div>
    );
  }
}

export default App;