import React, { useState } from "react";
import PageNavbar from "../PageNavbar/PageNavbar";
import Container from "../Container";
import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Text,
  Input,
  Button,
  Textarea,
  Badge,
} from "@chakra-ui/react";
const currentPage = {
  title: "Contact",
  href: "/contact",
};
const Contact = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const Label = ({ children }) => {
    return (
      <FormLabel fontSize={"1.5rem"} pt={3}>
        {children}
      </FormLabel>
    );
  };

  const optionInfo = {
    "Customer Services": "For any question about a product, an order",
    Webmaster: "If a technical problem occurs on this website",
  };
  return (
    <>
      <PageNavbar currentPage={currentPage} />
      <Box width={"90vw"} margin="0 auto" padding={"9.6rem 0"}>
        <Flex columnGap={15}>
          <Box width={"350px"} flex={1}>
            <Heading paddingBottom={"2rem"} textAlign={"left"}>
              SEND A MESSAGE
            </Heading>
            <FormControl>
              <Label>Subject Heading</Label>
              <Select
                fontSize={"1.3rem"}
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                placeholder="--Choose--"
              >
                <option>Customer Services</option>
                <option>Webmaster</option>
              </Select>
              {selectedOption && (
                <Badge variant="subtle" colorScheme="green" padding={"0.5rem"}>
                  <Text fontSize={"1.2rem"} pt={5} color={"green"}>
                    {optionInfo[selectedOption]}
                  </Text>
                </Badge>
              )}
              <Label>Email address</Label>
              <Input type="email" padding={"1.5rem 1rem"} />
              <Label>Order Refrence</Label>
              <Input type="text" padding={"1.5rem 1rem"} />
              <Label>Attach File</Label>
              <Input type="file" />
              <Flex justifyContent={"left"}>
                <Button
                  padding={"2rem"}
                  fontSize={"1.6rem"}
                  margin={"2rem 0"}
                  bgColor={"yellow"}
                >
                  SEND
                </Button>
              </Flex>
            </FormControl>
          </Box>
          <Box flex={3} marginTop={"4rem"}>
            <Label>Message</Label>
            <Textarea size="lg" textAlign={"left"} height={"250px"} />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Contact;
