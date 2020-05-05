import React, { Component } from 'react';

import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    TextField, Button
} from '@material-ui/core';

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    width: "100%"
  }
});

class Form extends Component{

  state = this.getInitState();

  getInitState() {
    const {exercise} = this.props;

    return exercise ? exercise: {
      title: "",
      muscles: "",
      description: "",
    }
  }

  componentWillReceiveProps({exercise}){
    this.setState({
      ...exercise
    })
  }

  handleChange = name => ({target:{value}}) => {
    this.setState({
            [name]: value
    })
  };

  handleSubmit = () => {

    this.props.onSubmit({
      id:'1231',
      ...this.state
    })
    this.setState(this.getInitState());
  }

    render(){
      const { title, muscles, description} = this.state,
            { muscles: categories, classes, exercise } = this.props;

        return(
            <form>
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
                value={muscles}
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
            /><br/><br/>
            <Button
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              {exercise
                ? 'Edit'
                : 'Create'}
              
            </Button>
            </form>
        )
    }
}
export default withStyles(styles)(Form);