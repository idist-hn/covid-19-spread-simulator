window.options = {
  filters: {
    death: false,
    stayHome: false,
    showQuarantineWall: false,
    showControls: false
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
      recovered: '#0099FA',
      infected: '#9F4C00',
      well: '#538B94'
    },
    wall: '#000000'
  },
  balls: {
    radius: 5
  },
  starting: {
    infected: 1,
    well: 200,
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
