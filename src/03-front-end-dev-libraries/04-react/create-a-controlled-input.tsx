import React from "react";

interface IControlledInputProps {}
interface IControlledInputState {
  input: string;
}

export class ControlledInput extends React.Component<
  IControlledInputProps,
  IControlledInputState
> {
  constructor(props: IControlledInputProps) {
    super(props);
    this.state = {
      input: "",
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  // Change code above this line
  render() {
    const { input } = this.state;
    return (
      <div>
        {/* Change code below this line */}
        <input type="text" value={input} onChange={this.handleChange} />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{input}</p>
      </div>
    );
  }
}
