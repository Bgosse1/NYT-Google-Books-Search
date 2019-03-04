import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div
        style={{
          height: 300,
          clear: "both",
          paddingTop: 120,
          textAlign: "center"
        }}
        className="jumbotron"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Jumbotron;
