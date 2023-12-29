import React, { ChangeEvent } from "react";

interface IGateKeeperProps {}
interface IGateKeeperState {
  input: string;
}

export class GateKeeper extends React.Component<
  IGateKeeperProps,
  IGateKeeperState
> {
  constructor(props: IGateKeeperProps) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    this.setState({ input: input.value });
  }

  render() {
    const inputStyle = {
      border: "1px solid black",
    };
    // Change code below this line
    if (this.state.input.length > 15) inputStyle.border = "3px solid red";
    // Change code above this line
    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
