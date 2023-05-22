import React from "react";
import {
  Box,
  Divider,
  Heading,
  Image,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import img1 from "../../assets/img/drill.jpg";
import img2 from "../../assets/img/drill1.jpg";
import img3 from "../../assets/img/drill2.jpg";
const BestOffer = () => {
  return (
    <Stack
      sx={{
        width: "90vw",
        margin: "0 auto",
        padding: "4.8rem",
      }}
    >
      <Heading
        sx={{ fontSize: "4rem", fontWeight: "400", paddingBottom: "3rem" }}
      >
        BEST OFFERS
      </Heading>

      <Box sx={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Box
          boxSize="380px"
          bgImage={`url(${img1})`}
          height="500px"
          bgRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          opacity="0.9"
          _hover={{ opacity: "1", transition: "0.5s" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              padding: "2rem",
              bgColor: "rgba(119, 119, 119, 0.5)",
            }}
          >
            <Heading color="white">NEW STUFF </Heading>
            <Heading color="#FFF700">HERE</Heading>
          </Box>
        </Box>
        <Box
          boxSize="380px"
          bgImage={`url(${img2})`}
          height="500px"
          bgRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          opacity="0.9"
          _hover={{ opacity: "1", transition: "0.5s" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              padding: "2rem",
              bgColor: "rgba(119, 119, 119, 0.5)",
            }}
          >
            <Heading color="white">NEW STUFF </Heading>
            <Heading color="#FFF700">HERE</Heading>
          </Box>
          <Text sx={{ padding: "2rem", fontSize: "1.6rem", color: "#fff" }}>
            --Coming Soon--
          </Text>
        </Box>
        <Box
          boxSize="380px"
          bgImage={`url(${img3})`}
          height="500px"
          bgRepeat="no-repeat"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          opacity="0.9"
          _hover={{ opacity: "1", transition: "0.5s" }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              padding: "2rem",
              bgColor: "rgba(119, 119, 119, 0.5)",
            }}
          >
            <Heading color="white">NEW STUFF </Heading>
            <Heading color="#FFF700">HERE</Heading>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default BestOffer;
