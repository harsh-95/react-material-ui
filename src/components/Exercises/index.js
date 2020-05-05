import React, { Fragment, Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  styled
} from "@material-ui/core";

import Form from './Form';

import Collapse from '@material-ui/core/Collapse';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';

import {ExpandLess, ExpandMore, Edit } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import ViewListIcon from '@material-ui/icons/ViewList';

const styles = {
  Paper: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    height: 462,
    overflowY: "auto"
  }
};

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: 0,
  padding:2
})

const StyledListItem = styled(ListItem)({
  paddingLeft: 32,
  paddingBottom: 0,
  paddingTop: 0
});

class Exercise extends Component{

  state = {
    open: {arms: true, back: true, chest: true, legs: true, shoulders: true}
  }

  handleClick = name => {
    console.log(name);
    this.setState((prevState)=>({
      open: {
        ...prevState.open, [name]: !prevState.open[name] 
      }
    }));
  }
  
render(){

  const {
    exercises,
    category,
    onSelect,
    exercise,
    exercise: {
      id,
      title= "Welcome!",
      description= "Please select an exercise from left"
    },
    onDelete,
    onSelectEdit,
    onEditExercise,
    editMode,
    muscles
  } = this.props;

  return (
    <Grid container>
      <Grid item xs={6} sm={5} md={4} lg={3}>
        <Paper style={styles.Paper}>
          {/* {exercises.map(([group, exercises], i) =>
            !category || category === group ? (
              <Fragment key={i}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }, i) => (
                    <StyledListItem button key={i} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </StyledListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )} */}
      <List component="nav" 
      >
        {exercises.map(([group, exercises], i) =>
            !category || category === group ? (
              <Fragment key={i}>
                <ListItem button dense disableGutters onClick={()=> this.handleClick(group)}>
                <StyledListItemIcon>
                  <ViewListIcon fontSize="small" />
                </StyledListItemIcon>
                  <ListItemText primary={group} style={{ textTransform: "capitalize" }}/>
                  {this.state.open[group] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <div style={{borderBottom: '1px solid #eee'}}></div>
                <Collapse in={this.state.open[group]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  {exercises.map(({ id, title }, i) => (
                    <Fragment key={i}>
                    <StyledListItem button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <Edit onClick={()=>onSelectEdit(id)} />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon onClick={()=>onDelete(id)} />
                      </IconButton>
                    </ListItemSecondaryAction>
                    </StyledListItem>
                    <div style={{borderBottom: '1px solid #eee'}}></div>
                    </Fragment>
                  ))}
                  </List>
                </Collapse>
              </Fragment>
            ) : null
          )}
    </List>
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
        {editMode
        ? <Form muscles={muscles}
                exercise={exercise}
                onSubmit={onEditExercise} />
        : <Fragment>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Fragment>}
        </Paper>
      </Grid>
    </Grid>
  )}
};
export default Exercise;
