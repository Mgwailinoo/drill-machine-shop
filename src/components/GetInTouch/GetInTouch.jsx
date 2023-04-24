import {
  Box,
  Container,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
} from "@chakra-ui/react";
import React from "react";
import getInTouchImg from "../../assets/img/man-chooses-drill-himself-gift-260nw-2118534485.jpg";

const GetInTouch = () => {
  return (
    <Box
      bgImage={`url(${getInTouchImg})`}
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgPosition="center"
      bgSize="cover"
      backgroundColor="rgba(0, 0, 0, 0.3)"
      opacity="0.9"
      padding="9.6rem 0"
      width="100vw"
      height="70vh"
    >
      <Heading color="#fff" fontSize="3.5rem" lineHeight="45px">
        GET IN TOUCH WITH US
      </Heading>
      <Text
        fontSize="1.6rem"
        color="#000"
        padding="2rem 20rem"
        textAlign="center"
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which Ipsum slightly believable
      </Text>
      <InputGroup
        size="lg"
        sx={{
          width: "50rem",
          margin: "0 auto",
          paddingTop: "4rem",
        }}
        variant="flushed"
      >
        <Input
          pr="4.5rem"
          placeholder="Your Email Address"
          sx={{
            fontSize: "2rem",
            bgColor: "#fff",
            padding: "3rem 0 3rem 1rem",
            borderRadius: "none",
          }}
        />
        <Button
          sx={{
            width: "15rem",
            padding: "3rem 1rem",
            fontSize: "2rem",
            bgColor: "yellow",
            position: "relative",
            borderRadius: "none",
          }}
          _hover={{ bg: "gray.100", transition: "0.5s" }}
          size="lg"
        >
          SUBSCRIBE
        </Button>
      </InputGroup>
    </Box>
  );
};

export default GetInTouch;
