import React from "react";

interface IDisplayMessagesProps {}
interface IDisplayMessagesState {
  input: string;
  messages: string[];
}

export class DisplayMessages extends React.Component<
  IDisplayMessagesProps,
  IDisplayMessagesState
> {
  // Change code below this line
  constructor(props: IDisplayMessagesProps) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
  }
  // Change code above this line
  render() {
    return <div />;
  }
}
