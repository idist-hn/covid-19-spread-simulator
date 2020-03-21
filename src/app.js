import {
  BALL_RADIUS,
  CANVAS_SIZE,
  DESKTOP_CANVAS_SIZE,
  STARTING_BALLS,
  RUN,
  SPEED,
  STATIC_PEOPLE_PERCENTATGE,
  STATES,
  CANVAS_COLOR,
  IS_LEGEND
} from './options.js'

import {
  replayButton,
  deathFilter,
  stayHomeFilter,
  controlsForm
} from './dom.js'

import { Ball } from './Ball.js'

import {
  resetValues,
  updateCount
} from './results.js'
import { Wall } from './Wall.js'
import { randomStartingPoint, startingPoint } from './collisions.js'

let balls = []
let walls = null

const matchMedia = window.matchMedia('(min-width: 800px)')

let isDesktop = matchMedia.matches

const { height, width } = isDesktop
  ? DESKTOP_CANVAS_SIZE
  : CANVAS_SIZE

if (!RUN.filters.showControls) {
  controlsForm.style.display = 'none'
}

export const canvas = new window.p5(sketch => { // eslint-disable-line
  const startBalls = () => {
    let id = 0
    const radius = BALL_RADIUS
    const speed = SPEED
    balls = []

    Object.keys(STARTING_BALLS).forEach(state => {
      const length = STARTING_BALLS[state]
      Array.from({ length }, () => {
        const hasMovement = RUN.filters.stayHome
          ? sketch.random(0, 100) < STATIC_PEOPLE_PERCENTATGE || state === STATES.infected
          : true

        const { x, y, vx, vy } = IS_LEGEND
          ? startingPoint({ id, radius, width, height, length, speed })
          : randomStartingPoint({ sketch, radius, walls, speed })

        balls[id] = new Ball({
          id,
          sketch,
          state,
          hasMovement,
          x,
          y,
          vx,
          vy
        })

        id++
      })
    })
  }

  const createCanvas = () => {
    sketch.createCanvas(width, height)
  }

  const addWalls = () => {
    if (RUN.filters.showQuarantineWall) {
      walls = new Wall({ width, height, sketch })
    }
  }

  sketch.setup = () => {
    createCanvas()
    addWalls()
    startBalls()

    matchMedia.addListener(e => {
      isDesktop = e.matches
      createCanvas()
      startBalls()
      resetValues()
    })

    replayButton.onclick = () => {
      startBalls()
      resetValues()
    }

    if (RUN.filters.showControls) {
      deathFilter.onclick = () => {
        RUN.filters.death = !RUN.filters.death
        document.getElementById('death-count').classList.toggle('show', RUN.filters.death)
        startBalls()
        resetValues()
      }

      stayHomeFilter.onchange = () => {
        RUN.filters.stayHome = !RUN.filters.stayHome
        startBalls()
        resetValues()
      }
    }
  }

  sketch.draw = () => {
    sketch.background(CANVAS_COLOR)

    if (walls) {
      walls.render()
    }

    balls.forEach(ball => {
      ball.checkState()
      ball.checkCollisions({ others: balls })
      ball.move({ walls })
      ball.render()
    })
    updateCount()
  }
}, document.getElementById('canvas'))
