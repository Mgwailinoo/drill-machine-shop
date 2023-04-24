import { Flex, Stack, Box } from "@chakra-ui/react";
import React from "react";
import PageNavbar from "../PageNavbar/PageNavbar";
import Sidebar from "../Sidebar/Sidebar";

import Sliders from "../Slider/Sliders";
import BlogContent from "./BlogContent";

const Blog = () => {
  const currentPage = {
    title: "All Blog News",
    href: "/blog",
  };
  return (
    <>
      <PageNavbar currentPage={currentPage} />
      <Box width={"90vw"} margin={"0 auto"}>
        <Flex gap={"3rem"} padding={"2rem 0"}>
          <Sidebar />
          <BlogContent />
        </Flex>
      </Box>
    </>
  );
};

export default Blog;
