import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { MdLocalShipping } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Products from "../Product/Products";
import {
  addToCart,
  removeItem,
  incQty,
  decQty,
} from "../../redux/CartReducer/action";
import { addToWishList, removeWishList } from "../../redux/WishReducer/action";

export default function ProductDetails() {
  const { id } = useParams();
  console.log("ID", id);
  const product = Products.find((product) => product.id === id);

  const [isAdd, setisAdd] = useState(false);
  const dispatch = useDispatch();

  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const carts = useSelector((store) => store.cart.cart);
  const [currentProducts, setCurrentProducts] = useState(product);

  const [isInWishlist, setIsInWishlist] = useState(false);

  const [cartQty, setCartQty] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

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
    <Container maxW={"70%"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.img}
            fit={"contain"}
            justifyContent={"center"}
            align={"center"}
            marginLeft={"100px"}
            w={"50%"}
            h={{ base: "50%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "6xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
              marginTop={"5px"}
            >
              ${product.price} USD
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"3xl"}
                fontWeight={"300"}
                textAlign={"justify"}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={"lg"} textAlign={"justify"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet at delectus doloribus dolorum expedita hic, ipsum
                maxime modi nam officiis porro, quae, quisquam quos
                reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={
              !isInWishlist
                ? useColorModeValue("red.500", "white.50")
                : useColorModeValue("gray.700", "gray.50")
            }
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={isInWishlist ? handleremoveWishList : handleAddWishList}
          >
            {!isInWishlist ? "Add To Wishlist" : "Remove From Wishlist"}
          </Button>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("green.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={!isAdd ? handleAddCart : handleRemoveCart}
          >
            {!isAdd ? "Add To Cart" : "Remove From Cart"}
          </Button>
          {isAdd && (
            <NumberInput
              size="lg"
              defaultValue={cartQty[product.id] || ""}
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
          )}

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text fontSize={"3xl"}>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
