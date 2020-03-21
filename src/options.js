const options = window.options

const DEFAULT_FILTERS = {
  death: options.filters.death,
  stayHome: options.filters.stayHome,
  showQuarantineWall: options.filters.showQuarantineWall,
  showControls: options.filters.showControls
}

export const CANVAS_SIZE = {
  height: options.canvas.height,
  width: options.canvas.width
}

export const DESKTOP_CANVAS_SIZE = {
  height: options.desktopCanvas.height,
  width: options.desktopCanvas.width
}

export const CANVAS_COLOR = options.colors.canvas.background

export const BALL_RADIUS = options.balls.radius
export const COLORS = {
  death: options.colors.status.death,
  recovered: options.colors.status.recovered,
  infected: options.colors.status.infected,
  well: options.colors.status.well
}

export const STATES = {
  infected: options.states.infected,
  well: options.states.well,
  recovered: options.states.recovered,
  death: options.states.death
}

export const COUNTERS = {
  ...STATES,
  ...options.counters
}

export const STARTING_BALLS = {
  [STATES.infected]: options.starting.infected,
  [STATES.well]: options.starting.well,
  [STATES.recovered]: options.starting.recovered,
  [STATES.death]: options.starting.death,
  'max-concurrent-infected': options.starting['max-concurrent-infected']
}

export const RUN = {
  filters: { ...DEFAULT_FILTERS },
  results: { ...STARTING_BALLS },
  tick: 0
}

export const MORTALITY_PERCENTATGE = options.general.mortalityPercentage
export const SPEED = options.general.speed
export const TOTAL_TICKS = options.general.totalTicks
export const TICKS_TO_RECOVER = options.general.ticksToRecover
export const TICKS_TO_RECOVER_MIN = options.general.ticksToRecoverMin
export const TICKS_TO_RECOVER_MAX = options.general.ticksToRecoverMax
export const STATIC_PEOPLE_PERCENTATGE = options.general.staticPeoplePercentage
export const FORCED_QUARANTINE_WALL_COLOR = options.colors.wall
export const FORCED_QUARANTINE_SPEED = options.general.quarantineWallSpeed

export const resetRun = () => {
  RUN.results = { ...STARTING_BALLS }
  RUN.tick = 0
}
