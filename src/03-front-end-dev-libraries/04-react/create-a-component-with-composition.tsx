import React from "react";

export const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

interface IParentComponentProps {}

export class ParentComponent extends React.Component<IParentComponentProps> {
  constructor(props: IParentComponentProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        {/* Change code below this line */}
        <ChildComponent />
        {/* Change code above this line */}
      </div>
    );
  }
}
