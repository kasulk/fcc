import React from "react";

interface IAppProps {}
interface IWelcomeProps {
  name: string;
}

export class App extends React.Component {
  constructor(props: IAppProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <Welcome name="Hans-Werner" />
        {/* Change code above this line */}
      </div>
    );
  }
}

class Welcome extends React.Component<IWelcomeProps> {
  constructor(props: IWelcomeProps) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* Change code below this line */}
        <p>
          Hello, <strong>{this.props.name}</strong>!
        </p>
        {/* Change code above this line */}
      </div>
    );
  }
}
