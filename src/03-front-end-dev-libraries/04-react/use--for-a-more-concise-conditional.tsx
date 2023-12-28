import React from "react";

interface IMyComponentProps {}
interface IMyComponentState {
  display: boolean;
}

export class MyComponent extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      display: true,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }

  render() {
    // Change code below this line
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}
