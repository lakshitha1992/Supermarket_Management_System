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
  Rating,
} from "@mui/material";

const CustomerManagementForm = () => {
  // State for Membership / Loyalty Program
  const [membershipData, setMembershipData] = useState({
    customerId: "",
    membershipLevel: "",
    points: 0,
    rewardsStatus: "",
  });

  // State for Customer Feedback
  const [feedbackData, setFeedbackData] = useState({
    customerId: "",
    rating: 0,
    comments: "",
  });

  // State for Sales History
  const [salesHistoryData, setSalesHistoryData] = useState({
    customerId: "",
    product: "",
    quantity: "",
    totalAmount: 0,
    date: "",
  });

  // Handler for Membership Program
  const handleMembershipChange = (e) => {
    const { name, value } = e.target;
    setMembershipData({ ...membershipData, [name]: value });
  };

  const handleSubmitMembership = (e) => {
    e.preventDefault();
    alert("Membership details updated successfully.");
  };

  // Handler for Customer Feedback
  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    alert("Feedback submitted successfully.");
  };

  // Handler for Sales History
  const handleSalesHistoryChange = (e) => {
    const { name, value } = e.target;
    setSalesHistoryData({ ...salesHistoryData, [name]: value });
  };

  const handleSubmitSalesHistory = (e) => {
    e.preventDefault();
    const totalAmount = salesHistoryData.quantity * 100; // Example price of 100 for the product
    setSalesHistoryData({ ...salesHistoryData, totalAmount });
    alert("Sales history recorded successfully.");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Customer Management
      </Typography>

      {/* Membership / Loyalty Program Form */}
      <Typography variant="h5" gutterBottom>
        Membership / Loyalty Program
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitMembership}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Customer ID"
                name="customerId"
                value={membershipData.customerId}
                onChange={handleMembershipChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Membership Level"
                name="membershipLevel"
                value={membershipData.membershipLevel}
                onChange={handleMembershipChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Points"
                name="points"
                type="number"
                value={membershipData.points}
                onChange={handleMembershipChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Rewards Status</InputLabel>
                <Select
                  label="Rewards Status"
                  name="rewardsStatus"
                  value={membershipData.rewardsStatus}
                  onChange={handleMembershipChange}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Update Membership
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Customer Feedback Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Customer Feedback
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitFeedback}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Customer ID"
                name="customerId"
                value={feedbackData.customerId}
                onChange={handleFeedbackChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Rating</InputLabel>
                <Rating
                  name="rating"
                  value={feedbackData.rating}
                  onChange={(e, newValue) => setFeedbackData({ ...feedbackData, rating: newValue })}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Comments"
                name="comments"
                multiline
                rows={4}
                value={feedbackData.comments}
                onChange={handleFeedbackChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit Feedback
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Sales History Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Sales History
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitSalesHistory}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Customer ID"
                name="customerId"
                value={salesHistoryData.customerId}
                onChange={handleSalesHistoryChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product"
                name="product"
                value={salesHistoryData.product}
                onChange={handleSalesHistoryChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Quantity"
                name="quantity"
                type="number"
                value={salesHistoryData.quantity}
                onChange={handleSalesHistoryChange}
                fullWidth
                required
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Total Amount: ${salesHistoryData.totalAmount}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sale Date"
                name="date"
                type="date"
                value={salesHistoryData.date}
                onChange={handleSalesHistoryChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Record Sales History
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CustomerManagementForm;
