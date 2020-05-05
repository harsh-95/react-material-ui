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
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  paper: {
    padding: 15,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    height: 'calc(100% - 40px)',
    overflowY: "auto"
  },
  '@global':{
    'html,body,#root':{
      [theme.breakpoints.up('xs')]:{
        height: '100%'
      }
    }
  },
  container:{
    [theme.breakpoints.up('sm')]:{
      height: 'calc(100% - 96px)'
    },
    [theme.breakpoints.down('xs')]:{
      height: 'auto',
      minHeight: 'calc(100% - 96px)'
    }
  },
  itemExerciseList:{
    [theme.breakpoints.down('xs')]:{
      height: '75%'
    }
  },
  itemExerciseDesc:{
    [theme.breakpoints.down('xs')]:{
      minHeight: 224,
      height: 'auto'
    }
  }
})

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
    classes,
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
    <Grid container className={classes.container}>
      <Grid item className={classes.itemExerciseList} xs={12} sm={6} md={4} lg={3}>
        <Paper className={classes.paper}>
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
                  <ListItemText style={{ textTransform: "capitalize" }} >
                    <Typography color="secondary">{group}</Typography>
                  </ListItemText>
                  {this.state.open[group] ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <div style={{borderBottom: '1px solid #eee'}}></div>
                <Collapse in={this.state.open[group]} timeout="auto"  color="secondary" unmountOnExit>
                  <List component="div" disablePadding>
                  {exercises.map(({ id, title }, i) => (
                    <Fragment key={i}>
                    <StyledListItem button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                      <IconButton edge="end" onClick={()=>onSelectEdit(id)}>
                        <Edit color="primary" />
                      </IconButton>
                      <IconButton edge="end" onClick={()=>onDelete(id)}>
                        <DeleteIcon color="primary" />
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
      <Grid item className={classes.itemExerciseDesc} xs>
        <Paper className={classes.paper}>
        {editMode
        ? <Form muscles={muscles}
                exercise={exercise}
                onSubmit={onEditExercise} />
        : <Fragment>
          <Typography color="secondary" variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Fragment>}
        </Paper>
      </Grid>
    </Grid>
  )}
};
export default withStyles(styles)(Exercise);
