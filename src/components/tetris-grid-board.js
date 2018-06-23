import React, { Component } from 'react'
import TetrisGridSquare from './tetris-grid-square'

class TetrisGridBoard extends Component {

  makeTetrisGrid() {
    const tetris_grid = []
    const max_rows = 18;
    const max_cols = 10;
    for (let row=0; row < max_rows; row++) {
      tetris_grid.push([]);
      for (let col=0; col < max_cols; col++) {
        tetris_grid[row].push(<TetrisGridSquare key={`${col}${row}`} color='1' />)
      }
    }
    return tetris_grid
  }

  render() {
    return(
    <div className="tetris-grid-board">
      {this.makeTetrisGrid()}
    </div>
  );
  }
}

export default TetrisGridBoard;
