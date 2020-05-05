import React from "react";

export default function Rating(props) {
  //   console.log(Math.round(props.children));
  const rating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(props.children)) {
        stars.push("★");
      } else {
        stars.push("☆");
      }
    }
    return stars;
  };
  return <div>{rating()}</div>;
}

// new Array(5).fill().map((ele, i) => i < Math.round(props.children) ? "★" : "☆")
