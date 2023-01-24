import React from "react";

export default function Joke(props) {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }

  return (
    <div className="joke">
      {props.Setup && <h2>{props.Setup}</h2>}
      <button
        onClick={toggleShown}
      >
        {isShown ? "Hide" : "View"}
      </button>
      {isShown && <h5>{props.Punchline}</h5>}
    </div>
  )
}
