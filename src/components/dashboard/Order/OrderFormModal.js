import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addOrder } from "../../../services/firebase/firebase";

const OrderFormModal = () => {
  const [open, setOpen] = React.useState(true);
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    link: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setOpen(false);
    await addOrder(formData);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter order data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Title"
              type="text"
              fullWidth
              required={true}
              value={formData.title}
              onChange={(ev) =>
                setFormData({ ...formData, title: ev.target.value })
              }
            />
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="name"
              fullWidth
              required={true}
              value={formData.name}
              onChange={(ev) =>
                setFormData({ ...formData, name: ev.target.value })
              }
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              required={true}
              value={formData.email}
              onChange={(ev) =>
                setFormData({ ...formData, email: ev.target.value })
              }
            />
            <TextField
              margin="dense"
              id="url"
              label="Order url"
              type="url"
              fullWidth
              required={true}
              value={formData.link}
              onChange={(ev) =>
                setFormData({ ...formData, link: ev.target.value })
              }
            />
            <DialogActions>
              <Button type="submit" color="primary">
                Send
              </Button>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderFormModal;
