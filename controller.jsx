function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Box extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squareValues[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="box">
        <div className="box-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="box-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="box-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// class Board extends React.Component {
//   render () {
//     return (
//       <Box />
//     );
//   }
// }

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      history: [
        {
          squareIndexes: Array(9).fill(0)
        }
      ],
      stepNumber: 0,
    };
  }


  jumpTo(step) {
    this.setState({
      stepNumber: step,
    });
  }


  getSquareValues(squareIndexes) {
    const valueAt = [null, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const squareValues = squareIndexes.map( ind => valueAt[ind] );
    return squareValues;
  }


  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squareIndexes = current.squareIndexes.slice();
    const squareValues = this.getSquareValues(squareIndexes);

    if ( !missingNums(squareValues).length ) {
      return;
    }
    squareIndexes[i]++;

    this.setState({
      history: history.concat([
        {
          squareIndexes: squareIndexes
        }
      ]),
      stepNumber: history.length,
    });
  }
 

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const squareIndexes = current.squareIndexes.slice();
    const squareValues = this.getSquareValues(squareIndexes);
    const missingValues = missingNums(squareValues);

    const moves = history.map((step, move) => {
      const desc = move ? "Move #" + move : "Game start";
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
        </li>
      );
    });

    let status;
    if ( !missingValues.length ) {
      status = "Box Complete";
    } else {
      status = "Still missing: " + missingValues;
    }

    return (
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
          </div>
          <div className="board-row">
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
          </div>
          <div className="board-row">
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
            <Box squareValues={squareValues} onClick={i => this.handleClick(i)} />
          </div>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function missingNums(squareValues) {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return values.filter( num => !squareValues.includes(num) );
}













