import React from "react";

interface IMyAppProps {}
interface IMyAppState {
  inputValue: string;
}
interface IGetInputProps {
  input: string;
  handleChange: (event: React.ChangeEvent) => void;
}
interface IRenderInputProps {
  input: string;
}

export class MyApp extends React.Component<IMyAppProps, IMyAppState> {
  constructor(props: IMyAppProps) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent) {
    const input = event.target as HTMLInputElement;
    this.setState({
      inputValue: input.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        {/* Change code below this line */}
        <GetInput input={inputValue} handleChange={this.handleChange} />
        <RenderInput input={inputValue} />
        {/* Change code above this line */}
      </div>
    );
  }
}

export class GetInput extends React.Component<IGetInputProps> {
  constructor(props: IGetInputProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}

export class RenderInput extends React.Component<IRenderInputProps> {
  constructor(props: IRenderInputProps) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
}
