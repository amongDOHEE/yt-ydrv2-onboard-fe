import { Box, Card, Grid } from "@mui/material";
import React from "react";
import InfoCard from "./InfoCard";

interface Rows {
  firstRow: CardInfo[]
  secondRow: CardInfo[]
}

export interface CardInfo {
  name: string,
  value?: string | number | undefined
}

const FormRow = (props: CardInfo[]) => {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <InfoCard 
          name={props[0].name}
          value={props[0].value}
        />
      </Grid>
      <Grid item xs={4}>
        <InfoCard 
          name={props[1].name}
          value={props[1].value}
        />
      </Grid>
      <Grid item xs={4}>
        <InfoCard 
          name={props[2].name}
          value={props[2].value}
        />
      </Grid>
    </React.Fragment>
  );
};

const DataCard = (props: Rows) => {
  //props firstRow, secondRow
  //Row: [{name: string, value: any}]
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid container item spacing={3}>
          { FormRow(props.firstRow) }
        </Grid>
        <Grid container item spacing={3}>
          { FormRow(props.secondRow) }
        </Grid>
      </Grid>
    </Box>
  );
}

export default DataCard;