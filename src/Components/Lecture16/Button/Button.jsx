import React from "react";
import { ShowCounter } from "../ShowCounter/ShowCounter";

export const Button = (props) => {
  return (
    <div>
      {/* <button> <span> <ShowCounter count={props.count}/></span>  I am a button</button> */}

      <button>
        <span>
          <ShowCounter />
        </span>
        I am a button
      </button>
    </div>
  );
};
