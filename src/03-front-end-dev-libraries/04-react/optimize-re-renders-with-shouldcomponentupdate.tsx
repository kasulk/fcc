import React from "react";

interface IProps {
  value: number;
}

interface IState {
  value: number;
}

export class OnlyEvens extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  shouldComponentUpdate(nextProps: IProps, nextState: IState) {
    console.log("Should I update?");
    // Change code below this line
    return nextProps.value % 2 === 0;
    // Change code above this line
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

export class Controller extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: 0,
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}
