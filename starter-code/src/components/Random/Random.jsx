import React from "react";

const Random = (props) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <p>
      Random value between {props.min} and {props.max} =>
      {random(props.min, props.max)}
    </p>
  );
};

export default Random;
