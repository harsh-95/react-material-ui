import React, { Component, Fragment } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fab
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    width: "100%"
  }
});

class CreateExercise extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      muscles: "",
      description: "",
      id:"123"
    }
  };

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleChange = name => ({target:{value}}) => {
    this.setState({
        exercise:{
            ...this.state.exercise,[name]: value
        }
    })
  };

  handleSubmit = () => {
      const {exercise} = this.state;
      console.log('aa');console.log(exercise);
    this.props.onCreate(exercise);

    this.setState({
        open:false,
        exercise:{
            title:"",
            description:"",
            muscles:""
        }
    })
  };

  render() {
    const { muscles: categories, classes } = this.props,
      {
        exercise: { title, muscle, description }
      } = this.state;
    return (
      <Fragment>
        <Fab
          aria-label="add"
          size="small"
          onClick={this.handleToggle}
          style={{ position: "absolute", right: 5 }}
        >
          <AddIcon />
        </Fab>

        <Dialog open={this.state.open} onClose={this.handleToggle}>
          <DialogTitle id="form-dialog-title">Create Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill these details to create an exercise
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Exercise"
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange('title')}
              className={classes.formControl}
            />
            <FormControl className={classes.formControl}>
              <InputLabel>Muscles</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={muscle}
                onChange={this.handleChange('muscles')}
              >
                {categories.map((muscle, i) => (
                  <MenuItem key={i} value={muscle}>
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              label="Description"
              type="text"
              value={description}
              onChange={this.handleChange('description')}
              className={classes.formControl}
              multiline
              rows={2}
            />
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default withStyles(styles)(CreateExercise);
