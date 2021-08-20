import Button from "./Button";
import LikeIcon from "../assets/LikeIcon";
import HeartIcon from "../assets/HeartIcon";
import SaveIcon from "../assets/SaveIcon";

function Buttons () {
  return(
    <ul className="buttons">
      <Button icon={<LikeIcon/>}/>
      <Button icon={<HeartIcon/>}/>
      <Button icon={<SaveIcon/>}/>
    </ul>
  );
}

export default Buttons;