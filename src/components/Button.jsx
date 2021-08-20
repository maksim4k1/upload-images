function Button (props) {
  return(
    <div className="button-wrapper">
      <button className="button">
        {props.icon}
      </button>
    </div>
  );
}

export default Button;