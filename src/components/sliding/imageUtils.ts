export function getRandomSpritePos() {
  const x = Math.floor(Math.random() * 3) * 50;
  const y = Math.floor(Math.random() * 3) * 50;
  return `${x}% ${y}%`;
}

export function getSlidingImage(pools: string[][]) {
  const pickPool = pools[Math.floor(Math.random() * pools.length)];
  if (!pickPool || pickPool.length === 0) return "";
  return pickPool[Math.floor(Math.random() * pickPool.length)];
}