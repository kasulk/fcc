class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    const input = event.target;

    this.setState({
      input: input.value,
      messages: this.state.messages,
    });
  }

  submitMessage(event) {
    event.preventDefault();

    this.setState({
      input: "",
      messages: [...this.state.messages, this.state.input],
    });
  }

  render() {
    const { handleChange, submitMessage } = this;

    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input type="text" onChange={handleChange} value={this.state.input} />
        <button type="submit" onClick={submitMessage}>
          Add Message
        </button>
        <ul>
          {this.state.messages.map((message) => (
            <li>{message}</li>
          ))}
        </ul>
        {/* Change code above this line */}
      </div>
    );
  }
}
