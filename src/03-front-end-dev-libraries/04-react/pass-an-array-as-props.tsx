import React from "react";

interface IListProps {
  tasks: string[];
}

export const List = (props: IListProps) => {
  {
    /* Change code below this line */
  }
  return <p>{props.tasks.join(", ")}</p>;
  {
    /* Change code above this line */
  }
};

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        {/* Change code below this line */}
        <List tasks={["walk dog", "workout"]} />
        <h2>Tomorrow</h2>
        <List
          tasks={["wash dishes", "kiss girlfriend", "fold a piece of paper"]}
        />
        {/* Change code above this line */}
      </div>
    );
  }
}
