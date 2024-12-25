import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Paper,
  ListItemIcon,
} from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon, Analytics as AnalyticsIcon, Group as GroupIcon, AccountBalance as AccountBalanceIcon, People as PeopleIcon, TrendingUp as TrendingUpIcon, Shield as ShieldIcon, Storefront as StorefrontIcon } from "@mui/icons-material";
import AnalyticsandReporting from "./AnalyticsandReporting";
import CustomerManagement from "./CustomerManagement";
import FinanceManagement from "./FinanceManagement";
import HumanResourceManagement from "./HumanResourceManagement";
import InventoryManagementForm from "./InventoryManagement";
import SalesManagement from "./SalesManagement";
import SecurityandAdministration from "./SecurityandAdministration";
import SupplierManagement from "./SupplierManagement";

// Define the Dashboard component
const Dashboard = () => {
  const [open, setOpen] = useState(false); // State to manage sidebar visibility
  const [activeSection, setActiveSection] = useState("products"); // State to track the active section

  // Function to toggle the drawer (sidebar)
  const toggleDrawer = () => {
    setOpen(!open);
  };

  // Function to handle navigation and set active section
  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  // Function to render the active section based on the current state
  const renderSection = () => {
    switch (activeSection) {
      case "products":
        return <InventoryManagementForm />;
      case "analytics":
        return <AnalyticsandReporting />;
      case "customerManagement":
        return <CustomerManagement />;
      case "financeManagement":
        return <FinanceManagement />;
      case "humanResourceManagement":
        return <HumanResourceManagement />;
      case "salesManagement":
        return <SalesManagement />;
      case "securityAndAdministration":
        return <SecurityandAdministration />;
      case "supplierManagement":
        return <SupplierManagement />;
      default:
        return <InventoryManagementForm />;
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar (Drawer) */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <List>
          <ListItem button onClick={() => handleNavigation("products")}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("analytics")}>
            <ListItemIcon><AnalyticsIcon /></ListItemIcon>
            <ListItemText primary="Analytics and Reporting" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("customerManagement")}>
            <ListItemIcon><GroupIcon /></ListItemIcon>
            <ListItemText primary="Customer Management" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("financeManagement")}>
            <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
            <ListItemText primary="Finance Management" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("humanResourceManagement")}>
            <ListItemIcon><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Human Resource Management" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("salesManagement")}>
            <ListItemIcon><TrendingUpIcon /></ListItemIcon>
            <ListItemText primary="Sales Management" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("securityAndAdministration")}>
            <ListItemIcon><ShieldIcon /></ListItemIcon>
            <ListItemText primary="Security and Administration" />
          </ListItem>
          <ListItem button onClick={() => handleNavigation("supplierManagement")}>
            <ListItemIcon><StorefrontIcon /></ListItemIcon>
            <ListItemText primary="Supplier Management" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Top Bar (AppBar) */}
        <AppBar position="sticky">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Inventory Management Dashboard
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Container component="main" sx={{ flexGrow: 1, paddingTop: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ padding: 3 }}>
                {renderSection()}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Dashboard;
