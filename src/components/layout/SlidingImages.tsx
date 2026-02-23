import SlidingImage from "../sliding/SlidingImage";

const brewFiles = import.meta.glob(
  "/src/assets/brew/images/*.{png,jpg,jpeg,svg,gif}",
  { eager: true, query: "?url", import: "default" }
);

const meFiles = import.meta.glob(
  "/src/assets/me/images/*.{png,jpg,jpeg,svg,gif}",
  { eager: true, query: "?url", import: "default" }
);

const brewPool = Object.values(brewFiles) as string[];
const mePool = Object.values(meFiles) as string[];

const ALL_POOLS = [brewPool, mePool];

type Props = {
  side: "left" | "right";
};

export default function SlidingImages({ side }: Props) {
  return (
    <div className={`side-col ${side}-col`}>
      {[0, 1, 2].map((num) => (
        <SlidingImage
          key={num}
          delay={`calc(-8s / 3 * ${num})`}
          pools={ALL_POOLS}
        />
      ))}
    </div>
  );
}