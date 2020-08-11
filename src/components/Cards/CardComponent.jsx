import React from "react";

// importing some Components from Material-UI
import { Card, Typography, CardContent, Grid } from "@material-ui/core";
// CountUp component to include the counting animation
import CountUp from "react-countup";

const CardComponent = ({ caseType, lastUpdate, name, desc, classNames }) => {
  return (
    <>
      <Grid item component={Card} xs={12} md={3} className={classNames}>
        <CardContent>
          <Typography color="textSecondary" variant="body1">
            {name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            <CountUp
              start={0}
              end={caseType.value}
              separator=","
              duration={2.5}
            />
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="subtitle2">{desc}</Typography>
        </CardContent>
      </Grid>
    </>
  );
};

export default CardComponent;
