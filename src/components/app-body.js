import React, { Component } from 'react';
import TetrisGridBoard from './tetris-grid-board'

class AppBody extends Component {
  render() {
    return (
      <div className="app-body">
        <TetrisGridBoard />
      </div>
    );
  }
}

export default AppBody;
