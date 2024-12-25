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

const FinanceManagementForm = () => {
  // State for Daily Income/Expense Reports
  const [incomeExpenseData, setIncomeExpenseData] = useState({
    date: "",
    income: 0,
    expense: 0,
    description: "",
  });

  // State for Profit/Loss Statements
  const [profitLossData, setProfitLossData] = useState({
    income: 0,
    expenses: 0,
    netProfit: 0,
  });

  // State for Tax Calculations
  const [taxData, setTaxData] = useState({
    income: 0,
    taxRate: 0,
    calculatedTax: 0,
  });

  // Handler for Daily Income/Expense Reports
  const handleIncomeExpenseChange = (e) => {
    const { name, value } = e.target;
    setIncomeExpenseData({ ...incomeExpenseData, [name]: value });
  };

  const handleSubmitIncomeExpense = (e) => {
    e.preventDefault();
    alert("Income and Expense data saved successfully.");
  };

  // Handler for Profit/Loss Statements
  const handleProfitLossChange = (e) => {
    const { name, value } = e.target;
    setProfitLossData({ ...profitLossData, [name]: value });
  };

  const handleSubmitProfitLoss = (e) => {
    e.preventDefault();
    const netProfit = profitLossData.income - profitLossData.expenses;
    setProfitLossData({ ...profitLossData, netProfit });
    alert("Profit/Loss data updated successfully.");
  };

  // Handler for Tax Calculations
  const handleTaxChange = (e) => {
    const { name, value } = e.target;
    setTaxData({ ...taxData, [name]: value });
  };

  const handleSubmitTaxCalculation = (e) => {
    e.preventDefault();
    const calculatedTax = (taxData.income * taxData.taxRate) / 100;
    setTaxData({ ...taxData, calculatedTax });
    alert("Tax calculated successfully.");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Finance Management
      </Typography>

      {/* Daily Income / Expense Reports Form */}
      <Typography variant="h5" gutterBottom>
        Daily Income / Expense Reports
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitIncomeExpense}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                name="date"
                type="date"
                value={incomeExpenseData.date}
                onChange={handleIncomeExpenseChange}
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Income"
                name="income"
                type="number"
                value={incomeExpenseData.income}
                onChange={handleIncomeExpenseChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Expense"
                name="expense"
                type="number"
                value={incomeExpenseData.expense}
                onChange={handleIncomeExpenseChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Description"
                name="description"
                value={incomeExpenseData.description}
                onChange={handleIncomeExpenseChange}
                fullWidth
                multiline
                rows={3}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Income/Expense Report
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Profit / Loss Statements Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Profit / Loss Statements
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitProfitLoss}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Income"
                name="income"
                type="number"
                value={profitLossData.income}
                onChange={handleProfitLossChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Expenses"
                name="expenses"
                type="number"
                value={profitLossData.expenses}
                onChange={handleProfitLossChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Net Profit: ${profitLossData.netProfit}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Calculate Profit/Loss
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Tax Calculations Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Tax Calculations
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitTaxCalculation}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Income"
                name="income"
                type="number"
                value={taxData.income}
                onChange={handleTaxChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Tax Rate (%)"
                name="taxRate"
                type="number"
                value={taxData.taxRate}
                onChange={handleTaxChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Calculated Tax: ${taxData.calculatedTax}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Calculate Tax
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default FinanceManagementForm;
