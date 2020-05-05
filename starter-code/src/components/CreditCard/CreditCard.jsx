import React from "react";
import "./creditCard.css";

const CreditCard = (props) => {
  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  const number = props.number.slice(12);
  return (
    <>
      <div className="card" style={style}>
        <img
          src={
            props.type === "Visa" ? "./img/visa.png" : "./img/master-card.svg"
          }
          alt=""
          height="20"
        />
        <h2 className="cardNumber">**** **** **** {number}</h2>
        <p className="expires">
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p className="expires">{props.owner}</p>
      </div>
    </>
  );
};

export default CreditCard;
