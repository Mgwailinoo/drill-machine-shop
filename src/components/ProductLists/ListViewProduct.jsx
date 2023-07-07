import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { incQty, decQty } from "../../redux/CartReducer/action";
import { addToCart, removeItem } from "../../redux/CartReducer/action";
import { Link } from "react-router-dom";
import { addToWishList, removeWishList } from "../../redux/WishReducer/action";
const ListViewProduct = (props) => {
  const product = props.product;
  const [isAdd, setisAdd] = useState(false);
  const carts = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const [currentProducts, setCurrentProducts] = useState(product);
  const [isInWishlist, setIsInWishlist] = useState(false);

  const [cartQty, setCartQty] = useState({});

  useEffect(() => {
    // Check if the product is in the cart
    const isProductInCart = carts.some((item) => item.id === product.id);
    setisAdd(isProductInCart);

    // Get the quantity for each product in the cart
    const cartQuantities = {};

    for (const item of carts) {
      const { id, qty } = item;
      cartQuantities[id] = (cartQuantities[id] || 0) + qty;
    }

    setCartQty(cartQuantities);

    // Check if the product is in the wishlist
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    setIsInWishlist(isInWishlist);
  }, [carts, wishlist, product]);

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
    dispatch(addToWishList(payload, toast));
    setIsInWishlist(true);
  };
  const handleremoveWishList = () => {
    let payload = {
      ...currentProducts,
    };
    dispatch(removeWishList(payload, toast));
    setIsInWishlist(false);
  };

  return (
    <Flex direction={"row"} gap={"3"} align={"center"}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        width={"100%"}
        margin={"0.5rem 0"}
      >
        <Image
          objectFit="cover"
          sx={{
            width: "15rem",
            height: "15rem",
          }}
          src={product.img}
          m={8}
        />

        <Stack>
          <CardBody textAlign={"left"}>
            <Heading size="lg">{product.title}</Heading>
            <Text fontSize="1.5rem" color="skyblue" margin="0 3px">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Text>
            <Text py="2" fontSize={"1.5rem"}>
              High quality Vise-Grip Pliers with multi-groove ratcheting system
              for precise positioning and all-purpose jaw for extra bite. TUV /
              GS approved. Metal Injection Moulding for Precision & Strength
              Quick Adjusting Press-n-Slide Button Anti-Pinch Non-Slip ProTouch
              Grips Right Angle Teeth Grip in All Directions for Maximum Bite
            </Text>
            <Text fontSize={"2.5rem"}>${product.price}</Text>
          </CardBody>

          <Divider />
          <CardFooter
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 5,
            }}
          >
            <ButtonGroup
              spacing="2"
              sx={{
                flex: 1,
              }}
            >
              <Button
                variant="solid"
                colorScheme={isInWishlist ? "yellow" : "blue"}
                size="lg"
                padding={"2rem "}
                fontSize="2rem"
                onClick={
                  isInWishlist ? handleremoveWishList : handleAddWishList
                }
              >
                <AiOutlineHeart />
              </Button>
              <Button
                padding={"2rem 4rem"}
                fontSize="2rem"
                variant="solid"
                colorScheme="gray"
                size="lg"
                onClick={!isAdd ? handleAddCart : handleRemoveCart}
              >
                {!isAdd ? "Add To Cart" : "Remove From Cart"}
              </Button>
              <Button
                variant="solid"
                colorScheme="blue"
                size="lg"
                padding={"2rem "}
                fontSize="2rem"
              >
                <Link to={`/productdetails/${product.id}`}>
                  <ViewIcon />
                </Link>
              </Button>
            </ButtonGroup>
            {isAdd && (
              <NumberInput
                size="lg"
                defaultValue={cartQty[product.id] || ""}
                min={1}
                onChange={() => event.target.value()}
                sx={{
                  flex: 1,
                }}
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
            )}
          </CardFooter>
        </Stack>
      </Card>
    </Flex>
  );
};

export default ListViewProduct;
