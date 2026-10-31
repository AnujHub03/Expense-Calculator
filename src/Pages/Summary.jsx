import { Box, Flex, Heading,Text } from "@chakra-ui/react";
import React from "react";
import TransactionForm from "../Pages/TransactionForm";
import TransactionCart from "../charts/TransactionCart";

const Summary = ({ onClose,isOpen, totalExpense, totalIncome }) => {
  console.log(totalExpense,totalIncome);
  
  return (
    <Box
      p={"4"}
      bg={"#e2e8f0"}
      border={"1px solid"}
      borderRadius={"10"}
      boxShadow={"md"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      display={"flex"}
    >
      <Flex
        w={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{
          base: "column",
          md: "column",
          sm: "column",
          lg: "row",
          xl: "row",
        }}
        gap={"4"}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
          // border={"1px solid"}
          // borderColor={"gray.300"}
          p={"4"}
          // borderRadius={"10"}
        >
          <Heading size={"md"} color={"gray.600"} mb={"4"}>
            Balance is $ {totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.300"}
            borderRadius={"10"}
            p={"4"}
          >
            <Flex flexDirection={'column'}>
              <Heading color={'gray.700'}>
                $ {totalIncome}
              </Heading>
              <Text color={"gray.600"}>
                Total Income
              </Text>
            </Flex>
          </Flex>
           <Flex
            justifyContent={"space-evenly"}
            alignItems={"center"}
            bg={"gray.50"}
            w={"full"}
            h={"100px"}
            border={"1px solid"}
            borderColor={"gray.300"}
            borderRadius={"10"}
            p={"4"}
          >
            <Flex flexDirection={'column'}>
              <Heading color={'gray.700'}>
                $ {totalExpense}
              </Heading>
              <Text color={"gray.600"}>
                Total Expense
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          w={"300px"}
          h={"300px"}
          mt={'10'}
          ml={'-90px'}
          mr={'5'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          // border={"1px solid"}
          // borderColor={"gray.300"}
          borderRadius={"10"}
          p={"4"}
        >
          <Heading size={"md"} color={"gray.600"} mb={"4"}>
            Expense Chart
            <TransactionCart expense={totalExpense} income={totalIncome}/>
          </Heading>
        </Box>
      </Flex>
      <TransactionForm onClose={onClose} isOpen={isOpen}/>
    </Box>
  );
};

export default Summary;
