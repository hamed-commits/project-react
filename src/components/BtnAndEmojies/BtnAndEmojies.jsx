import React, { useState } from "react";
import { emojiParts } from "../../data/data";

function BtnAndEmojies() {
  const [eye, setEye] = useState(0);
  const [nose, setNose] = useState(0);
  const [mouth, setMouth] = useState(0);

  const handleClick = () => {
    setEye(Math.floor(Math.random() * emojiParts.eyes.length));
    setNose(Math.floor(Math.random() * emojiParts.nose.length));
    setMouth(Math.floor(Math.random() * emojiParts.mouth.length));
  };

  const getEmoji = (unicode) =>
    String.fromCodePoint(parseInt(unicode.replace("U+", ""), 16));

  return (
    <div>
      <div>{getEmoji(emojiParts.eyes[eye])}</div>
      <div>{getEmoji(emojiParts.nose[nose])}</div>
      <div>{getEmoji(emojiParts.mouth[mouth])}</div>
      <button onClick={handleClick}>Click me for change!</button>
    </div>
  );
}

export default BtnAndEmojies;
