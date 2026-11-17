Expense Tracker
A modern, responsive expense-tracking dashboard built with React and
Chakra UI. The app helps users record income and expenses, view
transaction history, and monitor their overall balance.
Features
- Add income and expense transactions.
- Enter a transaction description and amount.
- View total income and total expenses.
- Automatically calculate the current balance.
- Display transactions in the dashboard.
- Manage shared transaction data with React Context.
- Responsive dashboard layout styled with Chakra UI.
Tech Stack
- React 19 -- UI development
- Vite -- Development server and build tool
- Chakra UI v3 -- UI components and styling
- React Icons -- Icons
- React Context API -- Shared application state
- JavaScript (ES6+) -- Application logic
Getting Started
1. Clone the repository
git clone <your-repository-url>
2. Open the project folder
cd <project-folder>
3. Install dependencies
npm install
4. Start the development server
npm run dev
Open the local URL printed in your terminal (usually
http://localhost:5173).
Available Scripts
  Command             Description
  npm run dev       Starts the Vite development server
npm run build     Creates a production build
npm run preview   Previews the production build
Project Structure
src/
├── Pages/
│   ├── Context.jsx       # Shared transaction state and calculations
│   └── Home.jsx          # Main expense tracker dashboard
├── App.jsx               # Root application component
├── App.css               # Application styles
├── index.css             # Global styles
└── main.jsx              # Application entry point
Your folder names may differ depending on your project setup.
How It Works
1. Add a transaction by entering its description, amount, and type.
2. The app records it as either income or expense.
3. The dashboard updates the corresponding total.
4. The balance is calculated as:
   Balance = Total Income − Total Expenses
Transaction state and totals are shared across components using the
React Context API.
Production Build
To create an optimized production build, run:
npm run build
Future Improvements
- Save transactions in local storage or a database.
- Add transaction editing and deletion.
- Add date-based filters and category management.
- Display spending charts and reports.
- Add user authentication.
Author
Anuj Hooda
- GitHub: AnujHub03
