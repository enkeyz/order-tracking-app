import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

import { addOrder } from "../../../services/firebase/firebase";

const OrderFormModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    name: "",
    email: "",
    phone: "",
    link: "",
    orderId: "",
  });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    onClose();
    await addOrder({
      ...formData,
      completed: false,
      id: new Date().getTime().toString(),
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter order data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="normal"
              variant="outlined"
              id="order-id"
              label="Order id"
              type="text"
              fullWidth
              required={true}
              value={formData.orderId}
              onChange={(ev) =>
                setFormData({ ...formData, orderId: ev.target.value })
              }
            />
            <TextField
              autoFocus
              margin="normal"
              variant="outlined"
              id="price"
              label="Price"
              type="number"
              fullWidth
              required={true}
              value={formData.price}
              onChange={(ev) =>
                setFormData({ ...formData, price: ev.target.value })
              }
            />
            <TextField
              autoFocus
              margin="normal"
              variant="outlined"
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
              margin="normal"
              variant="outlined"
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
              margin="normal"
              variant="outlined"
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
              margin="normal"
              variant="outlined"
              id="phone"
              label="Phone"
              type="tel"
              fullWidth
              required={true}
              value={formData.phone}
              onChange={(ev) =>
                setFormData({ ...formData, phone: ev.target.value })
              }
            />
            <TextField
              margin="normal"
              variant="outlined"
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
              <Button onClick={onClose} color="primary">
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