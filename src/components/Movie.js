import React from "react";

export default function Movie(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
    </div>
  );
}
