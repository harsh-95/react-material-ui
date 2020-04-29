import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  styled
} from "@material-ui/core";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 450,
    overflowY: "auto"
  }
};

const StyledListItem = styled(ListItem)({
  paddingTop: 0,
  paddingBottom: 0
});

const Exercise = ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from left"
  }
}) => {
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
                  {exercises.map(({ id, title }, i) => (
                    <StyledListItem button key={i} onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                    </StyledListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
          )}
        </Paper>
      </Grid>
      <Grid item xs>
        <Paper style={styles.Paper}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};
export default Exercise;
