import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Box,
  Divider,
  Badge,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import Lottie from "lottie-react";
import noOrderAnnimation from "../../assets/Lottie/105560-no-product.json";
import purchaseSuccessAnimation from "../../assets/Lottie/3992-week-before-christmas.json";
import { Link } from "react-router-dom";

const Order = ({
  carts,

  handleIncrement,
  handleDecrement,
  handleRemove,
  isPurchase,
}) => {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {isPurchase === true ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "500px",
          }}
        >
          <Box marginBottom={"10px"}>
            <Heading marginBottom={5}>Thanks for Purchase</Heading>
            <Link to="/handtools">
              <Badge colorScheme="green" fontSize={"20px"} p={5}>
                Go to Shop
              </Badge>
            </Link>
          </Box>

          <Lottie
            animationData={purchaseSuccessAnimation}
            width="100px"
            height="100px"
          />
        </Box>
      ) : (
        <>
          {carts.length === 0 ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "500px",
              }}
            >
              <Box>
                <Heading marginBottom={5}>no order now</Heading>
                <Link to="/handtools">
                  <Badge colorScheme="green" fontSize={"20px"} p={5}>
                    Go to Shop
                  </Badge>
                </Link>
              </Box>

              <Lottie
                animationData={noOrderAnnimation}
                width="100px"
                height="100px"
              />
            </Box>
          ) : (
            <Box sx={{ flex: 3 }}>
              <Text fontSize={"3xl"}>Your Order Items</Text>
              {carts.map((p) => (
                <Card
                  key={p.id}
                  direction={{ base: "column", sm: "row" }}
                  overflow="hidden"
                  variant="outline"
                  p={5}
                >
                  <Image
                    objectFit="cover"
                    maxW={{ base: "100px", sm: "100px" }}
                    src={p.img}
                    alt="Caffe Latte"
                    sx={{
                      objectFit: "contain",
                    }}
                  />

                  <Stack>
                    <CardBody
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                      }}
                    >
                      <Heading size="md">{p.title}</Heading>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <Text fontSize={"2xl"}>qty : </Text>
                        <Badge
                          variant="solid"
                          colorScheme="green"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50%",
                            width: "20px",
                            height: "20px",
                          }}
                        >
                          <Text fontSize={"12px"}>{p.qty}</Text>
                        </Badge>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <Text fontSize={"2xl"}>price : </Text>
                        <Badge
                          variant="solid"
                          colorScheme="green"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "3px",
                          }}
                        >
                          <Text fontSize={"12px"}>$ {p.price} USD </Text>
                        </Badge>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 3,
                        }}
                      >
                        <Text fontSize={"2xl"}>Total : </Text>
                        <Badge
                          variant="solid"
                          colorScheme="blue"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "3px",
                          }}
                        >
                          <Text fontSize={"12px"}>
                            $ {p.price * p.qty} USD{" "}
                          </Text>
                        </Badge>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <IconButton
                          backgroundColor="#3498db"
                          borderRadius={"50%"}
                          color="white"
                          aria-label="Search database"
                          icon={<AddIcon />}
                          onClick={() => handleIncrement(p.id, p.qty)}
                        />
                        <IconButton
                          backgroundColor="#e74c3c"
                          borderRadius={"50%"}
                          color="white"
                          aria-label="Search database"
                          icon={<MinusIcon />}
                          onClick={() => handleDecrement(p.id, p.qty)}
                        />
                        <IconButton
                          colorScheme="gray"
                          borderRadius={"50%"}
                          aria-label="Search database"
                          icon={<DeleteIcon />}
                          onClick={() => handleRemove(p.id)}
                        />
                      </Box>
                    </CardBody>
                  </Stack>
                </Card>
              ))}
            </Box>
          )}
        </>
      )}
    </Stack>
  );
};

export default Order;
