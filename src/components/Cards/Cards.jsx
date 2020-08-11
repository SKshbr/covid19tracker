import React from "react";

// importing some Components from Material-UI
import { Grid } from "@material-ui/core";
import cx from "classnames";

import CardComponent from "./CardComponent";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  // To check weather the data is loaded or not if not then "Loading..." is displayed
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <CardComponent
          classNames={cx(styles.card, styles.Infected)}
          name={"Infected"}
          caseType={confirmed}
          lastUpdate={lastUpdate}
          desc={"Number of active cases of COVID-19"}
        />
        <CardComponent
          classNames={cx(styles.card, styles.Recovered)}
          name={"Recovered"}
          caseType={recovered}
          lastUpdate={lastUpdate}
          desc={"Number of recoveries from COVID-19"}
        />
        <CardComponent
          classNames={cx(styles.card, styles.Deaths)}
          name={"Deaths"}
          caseType={deaths}
          lastUpdate={lastUpdate}
          desc={"Number of deaths caused by COVID-19"}
        />
      </Grid>
    </div>
  );
};

export default Cards;
