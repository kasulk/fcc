import React from "react";

interface IMyAppProps {}
interface IMyAppState {
  name: string;
}
interface INavbarProps {
  name: string;
}

export class MyApp extends React.Component<IMyAppProps, IMyAppState> {
  constructor(props: IMyAppProps) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Navbar name={this.state.name} />
        {/* Change code above this line */}
      </div>
    );
  }
}

export class Navbar extends React.Component<INavbarProps> {
  constructor(props: INavbarProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
    );
  }
}
