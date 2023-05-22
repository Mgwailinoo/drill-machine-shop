import { Box, Button, Heading, Text, Stack, Divider } from "@chakra-ui/react";
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import Products from "./Products";
import Slider from "react-slick";
import Product from "./Product";

const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
  padding: 9.6rem 0;
`;

const TabBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
};
const FeatureProduct = () => {
  const sliderRef = useRef(null);
  return (
    <Container>
      <TabBox>
        <Stack direction="row" h="70px" p={5} alignItems="center">
          <Divider orientation="vertical" width="2px" bg="gray.400" />
          <Heading fontWeight="400">FEATURED PRODUCTS</Heading>
        </Stack>

        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            sx={{ bgColor: "#FFF700", boxSize: "3rem" }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <ChevronLeftIcon fontSize="3rem" />
          </Button>

          <Button
            sx={{ bgColor: "#FFF700", boxSize: "3rem" }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <ChevronRightIcon fontSize="3rem" />
          </Button>
        </Box>
      </TabBox>
      <Slider {...settings} ref={sliderRef}>
        {Products.map((product) => (
          <Product product={product} />
        ))}
      </Slider>
    </Container>
  );
};

export default FeatureProduct;
