import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Grid } from "@mui/material";

const Loader = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <CircularProgress />
      </Grid>
    </Grid>
  );
};

export default Loader;
