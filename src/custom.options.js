window.options = {
  filters: {
    death: false,
    stayHome: false,
    showQuarantineWall: false,
    showControls: true
  },
  canvas: {
    height: 880,
    width: 360
  },
  desktopCanvas: {
    height: 400,
    width: 800
  },
  colors: {
    canvas: {
      background: '#FFFFFF'
    },
    status: {
      death: '#c50000',
      recovered: '#D88DBC',
      infected: '#5ABA4A',
      well: '#63C8F2'
    },
    wall: '#000000'
  },
  balls: {
    radius: 30
  },
  starting: {
    infected: 1,
    well: 4,
    recovered: 0,
    death: 0,
    'max-concurrent-infected': 0
  },
  states: {
    infected: 'infected',
    well: 'well',
    recovered: 'recovered',
    death: 'death'
  },
  counters: {
    'max-concurrent-infected': 'max-concurrent-infected'
  },
  general: {
    mortalityPercentage: 5,
    speed: 1,
    totalTicks: 1600,
    ticksToRecover: 500,
    ticksToRecoverMin: 500,
    ticksToRecoverMax: 800,
    staticPeoplePercentage: 25,
    quarantineWallSpeed: 0.2,
    isLegend: false
  }
}
