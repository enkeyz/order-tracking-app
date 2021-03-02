import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import DeleteOrderButton from "../buttons/DeleteOrderButton";
import CompleteOrderButton from "../buttons/CompleteOrderButton";
import OrderLinkButton from "../buttons/OrderLinkButton";

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

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={5}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="h6"
                  style={{
                    textDecoration:
                      order.orderStatus === "completed"
                        ? "line-through"
                        : "none",
                  }}
                >
                  {order.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {order.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {order.orderStatus}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                {order.price} {order.currency}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="row" margin={-10}>
          <Grid item xs={3} align="center">
            <DeleteOrderButton docId={order.id} />
          </Grid>
          <Grid item xs={3} align="center">
            <CompleteOrderButton docId={order.id} />
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="primary" aria-label="complete">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <OrderLinkButton url={order.link} />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderItem;
