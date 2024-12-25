import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const SupplierManagementForm = () => {
  // State for Supplier Records
  const [supplierData, setSupplierData] = useState({
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    address: "",
  });

  // State for Purchase Orders
  const [purchaseOrderData, setPurchaseOrderData] = useState({
    supplier: "",
    product: "",
    quantity: "",
    price: "",
    totalAmount: 0,
  });

  // State for Payment Tracking
  const [paymentData, setPaymentData] = useState({
    supplier: "",
    paymentAmount: "",
    paymentDate: "",
    paymentStatus: "",
  });

  // Handler for Supplier Records
  const handleSupplierChange = (e) => {
    const { name, value } = e.target;
    setSupplierData({ ...supplierData, [name]: value });
  };

  const handleSubmitSupplier = (e) => {
    e.preventDefault();
    alert("Supplier record added/updated successfully.");
  };

  // Handler for Purchase Orders
  const handlePurchaseOrderChange = (e) => {
    const { name, value } = e.target;
    setPurchaseOrderData({ ...purchaseOrderData, [name]: value });
  };

  const handleSubmitPurchaseOrder = (e) => {
    e.preventDefault();
    const totalAmount = purchaseOrderData.quantity * purchaseOrderData.price;
    setPurchaseOrderData({ ...purchaseOrderData, totalAmount });
    alert("Purchase order placed successfully.");
  };

  // Handler for Payment Tracking
  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    alert("Payment recorded successfully.");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Supplier Management
      </Typography>

      {/* Supplier Records Form */}
      <Typography variant="h5" gutterBottom>
        Supplier Records
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitSupplier}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Supplier Name"
                name="name"
                value={supplierData.name}
                onChange={handleSupplierChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Contact Person"
                name="contactPerson"
                value={supplierData.contactPerson}
                onChange={handleSupplierChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                name="phone"
                value={supplierData.phone}
                onChange={handleSupplierChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={supplierData.email}
                onChange={handleSupplierChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={supplierData.address}
                onChange={handleSupplierChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Supplier Record
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Purchase Orders Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Purchase Orders
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitPurchaseOrder}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier"
                name="supplier"
                value={purchaseOrderData.supplier}
                onChange={handlePurchaseOrderChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product"
                name="product"
                value={purchaseOrderData.product}
                onChange={handlePurchaseOrderChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                value={purchaseOrderData.quantity}
                onChange={handlePurchaseOrderChange}
                fullWidth
                required
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Price per Unit"
                name="price"
                type="number"
                value={purchaseOrderData.price}
                onChange={handlePurchaseOrderChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Total Amount: ${purchaseOrderData.totalAmount}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Place Order
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Payment Tracking Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Payment Tracking
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitPayment}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Supplier"
                name="supplier"
                value={paymentData.supplier}
                onChange={handlePaymentChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Payment Amount"
                name="paymentAmount"
                type="number"
                value={paymentData.paymentAmount}
                onChange={handlePaymentChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Payment Date"
                name="paymentDate"
                type="date"
                value={paymentData.paymentDate}
                onChange={handlePaymentChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Payment Status</InputLabel>
                <Select
                  label="Payment Status"
                  name="paymentStatus"
                  value={paymentData.paymentStatus}
                  onChange={handlePaymentChange}
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Record Payment
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SupplierManagementForm;
