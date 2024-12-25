import React, { useState } from "react";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  InputAdornment,
} from "@mui/material";

const SalesManagementForm = () => {
  // State for Billing System
  const [billData, setBillData] = useState({
    customerName: "",
    productName: "",
    quantity: "",
    price: "",
    discount: 0,
    totalAmount: 0,
  });

  // State for Sales Reports
  const [salesReports, setSalesReports] = useState([
    { productName: "Milk", quantitySold: 50, revenue: 500 },
    { productName: "Eggs", quantitySold: 30, revenue: 180 },
  ]);

  // State for Discounts and Promotions
  const [promotionData, setPromotionData] = useState({
    promotionName: "",
    discountPercentage: 0,
    startDate: "",
    endDate: "",
  });

  const handleBillChange = (e) => {
    const { name, value } = e.target;
    setBillData({ ...billData, [name]: value });
  };

  const handleSubmitBill = (e) => {
    e.preventDefault();
    const totalAmount = billData.quantity * billData.price - (billData.discount / 100) * (billData.quantity * billData.price);
    setBillData({ ...billData, totalAmount });
  };

  const handlePromotionChange = (e) => {
    const { name, value } = e.target;
    setPromotionData({ ...promotionData, [name]: value });
  };

  const handleSubmitPromotion = (e) => {
    e.preventDefault();
    alert("Promotion Added Successfully");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sales Management
      </Typography>

      {/* Billing System Form */}
      <Typography variant="h5" gutterBottom>
        Billing System
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitBill}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Customer Name"
                name="customerName"
                value={billData.customerName}
                onChange={handleBillChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Name"
                name="productName"
                value={billData.productName}
                onChange={handleBillChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                value={billData.quantity}
                onChange={handleBillChange}
                fullWidth
                required
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Price per Item"
                name="price"
                type="number"
                value={billData.price}
                onChange={handleBillChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Discount (%)"
                name="discount"
                type="number"
                value={billData.discount}
                onChange={handleBillChange}
                fullWidth
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Total Amount: ${billData.totalAmount}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Generate Bill
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Sales Reports */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Sales Reports
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <Typography variant="h6">Sales Summary</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {salesReports.map((report, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper style={{ padding: "1rem" }}>
                    <Typography variant="h6">{report.productName}</Typography>
                    <Typography>Quantity Sold: {report.quantitySold}</Typography>
                    <Typography>Revenue: ${report.revenue}</Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Discounts and Promotions */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Discounts and Promotions
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitPromotion}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Promotion Name"
                name="promotionName"
                value={promotionData.promotionName}
                onChange={handlePromotionChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Discount Percentage"
                name="discountPercentage"
                type="number"
                value={promotionData.discountPercentage}
                onChange={handlePromotionChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={promotionData.startDate}
                onChange={handlePromotionChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={promotionData.endDate}
                onChange={handlePromotionChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Add Promotion
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SalesManagementForm;
