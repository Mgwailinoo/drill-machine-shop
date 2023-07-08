import React, { useState } from "react";
import { Container, Flex, Box } from "@chakra-ui/react";
import Order from "./Order";
import CheckOut from "./CheckOut";
import { useSelector, useDispatch } from "react-redux";
import { incQty, decQty, removeItem } from "../../redux/CartReducer/action";
const CheckOutForm = () => {
  const carts = useSelector((store) => store.cart.cart);
  const username = useSelector((store) => store.user.username);
  const email = useSelector((store) => store.user.email);
  const [isPurchase, setIsPurchase] = useState(false);
  const totalAmount = carts.reduce((total, item) => {
    return total + item.price * Number(item.qty);
  }, 0);
  const dispatch = useDispatch();

  const handleIncrement = (id, value) => {
    dispatch(incQty({ id, qty: value }));
  };

  const handleDecrement = (id, value) => {
    dispatch(decQty({ id, qty: value }));
  };

  const handleRemove = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <Container
      maxW={"95%"}
      sx={{
        display: "flex",

        gap: 15,
        marginBottom: "15px",
      }}
    >
      <Box
        sx={{
          flex: 2,
        }}
      >
        <Order
          carts={carts}
          totalAmount={totalAmount}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          handleRemove={handleRemove}
          isPurchase={isPurchase}
        />
      </Box>

      <Box flex={1}>
        <CheckOut
          carts={carts}
          totalAmount={totalAmount}
          username={username}
          email={email}
          isPurchase={isPurchase}
          setIsPurchase={setIsPurchase}
        />
      </Box>
    </Container>
  );
};

export default CheckOutForm;
