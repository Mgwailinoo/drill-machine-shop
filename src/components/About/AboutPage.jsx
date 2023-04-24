import React from "react";
import PageNavbar from "../PageNavbar/PageNavbar";
import img from "../../assets/img/team.jpg";
import user from "../../assets/img/user.jpg";
import {
  Grid,
  GridItem,
  Heading,
  Box,
  Text,
  Stack,
  Badge,
  Image,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
const currentPage = {
  title: "About",
  href: "/about",
};

const AboutPage = () => {
  const CustomBadge = ({ children }) => {
    return (
      <Badge
        variant="outline"
        colorScheme="green"
        padding={"1rem"}
        width="150px"
        fontSize={"1.5rem"}
      >
        {children}
      </Badge>
    );
  };
  return (
    <>
      <PageNavbar currentPage={currentPage} />
      <Box width="90vw" margin={"0 auto"} padding={"4.8rem 0"}>
        <Grid
          templateColumns="repeat(3,1fr)"
          gap={6}
          justifyContent="left"
          alignItems="center"
        >
          <GridItem width="100%" textAlign={"left"}>
            <Heading pb={3}>Our Company</Heading>
            <Text sx={{ fontSize: "1.5rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              maxime, quod facere tenetur
            </Text>
            <Text pt={"3"} sx={{ fontSize: "1.5rem", color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti non cupiditate? Mollitia voluptates animi at alias
              dolorum vitae est, eaque, quod ullam ut assumenda doloremque sed!
              Dolores, alias eos?
            </Text>
            <Stack direction="column" pt={5}>
              <CustomBadge>
                <CheckIcon />
                &nbsp; Default
              </CustomBadge>
              <CustomBadge>
                <CheckIcon />
                &nbsp; Success
              </CustomBadge>
              <CustomBadge>
                <CheckIcon />
                &nbsp; Removed
              </CustomBadge>
            </Stack>
          </GridItem>
          <GridItem width="100%" textAlign={"left"}>
            <Heading pb={3}>Our Team</Heading>
            <Image src={img} />
            <Text sx={{ fontSize: "1.5rem" }} pt={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
            <Text pt={"3"} sx={{ fontSize: "1.5rem", color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti non cupiditate?
            </Text>
          </GridItem>
          <GridItem width="100%" textAlign={"left"}>
            <Heading pb={3}>TESTIMONIALS</Heading>

            <Flex gap="10px">
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p={4}
                maxW="xs"
                textAlign="center"
              >
                <Avatar
                  size="lg"
                  src={user}
                  alt={`testimonial`}
                  mb={4}
                  mx="auto"
                />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Someone
                </Text>
                <Text fontSize="md" mb={4}>
                  "I absolutely love this product! It has exceeded all of my
                  expectations and has made a huge difference in my daily
                  routine. Thank you so much for creating such an amazing
                  product!"
                </Text>
              </Box>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                p={4}
                maxW="xs"
                textAlign="center"
              >
                <Avatar
                  size="lg"
                  src={user}
                  alt={`testimonial`}
                  mb={4}
                  mx="auto"
                />
                <Text fontSize="lg" fontWeight="bold" mb={2}>
                  Someone
                </Text>
                <Text fontSize="md" mb={4}>
                  "I absolutely love this product! It has exceeded all of my
                  expectations and has made a huge difference in my daily
                  routine. Thank you so much for creating such an amazing
                  product!"
                </Text>
              </Box>
            </Flex>
            <Text pt={"3"} sx={{ fontSize: "1.5rem", color: "gray" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              deleniti non cupiditate?
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default AboutPage;
