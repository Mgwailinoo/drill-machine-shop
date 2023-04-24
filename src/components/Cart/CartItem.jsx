import React from "react";
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Grid,
  GridItem,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import Products from "../Product/Products";
import { incQty, decQty, removeItem } from "../../redux/CartReducer/action";

const CartItem = ({ product }) => {
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const handleIncrement = (id, value) => {
    dispatch(incQty({ id, qty: value }));
  };

  const handleDecrement = (id, value) => {
    if (value > 1) {
      dispatch(decQty({ id, qty: value }));
    } else {
      dispatch(removeItem({ id }));
    }
  };

  const uniqueCart = cart.filter((item, index) => {
    return cart.findIndex((i) => i.id === item.id) === index;
  });

  return (
    <>
      {uniqueCart.map((item) => {
        if (item.id === product.id) {
          return (
            <Grid
              key={item.id}
              templateColumns={"1fr 1fr 1fr 1fr"}
              gap={"0.5rem"}
              alignItems="center"
              textAlign={"left"}
              margin={" 2rem 0 1rem 0"}
              fontSize="1.5rem"
              borderBottom={"1px solid gray"}
              pb={3}
              width="100%"
            >
              <Image
                src={product.img}
                alt={product.title}
                boxSize={"100px"}
                objectFit={"cover"}
              />
              <Text as="h3" fontWeight={400} textTransform="uppercase">
                {item.price}
              </Text>
              <NumberInput
                size="lg"
                defaultValue={item.qty}
                min={1}
                onChange={(e) => event.target.value()}
              >
                <Flex align={"center"}>
                  <NumberIncrementStepper
                    bg="green.200"
                    _active={{ bg: "green.300" }}
                    children="+"
                    fontSize={"2rem"}
                    size="lg"
                    padding={"0.2rem 0"}
                    onClick={() => handleIncrement(item.id, item.qty)}
                  />
                  <NumberInputField
                    focusBorderColor="red.200"
                    width="80px"
                    fontSize={"1.5rem"}
                    textAlign={"center"}
                  />
                  <NumberDecrementStepper
                    bg="pink.200"
                    _active={{ bg: "pink.300" }}
                    children="-"
                    fontSize={"2rem"}
                    size="lg"
                    padding={"0.2rem 0"}
                    onClick={() => handleDecrement(item.id, item.qty)}
                  />
                </Flex>
              </NumberInput>
              <Flex
                as="h3"
                fontWeight={400}
                textTransform="uppercase"
                paddingLeft="0.5rem"
                align={"center"}
                justifyContent={"space-between"}
              >
                <Text pl={30}>${item.price * Number(item.qty)}</Text>
                <CloseButton
                  alignSelf="flex-start"
                  position="relative"
                  right={-1}
                  top={-3}
                  onClick={() => dispatch(removeItem(item))}
                />
              </Flex>
            </Grid>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default CartItem;
