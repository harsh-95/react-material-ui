import React from "react";
import { Grid } from "@material-ui/core";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
};

const Exercise = () => {
  return (
    <Grid container>
      <Grid item xs>
        <LeftPane styles={styles} />
      </Grid>
      <Grid item xs>
        <RightPane styles={styles} />
      </Grid>
    </Grid>
  );
};
export default Exercise;
