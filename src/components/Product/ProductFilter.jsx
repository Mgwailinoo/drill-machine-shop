import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Box,
  Button,
  SlideFade,
} from "@chakra-ui/react";
import styled from "styled-components";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React, { useRef, useState, useEffect } from "react";
import Products from "./Products";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Product from "./Product";

const TabBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CustomIcon = React.forwardRef(({ icon, ...props }, ref) => {
  // Replace this with your custom icon component
  return (
    <Box {...props} ref={ref}>
      {icon}
    </Box>
  );
});

const ProductFilter = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [products, setProducts] = useState(Products);

  const filter = (type) => {
    setProducts(Products.filter((product) => product.type === type));
  };

  const listVariants = {
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    hidden: { opacity: 0 },
  };

  const listItemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <Tabs
      sx={{
        width: "90vw",
        margin: "0 auto",
        padding: "9.6rem",
        borderBottom: "transparent",
      }}
    >
      <TabBox>
        <TabList borderBottom="transparent">
          <Tab
            sx={{ fontSize: "2rem", margin: "0 0.5rem", bgColor: "#FFF700" }}
            _selected={{ color: "#fff", bgColor: "gray" }}
          >
            NEW PRODUCTS
          </Tab>
          <Tab
            sx={{ fontSize: "2rem", margin: "0 0.5rem", bgColor: "#FFF700" }}
            _selected={{ color: "#fff", bgColor: "gray" }}
            onClick={() => filter("DRILLING")}
          >
            DRILLING
          </Tab>
          <Tab
            sx={{ fontSize: "2rem", margin: "0 0.5rem", bgColor: "#FFF700" }}
            _selected={{ color: "#fff", bgColor: "gray" }}
            onClick={() => filter("BEST SELLER")}
          >
            BEST SELLER
          </Tab>
        </TabList>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <CustomIcon
            icon={<ChevronLeftIcon fontSize="3rem" />}
            ref={prevRef}
            sx={{ bgColor: "#FFF700", boxSize: "3rem" }}
          />

          <CustomIcon
            icon={<ChevronRightIcon fontSize="3rem" />}
            ref={nextRef}
            sx={{ bgColor: "#FFF700", boxSize: "3rem" }}
          />
        </Box>
      </TabBox>

      <TabPanels>
        {["NEW PRODUCTS", "DRILLING", "BEST SELLER"].map((type) => {
          const filteredProducts = products.filter(
            (product) => product.type === type
          );

          return (
            <>
              <TabPanel></TabPanel>
              <TabPanel key={type}>
                <Swiper
                  slidesPerView={4}
                  centeredSlides={false}
                  slidesPerGroupSkip={1}
                  grabCursor={true}
                  keyboard={{
                    enabled: true,
                  }}
                  breakpoints={{
                    769: {
                      slidesPerView: 4,
                      slidesPerGroup: 4,
                    },
                  }}
                  scrollbar={false}
                  navigation={{
                    prevEl: prevRef?.current,
                    nextEl: nextRef?.current,
                  }}
                  pagination={false}
                  modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                  className="mySwiper"
                >
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {filteredProducts.map((product, i) => (
                      <motion.div
                        variants={listVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <SlideFade offsetY="20px">
                          <SwiperSlide key={product.id}>
                            <Product product={product} />
                          </SwiperSlide>
                        </SlideFade>
                      </motion.div>
                    ))}
                  </motion.div>
                </Swiper>
              </TabPanel>
            </>
          );
        })}
      </TabPanels>
    </Tabs>
  );
};

export default ProductFilter;
