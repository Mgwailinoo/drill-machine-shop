import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  AiOutlineComment,
  AiOutlineEye,
  AiOutlineTag,
  AiOutlineUser,
} from "react-icons/ai";
import img1 from "../../assets/img/blog/BlogArticle1.jpg";
import img2 from "../../assets/img/blog/BlogArticle2.jpg";
import img3 from "../../assets/img/blog/BlogArticle3.jpg";
import img4 from "../../assets/img/blog/BlogArticle4.jpg";
import img5 from "../../assets/img/blog/blogArticle5.jpg";
import img6 from "../../assets/img/blog/blogArticle6.jpg";

const blogArticle = [
  {
    img: img1,
  },
  {
    img: img2,
  },
  {
    img: img3,
  },
  {
    img: img4,
  },
  {
    img: img5,
  },
  {
    img: img6,
  },
];

const BlogContent = () => {
  const itemsPerPage = 4;
  const totalPages = Math.ceil(blogArticle.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const displayedArticles = blogArticle.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Stack direction={"column"} width={"100vw"} margin={"0 auto"}>
        {displayedArticles.map((blog) => (
          <Box mb={5}>
            <Stack
              direction="row"
              backgroundColor="gray.100"
              width="100%"
              h={"50px"}
              padding={"1rem"}
              display={"flex"}
              p={5}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Stack direction="row" alignItems="center" h={"30px"} flex={1}>
                <Divider orientation="vertical" width="2px" bg="yellow.400" />
                <Heading fontWeight="400">Some Blog Title</Heading>
              </Stack>
              <Flex gap={"1rem"} fontSize={"1.5rem"} flex={2}>
                <Text display={"flex"} gap={3} alignItems={"center"}>
                  Posted by <AiOutlineUser /> Admin
                </Text>
                <Text display={"flex"} gap={3} alignItems={"center"}>
                  <AiOutlineTag /> AutoMobile
                </Text>
                <Text display={"flex"} gap={3} alignItems={"center"}>
                  <AiOutlineComment /> 3212 comments
                </Text>
                <Text display={"flex"} gap={3} alignItems={"center"}>
                  <AiOutlineEye /> views (40319)
                </Text>
              </Flex>
            </Stack>
            <Box>
              <Image src={blog.img} alt="post-img" width={"100%"} />
              <Text fontSize={"1.5rem"} textAlign="left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                distinctio a, nostrum sit sint aspernatur architecto excepturi
                aliquid saepe, vitae possimus vero omnis expedita accusantium
                dolorum optio. Doloribus, cupiditate minima.
              </Text>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  margin={"2rem 0"}
                  p={"1.5rem"}
                  fontSize="1.3rem"
                  bgColor={"#FFF700"}
                >
                  READ MORE
                </Button>
              </Box>
            </Box>
            <Divider direction="horizontal" />
          </Box>
        ))}
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "3rem 0",
          }}
        >
          <Box display={"flex"} gap="1rem">
            <Button
              p={"1.5rem"}
              fontSize="1.3rem"
              bgColor={"#FFF700"}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              1
            </Button>
            <Button
              p={"1.5rem"}
              fontSize="1.3rem"
              bgColor={"#FFF700"}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              2
            </Button>
          </Box>
          <Text fontSize={"1.2rem"} color="gray">
            Showing 1 to 5 of 7 (1 Pages)
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default BlogContent;
