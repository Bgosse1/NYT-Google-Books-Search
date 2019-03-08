import React, { Component } from "react";

class SaveBtn extends Component {
  render() {
    return (
      <button
        {...this.props}
        style={{ float: "right", marginBottom: 10 }}
        className="btn btn-success"
      >
        {this.props.children}
      </button>
    );
  }
}

export default SaveBtn;
