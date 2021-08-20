import Button from "./Button";
import LikeIcon from "../assets/LikeIcon";
import HeartIcon from "../assets/HeartIcon";
import SaveIcon from "../assets/SaveIcon";

function Buttons (props) {
  return(
    <ul className="buttons">
      <Button icon={<LikeIcon/>}/>
      <Button icon={<HeartIcon/>}/>
      <Button icon={<SaveIcon/>} image={props.image} type="download"/>
    </ul>
  );
}

export default Buttons;