import { FORCED_QUARANTINE_WALL_COLOR, FORCED_QUARANTINE_SPEED } from './options.js'

export class Wall {
  constructor ({ width, height, sketch, wallWidth = 20, doorHeight = 10 }) {
    this.width = width
    this.height = height
    this.sketch = sketch
    this.wallWidth = wallWidth
    this.doorHeight = doorHeight

    this.UP_WALL_POS_X = width / 4
    this.UP_WALL_POS_Y = 0
    this.UP_WALL_WIDTH = wallWidth
    this.UP_WALL_HEIGHT_MIN = height / 2
    this.UP_WALL_HEIGHT = 2 * height / 3

    this.DOWN_WALL_POS_X = width / 4
    this.DOWN_WALL_POS_Y = 2 * height / 3
    this.DOWN_WALL_WIDTH = wallWidth
    this.DOWN_WALL_HEIGHT_MIN = height / 5
    this.DOWN_WALL_HEIGHT = height / 3
  }

  checkWallCollision (x, y, radius) {
    return this.checkUpWallCollision(x, y, radius) || this.checkDownWallCollision(x, y, radius)
  }

  checkUpWallCollision (x, y, radius) {
    return (
      (x + radius > this.UP_WALL_POS_X) &&
      (x - radius < this.UP_WALL_POS_X + this.UP_WALL_WIDTH) &&
      (y - radius < this.UP_WALL_POS_Y + this.UP_WALL_HEIGHT)
    )
  }

  checkDownWallCollision (x, y, radius) {
    return (
      (x + radius > this.DOWN_WALL_POS_X) &&
      (x - radius < this.DOWN_WALL_POS_X + this.DOWN_WALL_WIDTH) &&
      (y + radius > this.DOWN_WALL_POS_Y)
    )
  }

  render () {
    this.sketch.fill(FORCED_QUARANTINE_WALL_COLOR)

    this.UP_WALL_HEIGHT = this.UP_WALL_HEIGHT > this.UP_WALL_HEIGHT_MIN
      ? this.UP_WALL_HEIGHT - FORCED_QUARANTINE_SPEED
      : this.UP_WALL_HEIGHT

    this.DOWN_WALL_HEIGHT = this.DOWN_WALL_HEIGHT > this.DOWN_WALL_HEIGHT_MIN
      ? this.DOWN_WALL_HEIGHT - FORCED_QUARANTINE_SPEED
      : this.DOWN_WALL_HEIGHT

    this.DOWN_WALL_POS_Y = this.DOWN_WALL_HEIGHT > this.DOWN_WALL_HEIGHT_MIN
      ? this.DOWN_WALL_POS_Y + FORCED_QUARANTINE_SPEED
      : this.DOWN_WALL_POS_Y

    this.upWall = this.sketch.rect(
      this.UP_WALL_POS_X,
      this.UP_WALL_POS_Y,
      this.UP_WALL_WIDTH,
      this.UP_WALL_HEIGHT
    )

    this.downWall = this.sketch.rect(
      this.DOWN_WALL_POS_X,
      this.DOWN_WALL_POS_Y,
      this.DOWN_WALL_WIDTH,
      this.DOWN_WALL_HEIGHT
    )
  }
}
