import { createContext, useState } from "react";

export const GlobContext = createContext(null);

export default function GlobState({ children }) {
  const [FormData, setFormData] = useState({
    description: "",
    amount: 0,
    type: "income",
  });
  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);
  function handleSubmit(data) {
      console.log(data);
    if (data.type === "expense") {
      setTotalExpense((prev) => prev + Number(data.amount));
    } else {
      setTotalIncome((prev) => prev + Number(data.amount));
    }
    setAllTransactions([...allTransactions, data]);
  }

  return (
    <GlobContext.Provider
      value={{
        FormData,
        setFormData,
        value,
        setValue,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        allTransactions,
        setAllTransactions,
        handleSubmit,
      }}
    >
      {children}
    </GlobContext.Provider>
  );
}
