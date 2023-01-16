import { render } from "@testing-library/react";
import React from "react";

export default function Joke(props) {
  return (
    <div className="joke">
      <h2>{props.Setup}</h2>
      <h5>{props.Punchline}</h5>
    </div>
  )
}
