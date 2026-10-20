import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobContext } from "../context/Context";

const TransactionForm = ({ onClose, isOpen }) => {
  const {
    FormData,
    setFormData,
    value,
    setValue,
    allTransactions,
    setAllTransactions,
    handleSubmit,
  } = useContext(GlobContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...FormData, [name]: value });
  } 
    function handleFormSubmit(e) {
  e.preventDefault();
  handleSubmit(FormData); 
  onClose();
}

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleFormSubmit}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Add New Transaction </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Enter Description</FormLabel>
                <Input
                  type="text"
                  name="description"
                  onChange={handleChange}
                  placeholder="Enter Transaction Description"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Enter Amount</FormLabel>
                <Input
                  type="number"
                  name="amount"
                  onChange={handleChange}
                  placeholder="Enter Transaction Amount"
                />
              </FormControl>
              <RadioGroup
                mt={"5"}
                name="type"
                onChange={setValue}
                value={FormData.type}
                
              >
                <FormLabel>Select Transaction Type</FormLabel>
                <Radio
                  checked={FormData.type === "income"}
                  name="type"
                  value="income"
                  colorScheme="red"
                  onChange={handleChange}
                >
                  Income
                </Radio>
                <Radio
                  checked={FormData.type === "expense"}
                  name="type"
                  value="expense"
                  colorScheme="red"
                  onChange={handleChange}
                >
                  Expense
                </Radio>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button
                bg={"blue.400"}
                color={"black"}
                _hover={{ bg: "blue.500" }}
                mr={3}
                type="submit"
                 onClick={onClose}
              >
                Add Transaction
              </Button>
              <Button
                onClick={onClose}
                bg={"gray.300"}
                color={"black"}
                _hover={{ bg: "gray.400" }}
              >
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </form>
    </Modal>
  );
};

export default TransactionForm;
