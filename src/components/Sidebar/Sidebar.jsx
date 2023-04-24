import {
  AddIcon,
  ChevronRightIcon,
  MinusIcon,
  TriangleDownIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Stack,
  Divider,
  Heading,
  Card,
  Image,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
} from "@chakra-ui/react";

import Products from "../Product/Products";
import Sliders from "../Slider/Sliders";

const CustomText = ({ children }) => {
  return (
    <>
      <Text
        display={"flex"}
        gap={2}
        alignItems={"center"}
        fontSize={"1.3rem"}
        padding={"0.3rem 1rem"}
      >
        <ChevronRightIcon />
        {children}
      </Text>
      <Divider h={0.5} bgColor={"gray"} mt={3} />
    </>
  );
};

function Sidebar() {
  return (
    <Flex direction="column" width="300px">
      <Stack
        direction="row"
        h="50px"
        p={5}
        alignItems="center"
        backgroundColor="gray.100"
      >
        <Divider orientation="vertical" width="2px" bg="yellow.400" />
        <Heading fontWeight="400">TOP SELLERS</Heading>
      </Stack>
      {Products.slice(0, 3).map((product) => (
        <Card direction="row" overflow="hidden" variant="outline" mt={5}>
          <Image
            objectFit="cover"
            maxW="120px"
            maxH="120px"
            padding={"1rem "}
            src={product.img}
            alt={product.title}
          />

          <Stack>
            <CardBody textAlign={"left"}>
              <Heading size="lg">{product.title}</Heading>

              <Text py="2" fontSize={"1.2rem"} color={"gray"}>
                High quality Vise-Grip Pliers with multi-groove ratcheting
                system for...
              </Text>
              <Text fontSize={"1.2rem"} fontWeight={"700"}>
                ${product.price}
              </Text>
            </CardBody>
          </Stack>
        </Card>
      ))}

      <Badge
        variant="solid"
        colorScheme="green"
        p={3}
        mt={5}
        maxW="130px"
        fontSize={"1.2rem"}
        bgColor={"yellow.500"}
        _hover={{ bgColor: "yellow.700", transition: "0.5s" }}
      >
        <Flex align={"center"}>
          All BEST SELLERS
          <ChevronRightIcon fontSize={"1.3rem"} w={"1.3rem"} />
        </Flex>
      </Badge>
      <Stack
        direction="row"
        h="50px"
        p={5}
        alignItems="center"
        backgroundColor="gray.100"
        margin={"3rem 0 1rem 0"}
      >
        <Divider orientation="vertical" width="2px" bg="yellow.400" />
        <Heading fontWeight="400">CATAGORIES</Heading>
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
                    Electrical
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
                  Drilling
                </Text>
                <Text>
                  <ChevronRightIcon />
                  Grinders
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
                    Hand Tools
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
                  Screwdrivers
                </Text>
                <Text>
                  <ChevronRightIcon />
                  Cutter
                </Text>
                <Text>
                  <ChevronRightIcon />
                  Water Pump Pliers
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
        margin={"3rem 0 1rem 0"}
      >
        <Divider orientation="vertical" width="2px" bg="yellow.400" />
        <Heading fontWeight="400">MANUFACTURERS</Heading>
      </Stack>
      <Box>
        <CustomText>Apple</CustomText>
        <CustomText>Bosch</CustomText>
        <CustomText>Bosch</CustomText>
        <CustomText>Domo</CustomText>
        <CustomText>Fashion Manufacturer</CustomText>
      </Box>
      <Select placeholder="All manufactures" mt={5} fontSize={"1.2rem"}>
        <option value="Apple">Apple</option>
        <option value="Bosch">Bosch</option>
        <option value="Bosch">Bosch</option>
        <option value="Domo">Domo</option>
        <option value="Domo">Fashion Manufacture</option>
        <option value="Domo">Omron</option>
        <option value="Domo">Samsung</option>
      </Select>
      <Sliders />
    </Flex>
  );
}

export default Sidebar;
