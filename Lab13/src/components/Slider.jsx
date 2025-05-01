import { useState } from "react";

function Slider({ items }) {
  const [img, setImg] = useState(0);

  function handleSlider() {
    setImg(Math.floor(Math.random() * items.length));
  }

  return (
    <>
      <span>{items[img]}</span>
      <button onClick={handleSlider}>Click</button>
    </>
  );
}

export default Slider;
