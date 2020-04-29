import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import CreateExercise from "../Exercises/Dialogs/Create";

const Header = ({ muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h5">Exercises</Typography>
        <CreateExercise
          muscles={muscles}
          onCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
  );
};
export default Header;
