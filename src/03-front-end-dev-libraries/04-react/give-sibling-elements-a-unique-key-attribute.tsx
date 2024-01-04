import React from "react";

const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue",
];

export function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((framework) => (
    <li key={framework}>{framework}</li>
  ));

  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}
