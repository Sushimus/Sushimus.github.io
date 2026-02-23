import { useState } from "react";
import { getRandomSpritePos, getSlidingImage } from "./imageUtils";

type Props = {
  delay: string;
  pools: string[][];
};

export default function SlidingImage({ delay, pools }: Props) {
  const [pic, setPic] = useState(() => getSlidingImage(pools));
  const [borderPos, setBorderPos] = useState(getRandomSpritePos());

  function changePic() {
    setPic(getSlidingImage(pools));
    setBorderPos(getRandomSpritePos());
  }

  return (
    <div
      className="side-pic-wrap"
      style={{ animationDelay: delay, backgroundPosition: borderPos }}
      onAnimationIteration={changePic}
    >
      <img src={pic} alt="falling thing" />
    </div>
  );
}