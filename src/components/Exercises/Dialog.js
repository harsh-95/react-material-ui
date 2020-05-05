import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Fab
} from "@material-ui/core";

import Form from './Form';

import AddIcon from "@material-ui/icons/Add";

class CreateExercise extends Component {

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleSubmitExercise = exercise => {
    this.handleToggle();
    this.props.onCreate(exercise)
  }

  render() {

    const { title, muscle, description} = this.state,
          { muscles, onCreate } = this.props

    return (
      <Fragment>
        <Fab
          aria-label="add"
          size="small"
          onClick={this.handleToggle}
          style={{ position: "absolute", right: 5 }}
          color="secondary"
        >
          <AddIcon />
        </Fab>

        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill these details to create an exercise
            </DialogContentText>

            <Form muscles={muscles}
                  onSubmit={this.handleSubmitExercise}
                  open={this.state.open} />

          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default CreateExercise;
