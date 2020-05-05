import React from "react";
import "./driverCard.css";
import Rating from "../Rating/Rating";

export default function DriverCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="" height="100" />
      <div className="right">
        <h3>{props.name}</h3>
        <Rating>{props.rating}</Rating>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}
