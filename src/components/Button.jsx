import { useState } from "react";

function Button (props) {
  const [active, setActive] = useState(false)
  return(
    <div className="button-wrapper">
      <button className={`button ${active ? "active" : ""}`} onClick={() => active ? setActive(false) : setActive(true)}>
        {props.icon}
      </button>
    </div>
  );
}

export default Button;