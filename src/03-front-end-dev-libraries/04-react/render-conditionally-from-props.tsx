import React from "react";

interface IResultsProps {
  fiftyFifty: boolean;
}
interface IGameOfChanceProps {}
interface IGameOfChanceState {
  counter: number;
}

export class Results extends React.Component<IResultsProps> {
  constructor(props: IResultsProps) {
    super(props);
  }

  render() {
    {
      /* Change code below this line */
    }
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

export class GameOfChance extends React.Component<
  IGameOfChanceProps,
  IGameOfChanceState
> {
  constructor(props: IGameOfChanceProps) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1,
      };
    });
  }

  render() {
    const expression = Math.random() < 0.5;

    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
