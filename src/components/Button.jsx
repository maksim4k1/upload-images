import { useState } from "react";

function Button (props) {
  const [active, setActive] = useState(false)
  return(
    <div className="button-wrapper">
        {
          props.type === "download" ? (
            <a download="uploaded-image" className="button" href={props.image ? props.image : event => event.preventDefault()}>
              {props.icon}
            </a>
          ) : (
            <button className={`button ${active ? "active" : ""}`} onClick={() => active ? setActive(false) : setActive(true)}>
              {props.icon}
            </button>
          )
        }
    </div>
  );
}

export default Button;