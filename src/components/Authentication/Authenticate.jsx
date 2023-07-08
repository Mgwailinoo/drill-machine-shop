import React from "react";
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  FormLabel,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { loginSuccess } from "../../redux/UserReducer/userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
const Authenticate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();

  const handleAuth = () => {
    event.preventDefault();

    const userData = {
      username: nameRef.current.value,
      email: emailRef.current.value,
    };
    dispatch(loginSuccess(userData));
    navigate("/checkoutform");
  };

  return (
    <Container>
      <Flex align={"center"} justify={"center"}>
        {/* <Stack
          spacing={4}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
          width={"400px"}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "3xl", md: "4xl" }}>
            CREATE AN ACCOUNT
          </Heading>
          <Text
            fontSize={"1rem"}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Please enter your email address to create an account.
          </Text>
          <FormControl id="email">
            <FormLabel fontSize={"1.5rem"}>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
              padding={"1.5rem"}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              p={"2rem"}
              fontSize={"1.5rem"}
            >
              Create an account
            </Button>
          </Stack>
        </Stack> */}
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>ALREADY REGISTERED?</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
            boxSize={"350px"}
          >
            <Stack spacing={4}>
              <FormControl id="username" onSubmit={handleAuth}>
                <FormLabel fontSize={"1.5rem"}>UserName</FormLabel>
                <Input
                  type="text"
                  padding={"1.5rem"}
                  ref={nameRef}
                  fontSize={"15px"}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel fontSize={"1.5rem"}>Email address</FormLabel>
                <Input
                  type="email"
                  padding={"1.5rem"}
                  ref={emailRef}
                  fontSize={"15px"}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel fontSize={"1.5rem"}>Password</FormLabel>
                <Input type="password" padding={"1.5rem"} fontSize={"15px"} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>
                    <Text fontSize={"8px"}>Forgot password?</Text>
                  </Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  p={"2rem"}
                  fontSize={"1.8rem"}
                  type="submit"
                  onClick={handleAuth}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Authenticate;
