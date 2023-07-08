import {
  Heading,
  Stack,
  Text,
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import ShoppingAnimation from "../../assets/Lottie/66358-online-shopping.json";
import { useToast } from "@chakra-ui/react";

const CheckOut = ({
  totalAmount,
  carts,
  username,
  email,
  isPurchase,
  setIsPurchase,
}) => {
  const toast = useToast();

  return (
    <Stack>
      {carts.length === 0 || isPurchase === true ? (
        <Box>
          <Lottie animationData={ShoppingAnimation} />
        </Box>
      ) : (
        <>
          <Text fontSize={"3xl"} textAlign={"justify"}>
            Shipping Details
          </Text>
          <Box fontSize={"2xl"} textAlign={"justify"}>
            <Text>Username : {username} ✅</Text>
            <Text>Email: {email} ✅</Text>
          </Box>
          <Divider py={5} />
          <Text fontSize={"3xl"} textAlign={"justify"}>
            Payment Details
          </Text>
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>Card Name</FormLabel>
              <Input
                placeholder="Enter Card Name"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>Card Number</FormLabel>
              <Input
                placeholder="Enter Card Number"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>Exp date</FormLabel>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>CVC code</FormLabel>
              <Input
                placeholder="Enter CVC code"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>Address 1</FormLabel>
              <Input
                placeholder="Enter your current address"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel fontSize={"2xl"}>Address 2</FormLabel>
              <Input
                placeholder="Enter your address 2"
                padding={"16px"}
                fontSize={"15px"}
              />
            </FormControl>
          </Grid>
          <Divider orientation="horizontal" py={10} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Heading fontSize={"2xl"}>Subtotal</Heading>
            <Text fontSize={"2xl"}>$ {totalAmount} USD</Text>
          </Box>
          <Divider orientation="horizontal" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Heading fontSize={"2xl"}>Shipping</Heading>
            <Text fontSize={"2xl"}>$ 3 USD</Text>
          </Box>
          <Divider orientation="horizontal" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 20px",
            }}
          >
            <Heading fontSize={"2xl"}>Total</Heading>
            <Text fontSize={"2xl"}>$ {totalAmount + 3} USD</Text>
          </Box>

          <Button
            sx={{
              margin: "10px 0",
              fontSize: "16px",
              padding: "20px 0",
            }}
            colorScheme="linkedin"
            onClick={() => {
              setIsPurchase(!isPurchase);
              toast({
                position: "top-right",
                title: "Purchase Success.",
                description: "Thanks for shopping .",
                status: "success",
                duration: 5000,
                isClosable: true,
              });
            }}
          >
            purchase $ {totalAmount + 3} USD
          </Button>
        </>
      )}
    </Stack>
  );
};

export default CheckOut;
