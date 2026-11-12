
import { createContext, useState } from "react";

export const GlobContext = createContext(null);

export default function GlobState({ children }) {

  // Form Data
  const [FormData, setFormData] = useState({
    description: "",
    amount: "",
    type: "income",
  });

  // Transaction States
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  // Handle Form Submission
  function handleSubmit(data) {
    const amount = Number(data.amount);

    if (!data.description.trim() || !amount || amount <= 0) {
      return;
    }

    const newTransaction = {
      id: Date.now(),
      description: data.description,
      amount: amount,
      type: data.type,
    };

    // Update Income or Expense
    if (data.type === "expense") {
      setTotalExpense((prev) => prev + amount);
    } else {
      setTotalIncome((prev) => prev + amount);
    }

    // Add Transaction
    setAllTransactions((prev) => [
      ...prev,
      newTransaction,
    ]);

    // Reset Form
    setFormData({
      description: "",
      amount: "",
      type: "income",
    });
  }

  // Available Balance
  const balance = totalIncome - totalExpense;

  return (
    <GlobContext.Provider
      value={{
        FormData,
        setFormData,

        totalExpense,
        setTotalExpense,

        totalIncome,
        setTotalIncome,

        balance,

        allTransactions,
        setAllTransactions,

        handleSubmit,
      }}
    >
      {children}
    </GlobContext.Provider>
  );
}
