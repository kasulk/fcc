import React, { ReactDOM } from "react";

export class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits />
        <Vegetables />
        {/* Change code above this line */}
      </div>
    );
  }
}

export function Fruits() {}
export function Vegetables() {}

// Change code below this line
const challengeNode = document.querySelector("#challenge-node");

ReactDOM.render(<TypesOfFood />, challengeNode);
