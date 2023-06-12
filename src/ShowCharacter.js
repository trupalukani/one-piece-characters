import brook from "./images/brook.png";
import luffy from "./images/luffy.png";
import choppa from "./images/choppa.png";
import zoro from "./images/zoro.png";
import sanji from "./images/sanji.png";
import franky from "./images/franky.png";
import usopp from "./images/usopp.png";
import "./App.css";

const imgMap = {
  brook,
  luffy,
  choppa,
  zoro,
  sanji,
  franky,
  usopp,
};

const ShowCharacter = (props) => {
  return (
    <div>
      <img className="img-css" src={imgMap[props.type]} alt={"character"} />
    </div>
  );
};

export default ShowCharacter;
