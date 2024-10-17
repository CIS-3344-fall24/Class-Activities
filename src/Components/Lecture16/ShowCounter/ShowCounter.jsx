import React from "react";
import { useContext } from "react";
import { CounterContext } from "../../../App";

export const ShowCounter = (props) => {
  const count = useContext(CounterContext);
  return (
  <div>
    {/* <p>{props.count}</p> */}
   <p>{count}</p>
  </div>
  );
};
