import React, { Component } from 'react'
import Square from './Square'


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      square: Array(9).fill(null)
    }
    // console.log('Array(9)', Array(9))
    // 默认为 undefined
    // let arr = Array(9)
    // for (let i of arr) {
    //   console.log('i=>', i)
    //   console.log('arr[i]=>', arr[i] === undefined)
    // }
    // console.log('Array(9).fill(null)', Array(9).fill('null'))
  }

  renderSquare (i) {
    return (
      <Square
        value={this.state.square[i]}
        onClick={() => this.handleClick(i)}
      />
    )
  }

  render () {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  handleClick (i) {
    const square = this.state.square.slice();
    square[i] = 'X';
    console.log('square',square)
    this.setState({ square: square });
  }

}

export default Board
