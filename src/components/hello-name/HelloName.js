import React from "react";
import PropTypes from "prop-types";
import { greetName } from "../../core";

function HelloName({ classes, name, style }) {
  const greeting = greetName({ name });
  return <>{greeting}</>;
}

HelloName.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The name of the person to say hello to. */
  name: PropTypes.string.isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

export default HelloName;
