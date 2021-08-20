import PlaceholderIcon from "../assests/PlaceholderIcon";

function Image (props) {
  return(
    <div className="image-wrapper">
      {
        props.image ? <img src={props.image} alt="Uploaded" className="image" /> :
        <PlaceholderIcon/>
      }
    </div>
  );
}

export default Image;