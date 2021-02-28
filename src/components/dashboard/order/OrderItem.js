import React from "react";
import {
  Grid,
  Paper,
  Typography,
  ButtonGroup,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import DoneIcon from "@material-ui/icons/Done";
import LinkIcon from "@material-ui/icons/Link";

import { removeOrder, updateOrder } from "../../../services/firebase/firebase";

const OrderItem = ({ order }) => {
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Grid item>
      <Paper style={{ padding: "0.8rem" }}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography variant="h6">{order.title}</Typography>
          </Grid>
          <Grid item>{order.name}</Grid>
        </Grid>
        <Typography variant="body2">
          {new Date(order.addedOn).toDateString()}
        </Typography>
        <ButtonGroup
          size="small"
          variant="text"
          color="primary"
          aria-label="outlined primary button group"
        >
          <IconButton onClick={async () => await removeOrder(order.id)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={async () =>
              await updateOrder(order.id, { completed: true })
            }
          >
            <DoneIcon />
          </IconButton>
          <IconButton onClick={() => handleClick(order.link)}>
            <LinkIcon />
          </IconButton>
        </ButtonGroup>
      </Paper>
    </Grid>
  );
};

export default OrderItem;
