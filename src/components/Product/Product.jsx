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
  useToast,
} from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import { AiOutlineHeart } from "react-icons/ai";
import { addToCart, removeItem } from "../../redux/CartReducer/action";
import { addToWishList, removeWishList } from "../../redux/WishReducer/action";

const Product = (props) => {
  const product = props.product;
  const [isAdd, setisAdd] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const cart = useSelector((store) => store.cart.cart);
  const [currentProducts, setCurrentProducts] = useState(product);

  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    setIsInWishlist(wishlist.some((item) => item.id === product.id));
  }, [wishlist, product]);

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
    <Card
      width="100%"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
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
            $450
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="solid"
            colorScheme={isInWishlist ? "#FFF700" : "blue"}
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
      </CardFooter>
    </Card>
  );
};

export default Product;
