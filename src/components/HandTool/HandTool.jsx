import {
  Box,
  Divider,
  Flex,
  Heading,
  Stack,
  Tooltip,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import PageNavbar from "../PageNavbar/PageNavbar";
import ProductLists from "../ProductLists/ProductLists";
import Sliders from "../Slider/Sliders";
const currentPage = {
  title: "HandTools",
  href: "/handtools",
};
const CustomCard = React.forwardRef(({ children, ...rest }, ref) => (
  <Box p="1" textAlign={"left"}>
    <Tag
      ref={ref}
      {...rest}
      width={"100%"}
      p={"1rem"}
      bgColor="#fff"
      fontSize={"1.5rem"}
      _hover={{ bgColor: "gray.100", transition: "0.5s" }}
    >
      {children}
    </Tag>
  </Box>
));
const HandTool = () => {
  return (
    <>
      <PageNavbar currentPage={currentPage} />
      <Box width={"90vw"} margin={"0 auto"}>
        <Flex gap={"3rem"} padding={"2rem 0"}>
          <Flex direction="column" width="300px">
            <Stack
              direction="row"
              h="50px"
              p={5}
              alignItems="center"
              backgroundColor="gray.100"
            >
              <Divider orientation="vertical" width="2px" bg="yellow.400" />
              <Heading fontWeight="400">HAND TOOLS</Heading>
            </Stack>
            <Box textAlign={"left"}>
              <Tooltip
                label={`Screw Drivers\n20% for all of drills`}
                p={2}
                placement="left"
              >
                <CustomCard>ScrewDrivers</CustomCard>
              </Tooltip>
              <Tooltip label={`Brand News`} p={2} placement="right">
                <CustomCard>Cutter</CustomCard>
              </Tooltip>
              <Tooltip
                label={`Water Pump Pilers\n20% for all of drills`}
                p={2}
                placement="left"
              >
                <CustomCard>Water Pump Pilers</CustomCard>
              </Tooltip>
            </Box>
            <Sliders />
          </Flex>
          <ProductLists />
        </Flex>
      </Box>
    </>
  );
};

export default HandTool;
