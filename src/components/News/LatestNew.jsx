import React from "react";
import {
  Button,
  Divider,
  Box,
  Heading,
  Text,
  Stack,
  useColorModeValue,
  Image,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

import Container from "../Container";
import News from "./News";

const LatestNew = () => {
  return (
    <Container>
      <Stack direction="row" h="70px" p={5} alignItems="center">
        <Divider orientation="vertical" width="2px" bg="gray.400" />
        <Heading fontWeight="400">LATEST NEWS</Heading>
      </Stack>
      <Stack py={6} sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
        {News.map(
          (blog) => (
            console.log(blog.img),
            (
              <Card
                maxW="lg"
                borderBottom="3px solid green"
                bg={useColorModeValue("white", "gray.900")}
                overflow={"hidden"}
              >
                <Image
                  src={blog.img}
                  alt={blog.title}
                  borderRadius="sm"
                  _hover={{
                    transform: "scale(1.1)",
                    transition: "0.6s ease-out",
                  }}
                />

                <CardBody>
                  <Stack
                    mt="3"
                    spacing="3"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      textAlign: "left",
                    }}
                  >
                    <Box>
                      <Heading
                        sx={{
                          textAlign: "justify",
                          color: " green ",
                          fontSize: "25px",
                          padding: " 1rem 0",
                        }}
                      >
                        {blog.title}
                      </Heading>
                      <Text
                        sx={{
                          color: "gray",
                          fontSize: "13px",
                          paddingBottom: "1rem",
                        }}
                      >
                        {blog.writer}
                      </Text>
                      <Divider />
                      <Text
                        sx={{
                          textAlign: "justify",
                          fontSize: "16px",
                          lineHeight: "110%",
                          letterSpacing: 0.75,
                          paddingTop: "1rem",
                        }}
                      >
                        {blog.details}
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>

                <CardFooter
                  pt={-3}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button variant="solid" colorScheme="blue">
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            )
          )
        )}
      </Stack>
    </Container>
  );
};

export default LatestNew;
