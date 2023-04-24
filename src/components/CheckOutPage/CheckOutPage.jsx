import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Thead,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import Products from "../Product/Products";
import CustomPayment from "../Payment/CustomPayment";
import { Link } from "react-router-dom";

const CheckOutPage = (props) => {
  const cart = props.cart;
  return (
    <>
      <Box w="100%" m="auto">
        <Stack
          spacing={5}
          my={"7"}
          border="3px solid beige"
          fontSize={"1.5rem"}
          p={"1rem"}
        >
          <Heading size={"md"} align={"left"} mx={"2"}>
            ORDER SUMMARY
          </Heading>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr fontSize={"1.5rem"}>
                  <Th>Name</Th>
                  <Th>Price</Th>
                  <Th>Qualtity</Th>

                  <Th>TOTAL AMOUNT</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody fontSize={"1.5rem"}>
                {cart.map((cart) => (
                  <Tr>
                    <Td>{cart.title}</Td>
                    <Td>{cart.price}$</Td>
                    <Td>{cart.qty}</Td>

                    <Td>{cart.price * cart.qty}$</Td>
                  </Tr>
                ))}
              </Tbody>

              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th>{props?.totalAmount}$</Th>
                  <Th>
                    <Button>Check Out</Button>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Stack>
      </Box>
    </>
  );
};

export default CheckOutPage;
