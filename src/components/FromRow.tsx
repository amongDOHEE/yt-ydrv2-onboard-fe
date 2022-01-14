import { Grid } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

const FormRow: React.FC = () => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <InfoCard/>
      </Grid>
      <Grid item xs={4}>
        <InfoCard/>
      </Grid>
      <Grid item xs={4}>
        <InfoCard/>
      </Grid>
    </React.Fragment>
  );
};

export default FormRow;