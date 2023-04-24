import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Divider, Heading, Stack, Text, Image } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/img/blog/blog1.jpg";
import img2 from "../../assets/img/blog/blog2.jpg";
import img3 from "../../assets/img/blog/blog3.jpg";

import { Autoplay, Pagination, Navigation } from "swiper";

const Blog = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
];

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
    </>
  );
};

const Sliders = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Box mt={5}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <Box boxSize="sm">
            {Blog.map((blog) => (
              <SwiperSlide key={blog.img}>
                <Image src={blog.img} alt="Drills" />
              </SwiperSlide>
            ))}
          </Box>
        </Swiper>
      </Box>
      <Stack
        direction="row"
        h="50px"
        p={5}
        alignItems="center"
        backgroundColor="gray.100"
        margin={"3rem 0 1rem 0"}
      >
        <Divider orientation="vertical" width="2px" bg="yellow.400" />
        <Heading fontWeight="400">BLOG CATAGORIES</Heading>
      </Stack>
      <CustomText>Other</CustomText>
      <CustomText>Automotive</CustomText>
      <CustomText>Cleaning</CustomText>
      <CustomText>Plumbing</CustomText>
      <CustomText>Electrical</CustomText>
    </>
  );
};

export default Sliders;
