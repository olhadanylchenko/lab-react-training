import React from "react";
import "./boxColor.css";

const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

const fullColorHex = (r, g, b) => {
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return red + green + blue;
};

const BoxColor = (props) => {
  const color = { backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})` };
  return (
    <div style={color} className="colorBox">
      <p>
        rgb({props.r}, {props.g}, {props.b})
      </p>
      <p>#{fullColorHex(props.r, props.g, props.b)}</p>
    </div>
  );
};

export default BoxColor;
