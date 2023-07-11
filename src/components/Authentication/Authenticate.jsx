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
  ButtonGroup,
} from "@chakra-ui/react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { loginSuccess } from "../../redux/UserReducer/userReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { GoogleLogin } from "@react-oauth/google";

import jwtDecode from "jwt-decode";
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
              <form onSubmit={handleAuth}>
                <FormControl id="username">
                  <FormLabel fontSize={"1.5rem"}>UserName</FormLabel>
                  <Input
                    type="text"
                    padding={"1.5rem"}
                    ref={nameRef}
                    fontSize={"15px"}
                    required
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel fontSize={"1.5rem"}>Email address</FormLabel>
                  <Input
                    type="email"
                    padding={"1.5rem"}
                    ref={emailRef}
                    fontSize={"15px"}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel fontSize={"1.5rem"}>Password</FormLabel>
                  <Input
                    type="password"
                    padding={"1.5rem"}
                    fontSize={"15px"}
                    required
                  />
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
                  <ButtonGroup
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 6,
                      margin: "10px 0",
                    }}
                  >
                    <Button
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      p={"2rem"}
                      fontSize={"1.8rem"}
                      type="submit"
                    >
                      Sign in
                    </Button>
                    <Button bgColor={"white"} marginBottom={"20px"}>
                      <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          event.preventDefault();

                          const details = jwtDecode(
                            credentialResponse.credential
                          );

                          if (details) {
                            const { name, email } = details;

                            const userData = {
                              username: name,
                              email: email,
                            };

                            dispatch(loginSuccess(userData));
                            navigate("/checkoutform");
                          } else {
                            console.log(
                              "Failed to retrieve profile information"
                            );
                          }
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </Stack>
              </form>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Authenticate;
