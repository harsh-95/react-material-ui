import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const Exercise = ({ exercises }) => {
  return (
    <Grid container>
      <Grid item xs>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => (
            <>
              <Typography variant="h6" style={{ textTransform: "capitalize" }}>
                {group}
              </Typography>
              <List component="ul">
                {exercises.map(ob => (
                  <ListItem button>
                    <ListItemText primary={ob.title} />
                  </ListItem>
                ))}
              </List>
            </>
          ))}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>Right Pane</Paper>
      </Grid>
    </Grid>
  );
};
export default Exercise;
