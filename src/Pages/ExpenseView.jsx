import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExpenseView = ({type , data}) => {
  return (
    <Box
      flex={1}
      w={"full"}
      bg={"white"}
      mr={"4"}
      mt={"10"}
      p={"5"}
      pb={"4"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} mb={"4"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "Income Transactions" : "Expense Transactions"}
        </Heading>
      </Flex>
      {data.map((item, index) => (
        <Flex
          key={index}
          justifyContent={"space-between"}
          alignItems={"center"}
          mb={"2"}
          p={"3"}
          border={"1px solid"}
          bg={type === "expense" ? "red.100" : "green.100"}
          borderRadius={"8"}
        >
          <Box>
            <Heading size={"sm"} color={"gray.700"}>
              {item.description}
            </Heading>
            <Text color={"gray.500"} fontSize={"sm"}>
              {item.type}
            </Text>
          </Box>
          <Heading
            size={"sm"}
            color={item.type === "income" ? "green.500" : "red.500"}
          >
            $ {item.amount}
          </Heading>
        </Flex>
      ))}
    </Box>
  );
};

export default ExpenseView;
