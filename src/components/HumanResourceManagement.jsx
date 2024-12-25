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
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const HRManagementForm = () => {
  // State for Employee Records
  const [employeeData, setEmployeeData] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    position: "",
    department: "",
    email: "",
    phoneNumber: "",
  });

  // State for Attendance and Payroll
  const [attendanceData, setAttendanceData] = useState({
    employeeID: "",
    date: "",
    attendance: "Present",
    hoursWorked: 0,
    salary: 0,
  });

  // State for Roles and Permissions
  const [rolesPermissions, setRolesPermissions] = useState({
    employeeID: "",
    role: "",
    permissions: {
      viewReports: false,
      manageEmployees: false,
      accessPayroll: false,
    },
  });

  // Handler for Employee Records
  const handleEmployeeChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmitEmployee = (e) => {
    e.preventDefault();
    alert("Employee data saved successfully.");
  };

  // Handler for Attendance and Payroll
  const handleAttendanceChange = (e) => {
    const { name, value } = e.target;
    setAttendanceData({ ...attendanceData, [name]: value });
  };

  const handleSubmitAttendance = (e) => {
    e.preventDefault();
    const calculatedSalary = attendanceData.hoursWorked * 20; // Example rate per hour
    setAttendanceData({ ...attendanceData, salary: calculatedSalary });
    alert("Attendance and Payroll data saved successfully.");
  };

  // Handler for Roles and Permissions
  const handleRolesPermissionsChange = (e) => {
    const { name, value } = e.target;
    setRolesPermissions({ ...rolesPermissions, [name]: value });
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setRolesPermissions({
      ...rolesPermissions,
      permissions: { ...rolesPermissions.permissions, [name]: checked },
    });
  };

  const handleSubmitRolesPermissions = (e) => {
    e.preventDefault();
    alert("Roles and Permissions updated successfully.");
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Human Resource Management
      </Typography>

      {/* Employee Records Form */}
      <Typography variant="h5" gutterBottom>
        Employee Records
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitEmployee}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employee ID"
                name="employeeID"
                value={employeeData.employeeID}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                value={employeeData.firstName}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                value={employeeData.lastName}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Position"
                name="position"
                value={employeeData.position}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Department"
                name="department"
                value={employeeData.department}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={employeeData.email}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone Number"
                name="phoneNumber"
                value={employeeData.phoneNumber}
                onChange={handleEmployeeChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Employee Record
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Attendance and Payroll Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Attendance and Payroll
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitAttendance}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employee ID"
                name="employeeID"
                value={attendanceData.employeeID}
                onChange={handleAttendanceChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Date"
                name="date"
                type="date"
                value={attendanceData.date}
                onChange={handleAttendanceChange}
                fullWidth
                required
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Attendance</InputLabel>
                <Select
                  name="attendance"
                  value={attendanceData.attendance}
                  onChange={handleAttendanceChange}
                >
                  <MenuItem value="Present">Present</MenuItem>
                  <MenuItem value="Absent">Absent</MenuItem>
                  <MenuItem value="Leave">Leave</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Hours Worked"
                name="hoursWorked"
                type="number"
                value={attendanceData.hoursWorked}
                onChange={handleAttendanceChange}
                fullWidth
                required
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                Salary: ${attendanceData.salary}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Attendance and Payroll
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* Roles and Permissions Form */}
      <Typography variant="h5" style={{ marginTop: "2rem" }} gutterBottom>
        Roles and Permissions
      </Typography>
      <Paper style={{ padding: "2rem" }}>
        <form onSubmit={handleSubmitRolesPermissions}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Employee ID"
                name="employeeID"
                value={rolesPermissions.employeeID}
                onChange={handleRolesPermissionsChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Role</InputLabel>
                <Select
                  name="role"
                  value={rolesPermissions.role}
                  onChange={handleRolesPermissionsChange}
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Employee">Employee</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">Permissions</Typography>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rolesPermissions.permissions.viewReports}
                    onChange={handlePermissionChange}
                    name="viewReports"
                  />
                }
                label="View Reports"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rolesPermissions.permissions.manageEmployees}
                    onChange={handlePermissionChange}
                    name="manageEmployees"
                  />
                }
                label="Manage Employees"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rolesPermissions.permissions.accessPayroll}
                    onChange={handlePermissionChange}
                    name="accessPayroll"
                  />
                }
                label="Access Payroll"
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Roles and Permissions
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default HRManagementForm;
