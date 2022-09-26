import { useState } from "react";
import "./styles.css";

export default function App() {
  const [emojiVal, setEmoji] = useState("");
  const emojiData = {
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍑": "Peach",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear"
  };

  function emojiChangeHandler(event) {
    var emojiText = event.target.value;

    emojiText === ""
      ? setEmoji("")
      : emojiData[emojiText] === undefined
      ? setEmoji("We don't have this in our System")
      : setEmoji(emojiData[emojiText]);
  }

  function getEmojiFruit(fruit) {
    setEmoji(emojiData[fruit]);
  }

  return (
    <div className="App">
      <h1>FruitsPedia</h1>
      <input onChange={emojiChangeHandler} />
      <div style={{ margin: "1rem", fontSize: "1.5rem", fontWeight: "700" }}>
        {emojiVal}
      </div>

      <div className="flex">
        {Object.keys(emojiData).map((emoji, index) => {
          return (
            <div key={emoji} className="col-md-12">
              <span
                onClick={() => getEmojiFruit(emoji)}
                style={{
                  fontSize: "2rem",
                  cursor: "pointer",
                  padding: "0.75rem",
                  borderRadius: "1rem",
                  backgroundColor: index % 2 === 0 ? "#abcdef" : "#14213e"
                }}
              >
                {emoji}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
