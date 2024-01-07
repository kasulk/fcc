import React from "react";
import ReactDOMServer from "react-dom/server";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div />;
  }
}

// Change code below this line
ReactDOMServer.renderToString(<App />);
