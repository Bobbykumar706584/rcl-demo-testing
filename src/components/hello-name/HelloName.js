import React from "react";
import PropTypes from "prop-types";
import { greetName } from "../../core";
import { withStyles } from "@material-ui/core/styles";

function HelloName({ classes, name, style }) {
  const greeting = greetName({ name });
  return (
    <span className={classes.root} style={style}>
      {greeting}
    </span>
  );
}

HelloName.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** The name of the person to say hello to. */
  name: PropTypes.string.isRequired,
  /** The overriding CSS for this component */
  style: PropTypes.object,
};

const styles = (theme) => ({
  root: {},
});

export default withStyles(styles)(HelloName);
