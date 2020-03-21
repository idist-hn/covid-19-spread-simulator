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

export const randomStartingPoint = ({ sketch, radius, walls, speed }) => {
  let x = sketch.random(radius, sketch.width - radius)
  let y = sketch.random(radius, sketch.height - radius)
  const vx = sketch.random(-1, 1) * speed
  const vy = sketch.random(-1, 1) * speed

  if (walls) {
    while (walls.checkWallCollision(x, y, radius)) {
      x = sketch.random(radius, sketch.height - radius)
      y = sketch.random(radius, sketch.height - radius)
    }
  }

  return { x, y, vx, vy }
}

export const startingPoint = ({ id, radius, width, height, length, speed }) => {
  const x = (width / length - 1) * id + (radius * 2)
  const y = height / 2
  const vx = id === 0 ? 1.2 * speed : -1.2 * speed
  const vy = 0

  return { x, y, vx, vy }
}
