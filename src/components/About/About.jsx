import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

import styled from "styled-components";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const About = () => {
  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(500px, 1fr))"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "-3rem",
        padding: "1rem",
      }}
      width={"90vw"}
      margin={"0 auto"}
    >
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30rem",
          height: "20rem",
          padding: "1rem 2rem",
          border: "1px solid #999",
          position: "relative",
        }}
      >
        <CardHeader
          sx={{
            padding: "1rem",
            position: "absolute",
            backgroundColor: "#FFF700",
            borderRadius: "50%",
            top: "-3.5rem",
          }}
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="gray"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M16,6l3,4h2c1.11,0,2,0.89,2,2v3h-2c0,1.66-1.34,3-3,3s-3-1.34-3-3H9c0,1.66-1.34,3-3,3s-3-1.34-3-3H1v-3c0-1.11,0.89-2,2-2 l3-4H16 M10.5,7.5H6.75L4.86,10h5.64V7.5 M12,7.5V10h5.14l-1.89-2.5H12 M6,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S6.83,13.5,6,13.5 M18,13.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S18.83,13.5,18,13.5z"></path>{" "}
              <rect fill="none"></rect>
            </g>
          </svg>
        </CardHeader>
        <CardBody>
          <Heading paddingTop="4rem" fontWeight={300}>
            FREE SHIPPING
          </Heading>
          <Text fontSize="1.5rem" paddingTop="1rem">
            Free shipping for the orders over $450. Ut justo quam, et cursus
            neque. Fusce dui nibh auctor vel fermentum non condimentum vel...
          </Text>
        </CardBody>
        <CardFooter>
          <Button sx={{ padding: "1.5rem" }}>
            See More <ArrowForwardIcon marginLeft="0.5rem" />
          </Button>
        </CardFooter>
      </Card>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30rem",
          height: "20rem",
          padding: "1rem",
          border: "1px solid #999",
          position: "relative",
        }}
      >
        <CardHeader
          sx={{
            padding: "1rem",
            position: "absolute",
            backgroundColor: "#FFF700",
            borderRadius: "50%",
            top: "-3.5rem",
          }}
        >
          <svg
            fill="gray"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="35px"
            height="35px"
            viewBox="0 0 260 244"
            enable-background="new 0 0 260 244"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path d="M258,118v96c0,14.333-13.667,28-28,28h-84c-17.439,0-31.571-2.152-48-8c-5.073-1.806-20-8-20-8V114l66.036-77.567L150,2h12 c13.294,0,22.657,10.607,22.657,23.902v7.477c0,17.065-1.028,34.115-3.078,51.057L180.906,90H230C244.333,90,258,103.667,258,118z M2,238h60V102H2V238z"></path>{" "}
            </g>
          </svg>
        </CardHeader>
        <CardBody>
          <Heading paddingTop="4rem" fontWeight={300}>
            100% SATISFACTION
          </Heading>
          <Text fontSize="1.5rem" paddingTop="1rem">
            HandyMan theme is a unique, modern and clean Prestashop theme, it
            has a lot of useful features and can be used on multiple niches.
          </Text>
        </CardBody>
        <CardFooter>
          <Button sx={{ padding: "1.5rem" }}>
            See More <ArrowForwardIcon marginLeft="0.5rem" />
          </Button>
        </CardFooter>
      </Card>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "30rem",
          height: "20rem",
          padding: "1rem",
          border: "1px solid #999",
          position: "relative",
        }}
      >
        <CardHeader
          sx={{
            padding: "1rem",
            position: "absolute",
            backgroundColor: "#FFF700",
            borderRadius: "50%",
            top: "-3.5rem",
          }}
        >
          <svg
            fill="gray"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="35px"
            height="35px"
            viewBox="0 0 335.765 335.765"
            xml:space="preserve"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 "></polygon>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </CardHeader>
        <CardBody>
          <Heading paddingTop="4rem" fontWeight={300}>
            FULLY CUSTOMIZABLE
          </Heading>
          <Text fontSize="1.5rem" paddingTop="1rem">
            HandyMan theme is a unique, modern and clean Prestashop theme, it
            has a lot of useful features and can be used on multiple niche
          </Text>
        </CardBody>
        <CardFooter>
          <Button sx={{ padding: "1.5rem" }}>
            See More <ArrowForwardIcon marginLeft="0.5rem" />
          </Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};

export default About;
