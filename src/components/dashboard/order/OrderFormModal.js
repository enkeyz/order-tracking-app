import React, { useState } from "react";
import { useFirestore } from "react-redux-firebase";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";

const currencies = [
  {
    value: "USD",
    label: "USD",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "HUF",
    label: "HUF",
  },
];

const OrderFormModal = ({ open, onClose }) => {
  const firestore = useFirestore();
  const { uid } = useSelector((state) => state.firebase.auth);

  const addNewOrder = (order) => {
    firestore
      .collection("users")
      .doc(uid)
      .collection("orders")
      .add({
        ...order,
        completed: false,
        _id: uuidv4(),
      });
  };

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    currency: "HUF",
    name: "",
    email: "",
    phone: "",
    link: "",
    orderId: "",
  });
  const [currency, setCurrency] = useState("HUF");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    addNewOrder(formData);
    onClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Enter order data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} noValidate={false}>
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
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
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
