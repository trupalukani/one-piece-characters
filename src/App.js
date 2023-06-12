import { useState } from "react";
import ShowCharacter from "./ShowCharacter"
import "./App.css";

function App() {
  let [devils, setDevil] = useState([]);

  const opCharacters = () => {
    const characters = [
      "luffy",
      "zoro",
      "sanji",
      "choppa",
      "usopp",
      "brook",
      "franky",
    ];
    return characters[Math.floor(Math.random() * characters.length)];
  };

  const handleClick = () => {
    setDevil([...devils, opCharacters()]);
  };

  const renderChar = devils.map((devil, index) => {
    return <ShowCharacter type={devil} key={index} />;
  });

  return (
    <div>
      <h3>Welcome to one piece app!</h3>
      <button onClick={handleClick}>Go!</button>
      <div  style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>{renderChar}</div>
    </div>
  );
}

export default App;
