import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  dividerContainer: {
    width: "100%",
    maxWidth: 600,
    margin: "20px auto"
  }
}));

const HorizontalDivider = () => {
  const classes = useStyles();

  return (
    <div className={classes.dividerContainer}>
      <Divider />
    </div>
  );
};

export default HorizontalDivider;
