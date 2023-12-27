import React from "react";

interface IMyFormState {
  input: string;
  submit: string;
}

interface IMyFormProps {}

export class MyForm extends React.Component<IMyFormProps, IMyFormState> {
  constructor(props: IMyFormProps) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault();
    this.setState({ submit: this.state.input });
    // Change code above this line
  }
  render() {
    const { input, submit } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Change code below this line */}
          <input type="text" value={input} onChange={this.handleChange} />
          {/* Change code above this line */}
          <button type="submit">Submit!</button>
        </form>
        {/* Change code below this line */}
        <h1>{submit}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
