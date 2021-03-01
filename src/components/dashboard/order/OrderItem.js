import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import LinkIcon from "@material-ui/icons/Link";
import EditIcon from "@material-ui/icons/Edit";
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
                  variant="h6"
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
            <IconButton color="primary" aria-label="complete">
              <DoneIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="primary" aria-label="complete">
              <EditIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="primary" aria-label="complete">
              <DeleteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={3} align="center">
            <IconButton color="primary" aria-label="complete">
              <LinkIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default OrderItem;
