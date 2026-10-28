import {
  Container,
  Flex,
  Heading,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import Summary from "../summary/Summary";
import ExpenseView from "../Pages/ExpenseView";
import { GlobContext } from "../context/Context";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    allTransactions,
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobContext);
  useEffect(() => {
    let income = 0;
    let expense = 0;
    allTransactions.forEach((item) => {
      item.type==="income" ? (income += Number(item.amount)) : (expense += Number(item.amount));
    });
    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransactions]);
  return (
    <Container bg={"#f8fafd"} maxW={"container.3xl"} height={"100vh"} p={"0"}>
      <Flex height={"full"}>
        <Box height={"full"} flex={5} w={["20%", "30%", "20%", "50%", "60%"]}>
          <Flex textAlign={"center"} flexDirection={"column"} pr={"5"} pl={"5"}>
            <Flex
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={"12"}
            >
              <Heading
                color={"blue.400"}
                display={["none", "block", "block", "block", "block"]}
              >
                Expense Tracker
              </Heading>
              <Flex alignItems={"center"}>
                <Button
                  onClick={onOpen}
                  bg={"blue.400"}
                  color={"black"}
                  _hover={{ bg: "blue.500" }}
                  ml={"4"}
                >
                 + Add New Transcation 
                </Button>
              </Flex>
            </Flex>

            <Summary
              isOpen={isOpen}
              onClose={onClose}
              totalExpense={totalExpense}
              totalIncome={totalIncome}
            />

            <Flex
              w={"full"}
              alignItems={"flex-start"}
              justifyContent={"space-evenly"}
              mt={"10"}
              gap={"10"}
              flexDirection={["column", "column", "column", "row", "row"]}
            >
              <ExpenseView type={"income"} data={allTransactions.filter(item => item.type === "income")} />
              <ExpenseView type={"expense"} data={allTransactions.filter(item => item.type === "expense")} />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
