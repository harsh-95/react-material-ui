import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="headline">Exercises</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
