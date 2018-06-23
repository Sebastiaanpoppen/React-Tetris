import React, { Component } from 'react'

class TetrisGridSquare extends Component {
  render() {
    const GRID_SQUARE_CLASSES = `grid-square color-${this.props.color}`
    return <div className={GRID_SQUARE_CLASSES} />
  }
}

export default TetrisGridSquare;
