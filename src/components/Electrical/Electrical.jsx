import { AddIcon, ChevronRightIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import PageNavbar from "../PageNavbar/PageNavbar";
import Sliders from "../Slider/Sliders";
import ProductLists from "../ProductLists/ProductLists";
const currentPage = {
  title: "ELECTRICALS",
  href: "/electricals",
};
const Electrical = () => {
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
              <Heading fontWeight="400">ELECTRICAL</Heading>
            </Stack>
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize="15px"
                          fontWeight="500"
                        >
                          Drilling
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left" fontSize={"13px"}>
                      <Text>
                        <ChevronRightIcon />
                        Standard Drilling
                      </Text>
                      <Text>
                        <ChevronRightIcon />
                        Special Drilling
                      </Text>
                      <Text>
                        <ChevronRightIcon />
                        One Phase Drilling
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>

              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          fontSize="15px"
                          fontWeight="500"
                        >
                          Grinders
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} textAlign="left" fontSize={"13px"}>
                      <Text>
                        <ChevronRightIcon />
                        Casual Grinders
                      </Text>
                      <Text>
                        <ChevronRightIcon />
                        Multilevel Grinders
                      </Text>
                      <Text>
                        <ChevronRightIcon />
                        Wireless Grinders
                      </Text>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
            <Stack
              direction="row"
              h="50px"
              p={5}
              alignItems="center"
              backgroundColor="gray.100"
              margin={"5rem 0"}
            >
              <Divider orientation="vertical" width="2px" bg="yellow.400" />
              <Heading fontWeight="400">CATALOG</Heading>
            </Stack>

            <Flex direction={"column"} gap={"2rem"}>
              <Flex
                direction={"column"}
                gap={"1rem"}
                textAlign={"left"}
                fontSize={"1.3rem"}
              >
                <Text>Categories</Text>
                <Checkbox size="lg" defaultChecked>
                  Drilling (9)
                </Checkbox>
                <Checkbox size="lg" defaultChecked>
                  Grinders (4)
                </Checkbox>
              </Flex>
              <Flex
                direction={"column"}
                gap={"1rem"}
                textAlign={"left"}
                fontSize={"1.3rem"}
              >
                <Text>Availability</Text>
                <Checkbox size="lg" defaultChecked>
                  In stock (15)
                </Checkbox>
              </Flex>
              <Flex
                direction={"column"}
                gap={"1rem"}
                textAlign={"left"}
                fontSize={"1.3rem"}
              >
                <Text>Condition</Text>
                <Checkbox size="lg" defaultChecked>
                  New (15)
                </Checkbox>
              </Flex>
              <Flex
                direction={"column"}
                gap={"1rem"}
                textAlign={"left"}
                fontSize={"1.3rem"}
              >
                <Text>Color</Text>
                <Flex align={"center"} gap={"3rem"}>
                  <Flex align={"center"} gap={"0.5rem"}>
                    <Box width={"15px"} height={"15px"} bgColor="orange"></Box>
                    <Text>Orange (1) </Text>
                  </Flex>
                  <Flex align={"center"} gap={"0.5rem"}>
                    <Box width={"15px"} height={"15px"} bgColor="skyblue"></Box>
                    <Text>Blue (1) </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Sliders />
          </Flex>
          <ProductLists />
        </Flex>
      </Box>
    </>
  );
};

export default Electrical;
