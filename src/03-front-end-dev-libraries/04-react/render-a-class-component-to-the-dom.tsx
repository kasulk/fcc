import React from "react";
import ReactDOM from "react-dom";

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

export const Fruits = () => <span>Banana</span>;
export const Vegetables = () => <span>Kiwi</span>;

// Change code below this line
const challengeNode = document.querySelector("#challenge-node");

ReactDOM.render(<TypesOfFood />, challengeNode);
