
import React, { useContext } from "react";
import {
  Button,
  Input,
  Dialog,
  Field,
  RadioGroup,
  VStack,
  HStack,
} from "@chakra-ui/react";

import { GlobContext } from "../Pages/Context";

const TransactionForm = ({ onClose, isOpen }) => {
  const {
    FormData,
    setFormData,
    handleSubmit,
  } = useContext(GlobContext);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...FormData,
      [name]: value,
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    handleSubmit(FormData);
    onClose();
  }

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(e) => {
        if (!e.open) onClose();
      }}
      placement="center"
    >
      <Dialog.Backdrop />

      <Dialog.Positioner>
        <Dialog.Content>
          <form onSubmit={handleFormSubmit}>
            <Dialog.Header>
              <Dialog.Title>
                Add New Transaction
              </Dialog.Title>
            </Dialog.Header>

            <Dialog.CloseTrigger asChild>
              <Button
                variant="ghost"
                position="absolute"
                top="2"
                right="2"
                size="sm"
              >
                ✕
              </Button>
            </Dialog.CloseTrigger>

            <Dialog.Body>
              <VStack gap={4} align="stretch">

                <Field.Root required>
                  <Field.Label>
                    Enter Description
                  </Field.Label>

                  <Input
                    type="text"
                    name="description"
                    value={FormData.description || ""}
                    onChange={handleChange}
                    placeholder="Enter Transaction Description"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>
                    Enter Amount
                  </Field.Label>

                  <Input
                    type="number"
                    name="amount"
                    value={FormData.amount || ""}
                    onChange={handleChange}
                    placeholder="Enter Transaction Amount"
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>
                    Select Transaction Type
                  </Field.Label>

                  <RadioGroup.Root
                    value={FormData.type}
                    onValueChange={(e) =>
                      setFormData({
                        ...FormData,
                        type: e.value,
                      })
                    }
                  >
                    <HStack gap={4}>
                      <RadioGroup.Item value="income">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>
                          Income
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>

                      <RadioGroup.Item value="expense">
                        <RadioGroup.ItemHiddenInput />
                        <RadioGroup.ItemIndicator />
                        <RadioGroup.ItemText>
                          Expense
                        </RadioGroup.ItemText>
                      </RadioGroup.Item>
                    </HStack>
                  </RadioGroup.Root>
                </Field.Root>

              </VStack>
            </Dialog.Body>

            <Dialog.Footer>
              <Button
                type="submit"
                colorPalette="blue"
              >
                Add Transaction
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={onClose}
              >
                Cancel
              </Button>
            </Dialog.Footer>
          </form>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
};

export default TransactionForm;
