import React, { Component } from "react";

class ClickablePicture extends Component {
  state = {
    clicked: false,
  };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        <img
          src={this.state.clicked ? this.props.imgClicked : this.props.img}
        />
      </button>
    );
  }
}

export default ClickablePicture;
