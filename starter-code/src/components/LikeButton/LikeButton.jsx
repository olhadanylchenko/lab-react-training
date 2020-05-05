import React, { Component } from "react";
import "./likeButton.css";

class LikeButton extends Component {
  state = {
    counter: 0,

    buttonColor: ["purple", "blue", "green", "yellow", "orange", "red"],
  };

  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    const style = {
      backgroundColor: this.state.buttonColor[
        this.state.counter % this.state.buttonColor.length
      ],
      color: "#fff",
    };
    return (
      <button onClick={this.clickHandler} style={style}>
        {this.state.counter} Likes
      </button>
    );
  }
}

export default LikeButton;

// ["purple", "blue", "green", "yellow", "orange", "red"];
