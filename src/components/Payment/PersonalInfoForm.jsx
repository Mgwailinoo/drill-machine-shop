import React, { useState } from "react";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

// Component
const PersonalInfoForm = ({ handleNext }) => {
  return (
    <Box padding={"6.4rem 0"} width="20vw" margin={"0 auto"}>
      <Heading pb={"1rem"}>Personal Information</Heading>
      <FormControl pt={"1rem"}>
        <FormLabel fontSize={"1.5rem"}>Full Name</FormLabel>
        <Input
          type="text"
          required
          placeholder="Enter your first and last Name"
          p={15}
          fontSize={"1.3rem"}
          my={2}
        />
        <FormLabel fontSize={"1.5rem"}>Email address</FormLabel>
        <Input
          type="email"
          required
          placeholder="Enter Email Address"
          p={15}
          fontSize={"1.3rem"}
          my={2}
        />
        <FormLabel fontSize={"1.5rem"}>Street address</FormLabel>
        <Input
          type="text"
          required
          placeholder="Enter your full Address"
          p={15}
          fontSize={"1.3rem"}
          my={2}
        />
        <Button p={"1.5rem"} marginLeft={"0 auto"} width={"10rem"}>
          Submit
        </Button>
      </FormControl>
    </Box>
  );
};

export default PersonalInfoForm;
