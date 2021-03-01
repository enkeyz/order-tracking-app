import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { removeOrder, updateOrder } from "../../../services/firebase/firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "1rem",
    maxWidth: 500,
  },
}));

const OrderItem = ({ order }) => {
  const classes = useStyles();

  const handleClick = () => {
    window.open(order.link, "_blank");
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{
                    textDecoration: order.completed ? "line-through" : "none",
                  }}
                >
                  {order.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {order.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {order.orderId}
                </Typography>
              </Grid>
              <Grid item></Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">{order.price}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <ButtonGroup
              color="primary"
              fullWidth={true}
              size="small"
              variant="text"
            >
              <Button
                onClick={async () => updateOrder(order.id, { completed: true })}
              >
                Complete
              </Button>
              <Button>Edit</Button>
              <Button onClick={async () => removeOrder(order.id)}>
                Delete
              </Button>
              <Button onClick={handleClick}>Link</Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderItem;
