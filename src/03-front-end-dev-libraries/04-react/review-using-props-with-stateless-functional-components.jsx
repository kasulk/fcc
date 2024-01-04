import React from "react";
import PropTypes from "prop-types";

export class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
}
// Change code below this line

export class Camper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>{this.props.name}</p>;
  }
}

Camper.defaultProps = { name: "CamperBot" };
Camper.propTypes = { name: PropTypes.string.isRequired };
