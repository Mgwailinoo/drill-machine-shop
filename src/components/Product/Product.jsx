import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  Button,
  ButtonGroup,
  Heading,
  Text,
  Image,
  Badge,
  Flex,
  useToast,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import {
  addToCart,
  removeItem,
  incQty,
  decQty,
} from "../../redux/CartReducer/action";
import { addToWishList, removeWishList } from "../../redux/WishReducer/action";

const Product = (props) => {
  const product = props.product;
  const [isAdd, setisAdd] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const carts = useSelector((store) => store.cart.cart);
  const [currentProducts, setCurrentProducts] = useState(product);
  console.log(carts, "Shopping Cart");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [qty, setQty] = useState(null);
  console.log(qty, "Qty hey");
  console.log(product, "Product hey");
  useEffect(() => {
    setisAdd(carts.some((item) => item.id === product.id));
    setQty(carts.qty);
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [wishlist, product, carts]);

  useEffect(() => {
    console.log(isAdd, "isAdd");
  }, [isAdd]);

  const handleAddCart = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(addToCart(payload));
    setisAdd(true);
  };

  const handleRemoveCart = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(removeItem(payload));
    setisAdd(false);
  };

  const handleIncrement = (id) => {
    dispatch(incQty({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decQty({ id }));
  };

  const handleAddWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(addToWishList(payload));
    setIsInWishlist(true);
  };
  const handleremoveWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(removeWishList(payload));
    setIsInWishlist(false);
  };
  return (
    <>
      <Card
        width="100%"
        key={product.id}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardBody>
          <Image
            src={product.img}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            sx={{ width: "15rem", height: "15rem", margin: "0 auto" }}
          />
          <Stack mt="6" spacing="3">
            <Text fontSize="1.5rem" color="skyblue" margin="0 3px">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Text>
            <Heading size="md">{product.title}</Heading>

            <Text color="blue.600" fontSize="2xl">
              {product.price} ks
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          <ButtonGroup spacing="2">
            <Button
              variant="solid"
              colorScheme={isInWishlist ? "yellow" : "blue"}
              size="lg"
              onClick={isInWishlist ? handleremoveWishList : handleAddWishList}
            >
              <AiOutlineHeart />
            </Button>
            <Button
              variant="solid"
              colorScheme="gray"
              size="lg"
              onClick={!isAdd ? handleAddCart : handleRemoveCart}
            >
              {!isAdd ? "Add To Cart" : "Remove From Cart"}
            </Button>

            <Button variant="solid" colorScheme="blue" size="lg">
              <ViewIcon />
            </Button>
          </ButtonGroup>

          {/* {isAdd && (
            <NumberInput
              size="lg"
              defaultValue={qty}
              min={1}
              onChange={() => event.target.value()}
            >
              <Flex align={"center"}>
                <NumberDecrementStepper
                  bg="pink.200"
                  _active={{ bg: "pink.300" }}
                  children="-"
                  fontSize={"2rem"}
                  size="lg"
                  padding={"0.2rem 0"}
                  onClick={() => handleDecrement(product.id)}
                />
                <NumberInputField
                  focusBorderColor="red.200"
                  width="80px"
                  fontSize={"1.5rem"}
                  textAlign={"center"}
                />
                <NumberIncrementStepper
                  bg="green.200"
                  _active={{ bg: "green.300" }}
                  children="+"
                  fontSize={"2rem"}
                  size="lg"
                  padding={"0.2rem 0"}
                  onClick={() => handleIncrement(product.id)}
                />
              </Flex>
            </NumberInput>
          )} */}
        </CardFooter>
      </Card>
    </>
  );
};

export default Product;
