import React, { useState } from "react";
import {
  Container,
  TextField,
  MenuItem,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const InventoryManagementForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    stockLevel: "",
    expiryDate: "",
  });

  const [inventory, setInventory] = useState([]);

  const categories = ["Groceries", "Vegetables", "Dairy", "Beverages"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInventory([...inventory, formData]);
    setFormData({
      productName: "",
      category: "",
      stockLevel: "",
      expiryDate: "",
    });
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Inventory Management
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <TextField
          label="Product Name"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          select
          label="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        >
          <MenuItem value="">
            <em>Select Category</em>
          </MenuItem>
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          label="Stock Level"
          name="stockLevel"
          type="number"
          value={formData.stockLevel}
          onChange={handleChange}
          fullWidth
          margin="normal"
          inputProps={{ min: 0 }}
          required
        />
        <TextField
          label="Expiry Date"
          name="expiryDate"
          type="date"
          value={formData.expiryDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "1rem" }}
        >
          Add to Inventory
        </Button>
      </form>

      <Typography variant="h5" align="center" gutterBottom>
        Current Inventory
      </Typography>
      {inventory.length > 0 ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Product Name</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Stock Level</TableCell>
                <TableCell>Expiry Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inventory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.productName}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.stockLevel}</TableCell>
                  <TableCell>{item.expiryDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography align="center" style={{ marginTop: "1rem" }}>
          No items in inventory yet.
        </Typography>
      )}
    </Container>
  );
};

export default InventoryManagementForm;
