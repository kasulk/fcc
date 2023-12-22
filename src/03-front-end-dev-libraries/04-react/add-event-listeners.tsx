import React from "react";

interface IMyComponentProps {}
interface IMyComponentState {
  message: string;
}

export class MyComponent extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: IMyComponentProps) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress as EventListener);
  }
  componentWillUnmount() {
    document.removeEventListener(
      "keydown",
      this.handleKeyPress as EventListener
    );
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + "You pressed the enter key! ",
    }));
  }
  handleKeyPress(event: Event) {
    const keyboardEvent = event as KeyboardEvent;
    if (keyboardEvent.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
