import React from "react";

interface IStatefulComponentProps {}
interface IStatefulComponentState {
  firstName: string;
}

export class StatefulComponent extends React.Component<
  IStatefulComponentProps,
  IStatefulComponentState
> {
  constructor(props: IStatefulComponentProps) {
    super(props);
    // Only change code below this line
    this.state = {
      firstName: "Icke",
    };
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
}
