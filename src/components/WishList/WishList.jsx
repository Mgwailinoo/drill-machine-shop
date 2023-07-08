import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CloseButton,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  ButtonGroup,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { removeWishList } from "../../redux/WishReducer/action";
import Products from "../Product/Products";

const WishList = () => {
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const dispatch = useDispatch();

  return (
    <div>
      <Box width={"90vw"} margin="0 auto">
        {wishlist.length === 0 ? (
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            padding="9.6rem"
            gap="3rem"
          >
            <svg
              width="108px"
              height="108px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  opacity="0.1"
                  d="M4.50938 10.4343C4.7433 8.79689 4.86026 7.97818 5.42419 7.48909C5.98812 7 6.81514 7 8.46918 7H9H15H15.5308C17.1849 7 18.0119 7 18.5758 7.48909C19.1397 7.97818 19.2567 8.79689 19.4906 10.4343L20.3478 16.4343C20.6512 18.5586 20.803 19.6208 20.2049 20.3104C19.6068 21 18.5339 21 16.388 21H16H8H7.61204C5.46614 21 4.3932 21 3.79511 20.3104C3.19703 19.6208 3.34877 18.5586 3.65224 16.4343L4.50938 10.4343Z"
                  fill="#323232"
                ></path>
                <path
                  d="M4.50938 10.4343C4.7433 8.79689 4.86026 7.97818 5.42419 7.48909C5.98812 7 6.81514 7 8.46918 7H9H15H15.5308C17.1849 7 18.0119 7 18.5758 7.48909C19.1397 7.97818 19.2567 8.79689 19.4906 10.4343L20.3478 16.4343C20.6512 18.5586 20.803 19.6208 20.2049 20.3104C19.6068 21 18.5339 21 16.388 21H16H8H7.61204C5.46614 21 4.3932 21 3.79511 20.3104C3.19703 19.6208 3.34877 18.5586 3.65224 16.4343L4.50938 10.4343Z"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 11V5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V11"
                  stroke="#323232"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
            <Heading>There is no wishlists yet</Heading>
            <Link to="/handtools">
              <Button fontSize="1.5rem">Go to Shop</Button>
            </Link>
          </Flex>
        ) : (
          <Grid
            gridTemplateColumns="repeat(5,1fr)"
            gap="2rem"
            align="center"
            margin="2rem 0"
          >
            {wishlist.map((p) => (
              <GridItem key={p.id}>
                <Card size="md">
                  <Box position="relative">
                    <CloseButton
                      position="absolute"
                      top={0}
                      right={0}
                      onClick={() => dispatch(removeWishList(p))}
                    />
                    <CardBody>
                      <Image src={p.img} borderRadius="lg" w={100} h={100} />
                      <Stack mt="6" spacing="3" textAlign="left">
                        <Heading size="md">{p.title}</Heading>
                        <Text>{p.name}</Text>
                        <Text color="blue.600" fontSize="2xl">
                          $450
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing="10">
                        <Link to={`/detailproducts/${p.id}`}>
                          <Button variant="solid" colorScheme="blue">
                            Details
                          </Button>
                        </Link>
                      </ButtonGroup>
                    </CardFooter>
                  </Box>
                </Card>
              </GridItem>
            ))}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default WishList;
