
import React, { useContext, useEffect } from "react";

import {
  Container,
  Flex,
  Heading,
  Box,
  Button,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";

import {
  FiPlus,
  FiTrendingUp,
  FiTrendingDown,
  FiActivity,
} from "react-icons/fi";

import Summary from "../Pages/Summary";
import ExpenseView from "../Pages/ExpenseView";
import { GlobContext } from "../Pages/Context";

const Home = () => {
  const { open, onOpen, onClose } = useDisclosure();

  const {
    allTransactions,
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
  } = useContext(GlobContext);

  // Calculate Income and Expense
  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransactions.forEach((item) => {
      if (item.type === "income") {
        income += Number(item.amount);
      } else {
        expense += Number(item.amount);
      }
    });

    setTotalIncome(income);
    setTotalExpense(expense);
  }, [allTransactions, setTotalIncome, setTotalExpense]);

  const balance = totalIncome - totalExpense;

  const formatAmount = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
<Container
  maxW="100%"
  width="100%"
  minH="100vh"
  bg="#F4F7FB"
  p={{ base: 4, md: 8, lg: 10 }}
>
  <Box width="100%" maxW="100%" mx="auto">

        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          mb={10}
          flexWrap="wrap"
          gap={4}
        >
          <VStack align="start" gap={1}>
            <HStack>
              <Box
                bg="#2563EB"
                p={2}
                borderRadius="lg"
                color="white"
              >
                <FiActivity size={22} />
              </Box>

              <Heading
                size={{ base: "lg", md: "2xl" }}
                color="#172554"
                fontWeight="bold"
              >
                Expense Tracker
              </Heading>
            </HStack>

            <Text color="gray.500" fontSize="sm">
              Manage your money. Track your financial growth.
            </Text>
          </VStack>

          <Button
            onClick={onOpen}
            bg="#2563EB"
            color="white"
            borderRadius="xl"
            px={6}
            py={6}
            fontWeight="semibold"
            _hover={{
              bg: "#1D4ED8",
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            transition="all 0.2s"
          >
            <FiPlus />
            Add Transaction
          </Button>
        </Flex>

        {/* Welcome Section */}
        <Box
          bgGradient="to-r"
          gradientFrom="#1E40AF"
          gradientTo="#3B82F6"
          borderRadius="2xl"
          p={{ base: 5, md: 8 }}
          mb={8}
          color="white"
          position="relative"
          overflow="hidden"
          boxShadow="0 10px 30px rgba(37,99,235,0.15)"
        >
          <Box
            position="absolute"
            right="-30px"
            top="-70px"
            w="220px"
            h="220px"
            bg="whiteAlpha.200"
            borderRadius="full"
          />

          <Box
            position="absolute"
            right="100px"
            bottom="-100px"
            w="180px"
            h="180px"
            bg="whiteAlpha.100"
            borderRadius="full"
          />

          <Box position="relative" zIndex={1}>
            <Badge
              bg="whiteAlpha.200"
              color="white"
              px={3}
              py={1}
              borderRadius="full"
              mb={3}
            >
              FINANCIAL OVERVIEW
            </Badge>

            <Text fontSize="sm" color="blue.100" mb={2}>
              Your Available Balance
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              mb={3}
            >
              {formatAmount(balance)}
            </Heading>

            <Text color="blue.100" fontSize="sm">
              Keep tracking your income and expenses to stay on top of your
              finances.
            </Text>
          </Box>
        </Box>

        {/* Financial Summary Cards */}
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={5} mb={10}>

          {/* Income Card */}
          <Box
            bg="white"
            p={6}
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(0,0,0,0.03)"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <HStack justify="space-between" mb={5}>
              <Text color="gray.500" fontWeight="medium">
                Total Income
              </Text>

              <Box
                bg="green.50"
                color="green.600"
                p={3}
                borderRadius="xl"
              >
                <FiTrendingUp size={22} />
              </Box>
            </HStack>

            <Heading size="xl" color="green.600">
              {formatAmount(totalIncome)}
            </Heading>

            <Text fontSize="xs" color="gray.400" mt={2}>
              Money coming into your account
            </Text>
          </Box>

          {/* Expense Card */}
          <Box
            bg="white"
            p={6}
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(0,0,0,0.03)"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <HStack justify="space-between" mb={5}>
              <Text color="gray.500" fontWeight="medium">
                Total Expenses
              </Text>

              <Box
                bg="red.50"
                color="red.500"
                p={3}
                borderRadius="xl"
              >
                <FiTrendingDown size={22} />
              </Box>
            </HStack>

            <Heading size="xl" color="red.500">
              {formatAmount(totalExpense)}
            </Heading>

            <Text fontSize="xs" color="gray.400" mt={2}>
              Money spent from your account
            </Text>
          </Box>

          {/* Balance Card */}
          <Box
            bg="white"
            p={6}
            borderRadius="2xl"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="0 4px 20px rgba(0,0,0,0.03)"
            transition="all 0.2s"
            _hover={{ transform: "translateY(-4px)", boxShadow: "lg" }}
          >
            <HStack justify="space-between" mb={5}>
              <Text color="gray.500" fontWeight="medium">
                Net Balance
              </Text>

              <Box
                bg="blue.50"
                color="blue.600"
                p={3}
                borderRadius="xl"
              >
                <FiActivity size={22} />
              </Box>
            </HStack>

            <Heading
              size="xl"
              color={balance >= 0 ? "blue.600" : "red.500"}
            >
              {formatAmount(balance)}
            </Heading>

            <Text fontSize="xs" color="gray.400" mt={2}>
              Income minus expenses
            </Text>
          </Box>
        </SimpleGrid>

        {/* Summary Component / Transaction Modal */}
        <Summary
          isOpen={open}
          onClose={onClose}
          totalExpense={totalExpense}
          totalIncome={totalIncome}
        />

        {/* Transactions Section */}
        <Box
          bg="white"
          borderRadius="2xl"
          p={{ base: 4, md: 6 }}
          border="1px solid"
          borderColor="gray.100"
          boxShadow="0 4px 20px rgba(0,0,0,0.03)"
        >
          <Flex
            justify="space-between"
            align="center"
            mb={7}
            flexWrap="wrap"
            gap={3}
          >
            <Box>
              <Heading size="lg" color="#172554">
                Transactions
              </Heading>

              <Text color="gray.500" fontSize="sm" mt={1}>
                Your income and expense history
              </Text>
            </Box>

            <Badge
              colorPalette="blue"
              px={3}
              py={2}
              borderRadius="lg"
            >
              {allTransactions.length} Transactions
            </Badge>
          </Flex>

          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={6}
          >
            {/* Income Transactions */}
            <Box
              bg="#F0FDF4"
              p={4}
              borderRadius="xl"
              border="1px solid"
              borderColor="#DCFCE7"
            >
              <HStack mb={4} justify="space-between">
                <Heading size="md" color="green.700">
                  Income
                </Heading>

                <Badge colorPalette="green">
                  {allTransactions.filter(
                    (item) => item.type === "income"
                  ).length}
                </Badge>
              </HStack>

              <ExpenseView
                type="income"
                data={allTransactions.filter(
                  (item) => item.type === "income"
                )}
              />
            </Box>

            {/* Expense Transactions */}
            <Box
              bg="#FEF2F2"
              p={4}
              borderRadius="xl"
              border="1px solid"
              borderColor="#FEE2E2"
            >
              <HStack mb={4} justify="space-between">
                <Heading size="md" color="red.700">
                  Expenses
                </Heading>

                <Badge colorPalette="red">
                  {allTransactions.filter(
                    (item) => item.type === "expense"
                  ).length}
                </Badge>
              </HStack>

              <ExpenseView
                type="expense"
                data={allTransactions.filter(
                  (item) => item.type === "expense"
                )}
              />
            </Box>
          </SimpleGrid>
        </Box>

        {/* Footer */}
        <Text
          textAlign="center"
          color="gray.400"
          fontSize="xs"
          mt={8}
          pb={4}
        >
          Expense Tracker · Manage your finances smartly
        </Text>

      </Box>
    </Container>
  );
};

export default Home;
