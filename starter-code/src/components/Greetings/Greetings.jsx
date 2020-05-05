import React from "react";

const Greetings = (props) => {
  const renderLanguage = () => {
    switch (props.lang) {
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      case "es":
        return "Hola";
      default:
        return "Hello";
    }
  };
  return (
    <>
      <p>
        {renderLanguage()}, {props.children}!
      </p>
    </>
  );
};

export default Greetings;
