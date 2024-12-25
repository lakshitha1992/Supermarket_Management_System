import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Divider,
  Box,
  FormGroup,
} from "@mui/material";

const SecurityAdministrationForm = () => {
  // State for User Roles
  const [roleData, setRoleData] = useState({
    roleName: "",
    permissions: {
      view: false,
      edit: false,
      delete: false,
      manage: false,
    },
  });

  // State for Access Control
  const [accessControl, setAccessControl] = useState({
    role: "",
    canAccess: false,
  });

  // State for Data Backup/Restore
  const [backupData, setBackupData] = useState({
    backupFrequency: "",
    restorePoint: "",
  });

  // Handler for User Roles form
  const handleRoleChange = (e) => {
    const { name, value } = e.target;
    if (name === "permissions") {
      setRoleData((prevData) => ({
        ...prevData,
        permissions: { ...prevData.permissions, [value]: !prevData.permissions[value] },
      }));
    } else {
      setRoleData({ ...roleData, [name]: value });
    }
  };

  const handleSubmitRole = (e) => {
    e.preventDefault();
    alert("Role and permissions saved successfully.");
  };

  // Handler for Access Controls form
  const handleAccessControlChange = (e) => {
    const { name, value } = e.target;
    setAccessControl({ ...accessControl, [name]: value });
  };

  const handleSubmitAccessControl = (e) => {
    e.preventDefault();
    alert("Access control settings saved.");
  };

  // Handler for Data Backup/Restore form
  const handleBackupChange = (e) => {
    const { name, value } = e.target;
    setBackupData({ ...backupData, [name]: value });
  };

  const handleSubmitBackup = (e) => {
    e.preventDefault();
    alert("Backup and restore settings saved.");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Security and Administration
      </Typography>

      {/* User Roles Form */}
      <Typography variant="h5" gutterBottom>
        User Roles
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitRole}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Role Name"
                name="roleName"
                value={roleData.roleName}
                onChange={handleRoleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Permissions
              </Typography>
              <FormGroup row>
                {["view", "edit", "delete", "manage"].map((permission) => (
                  <FormControlLabel
                    key={permission}
                    control={
                      <Checkbox
                        checked={roleData.permissions[permission]}
                        onChange={handleRoleChange}
                        name="permissions"
                        value={permission}
                      />
                    }
                    label={permission.charAt(0).toUpperCase() + permission.slice(1)}
                  />
                ))}
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Role and Permissions
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Divider style={{ margin: "2rem 0" }} />

      {/* Access Control Form */}
      <Typography variant="h5" gutterBottom>
        Access Control
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitAccessControl}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select
                  name="role"
                  value={accessControl.role}
                  onChange={handleAccessControlChange}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="manager">Manager</MenuItem>
                  <MenuItem value="staff">Staff</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={accessControl.canAccess}
                    onChange={handleAccessControlChange}
                    name="canAccess"
                  />
                }
                label="Can Access Admin Panel"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Access Control
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Divider style={{ margin: "2rem 0" }} />

      {/* Data Backup/Restore Form */}
      <Typography variant="h5" gutterBottom>
        Data Backup/Restore
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitBackup}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Backup Frequency</InputLabel>
                <Select
                  name="backupFrequency"
                  value={backupData.backupFrequency}
                  onChange={handleBackupChange}
                >
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Restore Point"
                name="restorePoint"
                value={backupData.restorePoint}
                onChange={handleBackupChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Backup/Restore Settings
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      <Box sx={{ width: "100%", marginTop: "2rem" }}></Box>
    </Container>
  );
};

export default SecurityAdministrationForm;
