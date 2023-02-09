import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  dividerContainer: {
    height: "100px",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: theme.palette.divider
  }
}));

const VerticalDivider = () => {
  const classes = useStyles();

  return (
    <div className={classes.dividerContainer}>
      <Divider orientation="vertical" className={classes.divider} />
    </div>
  );
};

export default VerticalDivider;
