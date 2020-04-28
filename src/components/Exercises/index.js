import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  }
};

const Exercise = ({ exercises, category }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises], i) =>
            !category || category === group ? (
              <Fragment key={i}>
                <Typography
                  variant="h6"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }, i) => (
                    <ListItem button key={i}>
                      <ListItemText primary={title} />
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography variant="h5">Welcome!</Typography>
          <Typography variant="subheading">
            Please select an exercise
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Exercise;
