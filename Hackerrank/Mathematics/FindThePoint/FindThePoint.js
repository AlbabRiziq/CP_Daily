function findPoint(px, py, qx, qy) {
  const deltaX = qx - px;
  const deltaY = qy - py;
  
  const nX = qx + deltaX;
  const nY = qy + deltaY;
  
  return [nX, nY]
}

console.log(findPoint(1, 1, 2, 2))