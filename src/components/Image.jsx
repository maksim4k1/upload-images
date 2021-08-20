import PlaceholderIcon from "../assets/PlaceholderIcon";

function Image (props) {
  return(
    <div className="image-wrapper">
      {
        props.loader ? (
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) :
        props.image ? <img src={props.image} alt="Uploaded" className="image" /> :
        <PlaceholderIcon/>
      }
    </div>
  );
}

export default Image;