import {
  Box,
  Button,
  Heading,
  Text,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useRef } from "react";
import Brands from "./BrandData";
import Slider from "react-slick";

import Container from "../Container";

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
  slidesToShow: 6,
  slidesToScroll: 1,
};
const Brand = () => {
  const sliderRef = useRef(null);
  return (
    <Container>
      <TabBox>
        <Stack direction="row" h="70px" p={5} alignItems="center">
          <Divider orientation="vertical" width="2px" bg="gray.400" />
          <Heading fontWeight="400">BRANDS</Heading>
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
        {Brands.map((brand) => (
          <Image
            key={brand.id}
            boxSize="150px"
            objectFit="cover"
            src={brand.img}
            alt="brand"
            border="1px solid gray"
          />
        ))}
      </Slider>
    </Container>
  );
};

export default Brand;
