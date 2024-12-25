# Supermarket Management System - Frontend

This is the frontend part of a Supermarket Management System, built using **React** and **Material-UI**. The system is designed to manage various supermarket operations such as inventory, sales, customer management, finance, and more. It is a responsive and interactive dashboard with animations, making it easy to navigate through various modules and manage the operations efficiently.

## Features

### **Modules in the System:**

1. **Inventory Management**
   - Manage products, stock levels, and categories (e.g., Groceries, Dairy, Beverages).
   - Track expiry dates and reorder levels.

2. **Sales Management**
   - Manage billing, sales reports, discounts, and promotions.

3. **Supplier Management**
   - Manage supplier records, purchase orders, and payment tracking.

4. **Customer Management**
   - Manage membership, customer feedback, and sales history.

5. **Finance Management**
   - View daily income/expense reports, profit/loss statements, and tax calculations.

6. **Human Resource Management**
   - Manage employee records, attendance, payroll, and roles.

7. **Analytics and Reporting**
   - View product performance, sales trends, and inventory turnover.

8. **Security and Administration**
   - Manage user roles, access control, and data backup/restore.

### **Roles and Features:**

#### **Admin:**
- High-level management and oversight.
- System configuration, user management, inventory oversight, financial reports, and audit logs.

#### **Manager:**
- Oversee daily operations and staff.
- Monitor sales reports, handle escalations, and supervise attendance and performance.

#### **Staff:**
- Operate the front-end and assist customers.
- Point of Sale (POS) management, stock updates, customer support, and record management.

---

## Demo

![Supermarket Dashboard](https://user-images.githubusercontent.com/1234567890/supermarket-demo.png)

## Technologies Used

- **React.js**: For building the user interface.
- **Material-UI**: For responsive and modern UI components.
- **FontAwesome**: For icons used in the UI.
- **React Router**: For handling navigation between different modules.
- **State Management**: Using React's built-in `useState` for managing states.

---

## Setup and Installation

To run this project locally, follow these steps:

### 1. Clone the repository:

```bash
git clone https://github.com/lakshitha1992/Supermarket_Management_System.git

2. Navigate into the project directory:

bash
Copy code
cd Supermarket_Management_System

3. Install dependencies:

bash
Copy code
npm install
4. Start the development server:
bash
Copy code
npm start
This will launch the app at http://localhost:3000.

Folder Structure
bash
Copy code
/src
  /components
    Dashboard.js          # Main Dashboard page
    LoginForm.js          # Login page
    InventoryManagement.js # Inventory Management module
    SalesManagement.js    # Sales Management module
    AnalyticsandReporting.js # Analytics & Reporting module
    CustomerManagement.js # Customer Management module
    FinanceManagement.js  # Finance Management module
    HumanResourceManagement.js # HR Management module
    SecurityandAdministration.js # Security module
    SupplierManagement.js # Supplier Management module
  /assets
    /icons                # FontAwesome icons and custom images
  App.js                  # Main entry point
  index.js                # React entry point

Features

Responsive Design: This system is fully responsive and designed to work seamlessly on both desktops and mobile devices.

User-Friendly Interface: Each module comes with an intuitive user interface that allows easy navigation and management of supermarket operations.

Animations: The system includes smooth animations for various actions such as opening/closing the sidebar, hover effects, and transitions between sections.

Authentication: Basic login form with authentication for admins, managers, and staff.

Future Enhancements

Backend Integration: This front-end system can be extended with a backend API to handle real-time data management.

User Authentication: Implement JWT-based authentication for secure login and role-based access control.

Advanced Reporting: Provide advanced analytics and custom reports generation.

Multi-Language Support: Add support for multiple languages to cater to a diverse user base.
Contributing

If you'd like to contribute to this project, feel free to fork it and create a pull request with your improvements. Any suggestions or feedback are also welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Material-UI: For providing the modern and responsive UI components.
FontAwesome: For the icons used in the dashboard.
React: For building the user interface in a modular and efficient way.

