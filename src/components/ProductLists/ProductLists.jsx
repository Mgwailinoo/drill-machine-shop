import {
  Flex,
  Box,
  Stack,
  Divider,
  Heading,
  Tooltip,
  Tag,
  Text,
  Image,
  Button,
  Select,
  Icon,
  GridItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Grid,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";

import img from "../../assets/img/blog/BlogArticle1.jpg";
import { AiOutlineHeart, AiOutlineRightCircle } from "react-icons/ai";
import { BsCardList, BsGrid } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import Products from "../Product/Products";
import Product from "../Product/Product";
import { StarIcon, ViewIcon } from "@chakra-ui/icons";
import ListViewProduct from "./ListViewProduct";
import { useHistory } from "react-router-dom";

const ProductLists = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(Products.length); // <-- new state
  const history = useHistory();
  const totalItems = Products.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage); // <-- use the new state variable
  const startIndex = (currentPage - 1) * itemsPerPage; // <-- use the new state variable
  const endIndex = startIndex + itemsPerPage; // <-- use the new state variable
  const currentItems = Products.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
    history.push(`/page/${currentPage + 1}`);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleOptionChange = (event) => {
    const value = Number(event.target.value);
    setItemsPerPage(value);
    setCurrentPage(1); // reset to first page when changing the items per page
  };

  return (
    <Stack direction="column" width={"100%"}>
      <Box
        boxSize={"100%"}
        bgSize={"100%"}
        bgImage={`url(${img})`}
        height="250px"
        bgRepeat="no-repeat"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        justifyContent={"center"}
        objectFit={"cover"}
        opacity="0.9"
        _hover={{ opacity: "1", transition: "0.5s" }}
        mb={5}
      >
        <Flex direction={"column"} textAlign={"left"} marginLeft={"-50rem"}>
          <Flex color="white" align={"center"} fontSize={"3rem"} gap={"1rem"}>
            <AiOutlineRightCircle /> screwdrivers
          </Flex>

          <Flex color="white" align={"center"} fontSize={"3rem"} gap={"1rem"}>
            <AiOutlineRightCircle /> cutter
          </Flex>

          <Flex color="white" align={"center"} fontSize={"3rem"} gap={"1rem"}>
            <AiOutlineRightCircle /> water pump pilers
          </Flex>
        </Flex>
      </Box>
      <Stack direction={"row"} p={3} mt={10} border="1px solid #999">
        <Box
          fontSize="1.5rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap="2rem"
        >
          <Flex gap="1rem" align={"center"}>
            <Text>View:</Text>
            <Icon
              as={BsGrid}
              fontSize={"2rem"}
              _hover={{ color: "yellow.500" }}
              _focus={{ color: "red" }}
              sx={{ color: showGrid ? "#FFF700" : "gray" }}
              onClick={() => setShowGrid(true)}
            />
            <Icon
              as={BsCardList}
              fontSize={"2rem"}
              _hover={{ color: "yellow.500" }}
              _focus={{ color: "red" }}
              onClick={() => setShowGrid(false)}
              sx={{ color: showGrid ? "gray" : "#FFF700" }}
            />
          </Flex>
          <Select
            icon={<MdArrowDropDown />}
            placeholder="Default"
            fontSize={"1.5rem"}
          >
            <option value="Price: Lowest first">Price: Lowest first</option>
            <option value="Price: Highest first">Price: Highest first</option>
            <option value="Product Name: A to Z">Product Name: A to Z</option>
            <option value="Reference : Lowest first">
              Reference : Lowest first
            </option>
            <option value="Reference : Highest first">
              Reference : Highest first
            </option>
          </Select>
          <Flex align={"center"} gap={"1rem"}>
            <Text>Show</Text>
            <Select
              icon={<MdArrowDropDown />}
              placeholder="Default"
              fontSize="1.5rem"
              width="50px"
              value={itemsPerPage}
              onChange={handleOptionChange}
            >
              <option value={Products.length}>all</option>
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={30}>30</option>
            </Select>
          </Flex>
          <Flex gap="0.5rem">
            <Text>per</Text>
            <Text>pages</Text>
          </Flex>
        </Box>
      </Stack>

      <>
        {showGrid ? (
          <>
            <Grid templateColumns="repeat(3, 1fr)" gap={10} width="100%">
              {currentItems.map((product) => (
                <GridItem width={"100%"}>
                  <Product product={product} width={"100%"} />
                </GridItem>
              ))}
            </Grid>
          </>
        ) : (
          <>
            {currentItems.map((product) => (
              <ListViewProduct product={product} />
            ))}
          </>
        )}
      </>

      <Flex justify="center" my={10}>
        <ButtonGroup mt={10}>
          {currentPage > 1 && <Button onClick={handlePrevPage}>Prev</Button>}

          {Array.from({ length: totalPages }, (_, i) => (
            <Button
              key={i}
              colorScheme={i + 1 === currentPage ? "blue" : "gray"}
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          {currentPage < totalPages && (
            <Button onClick={handleNextPage}>Next</Button>
          )}
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};

export default ProductLists;
