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
  FormControlLabel,
  Checkbox,
  Divider,
  LinearProgress,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const AnalyticsReportingForm = () => {
  // State for Product Performance
  const [productData, setProductData] = useState({
    productID: "",
    productName: "",
    unitsSold: 0,
    stockLevel: 0,
    revenue: 0,
  });

  // State for Sales Trends
  const [salesTrendData, setSalesTrendData] = useState({
    startDate: "",
    endDate: "",
    salesAmount: 0,
  });

  // State for Inventory Turnover
  const [inventoryTurnoverData, setInventoryTurnoverData] = useState({
    totalSales: 0,
    averageInventory: 0,
    turnoverRate: 0,
  });

  // Handler for Product Performance Form
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    alert("Product performance data saved successfully.");
  };

  // Handler for Sales Trends Form
  const handleSalesTrendChange = (e) => {
    const { name, value } = e.target;
    setSalesTrendData({ ...salesTrendData, [name]: value });
  };

  const handleSubmitSalesTrend = (e) => {
    e.preventDefault();
    alert("Sales trend data saved successfully.");
  };

  // Handler for Inventory Turnover Form
  const handleInventoryTurnoverChange = (e) => {
    const { name, value } = e.target;
    setInventoryTurnoverData({ ...inventoryTurnoverData, [name]: value });
  };

  const handleSubmitInventoryTurnover = (e) => {
    e.preventDefault();
    const turnoverRate = inventoryTurnoverData.totalSales / inventoryTurnoverData.averageInventory;
    setInventoryTurnoverData({ ...inventoryTurnoverData, turnoverRate });
    alert("Inventory turnover data saved successfully.");
  };

  // Example Data for Sales Trends (Chart)
  const salesTrendChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales Amount",
        data: [2000, 2500, 1800, 3200, 1500, 2200],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Analytics and Reporting
      </Typography>

      {/* Product Performance Form */}
      <Typography variant="h5" gutterBottom>
        Product Performance
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitProduct}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product ID"
                name="productID"
                value={productData.productID}
                onChange={handleProductChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Product Name"
                name="productName"
                value={productData.productName}
                onChange={handleProductChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Units Sold"
                name="unitsSold"
                type="number"
                value={productData.unitsSold}
                onChange={handleProductChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Stock Level"
                name="stockLevel"
                type="number"
                value={productData.stockLevel}
                onChange={handleProductChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Revenue"
                name="revenue"
                type="number"
                value={productData.revenue}
                onChange={handleProductChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Product Performance
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Divider style={{ margin: "2rem 0" }} />

      {/* Sales Trends Form */}
      <Typography variant="h5" gutterBottom>
        Sales Trends
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitSalesTrend}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Start Date"
                name="startDate"
                type="date"
                value={salesTrendData.startDate}
                onChange={handleSalesTrendChange}
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="End Date"
                name="endDate"
                type="date"
                value={salesTrendData.endDate}
                onChange={handleSalesTrendChange}
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Sales Amount"
                name="salesAmount"
                type="number"
                value={salesTrendData.salesAmount}
                onChange={handleSalesTrendChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Sales Trends
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Divider style={{ margin: "2rem 0" }} />

      {/* Inventory Turnover Form */}
      <Typography variant="h5" gutterBottom>
        Inventory Turnover
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitInventoryTurnover}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Total Sales"
                name="totalSales"
                type="number"
                value={inventoryTurnoverData.totalSales}
                onChange={handleInventoryTurnoverChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Average Inventory"
                name="averageInventory"
                type="number"
                value={inventoryTurnoverData.averageInventory}
                onChange={handleInventoryTurnoverChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Inventory Turnover Rate: {inventoryTurnoverData.turnoverRate}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Inventory Turnover
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Divider style={{ margin: "2rem 0" }} />

      {/* Sales Trends Chart */}
      <Typography variant="h5" gutterBottom>
        Sales Trends Visualization
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <Line data={salesTrendChartData} />
      </Paper>

      {/* Loading Simulation */}
      <Box sx={{ width: "100%", marginTop: "2rem" }}>
        <LinearProgress />
      </Box>
    </Container>
  );
};

export default AnalyticsReportingForm;
