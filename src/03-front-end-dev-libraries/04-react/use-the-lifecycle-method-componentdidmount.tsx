import React from "react";

interface IMyComponentProps {}
interface IMyComponentState {
  activeUsers: number | null;
}

export class MyComponent extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        // activeUsers: 1273,
        activeUsers: Math.round(Math.random() * 1273),
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Active Users: {this.state.activeUsers} </h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
