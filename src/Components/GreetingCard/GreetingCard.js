import React, { Fragment } from "react";
import "./GreetingCard.css";

export const GreetingCard = (props) => {
  return (
    <Fragment>
      <h1>{props.title}</h1>
    </Fragment>
  );
};
