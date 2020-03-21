const { atan2, cos, sin, sqrt } = Math

export const calculateChangeDirection = ({ dx, dy }) => {
  const angle = atan2(dy, dx)
  const ax = cos(angle)
  const ay = sin(angle)
  return { ax, ay }
}

export const checkCollision = ({ dx, dy, diameter }) => {
  const distance = sqrt(dx * dx + dy * dy)
  return distance < diameter
}

export const randomStartingPoint = ({ sketch, radius, walls }) => {
  let x = sketch.random(radius, sketch.width - radius)
  let y = sketch.random(radius, sketch.height - radius)

  if (walls) {
    while (walls.checkWallCollision(x, y, radius)) {
      x = sketch.random(radius, sketch.height - radius)
      y = sketch.random(radius, sketch.height - radius)
    }
  }

  return { x, y }
}
