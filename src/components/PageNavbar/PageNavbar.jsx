import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import { pages } from "./Breadcrumbs";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const BreadContainer = styled.div`
  width: 90vw;
  margin: 0 auto;
  background-color: yellow;
  font-size: 1.6rem;
  padding: 3rem 0;
`;

const PageNavbar = ({ currentPage }) => {
  const location = useLocation();
  const getBreadcrumb = () => {
    const path = location.pathname;
    const parts = path.split("/").filter((part) => part !== "");
    const items = parts.map((part, index) => {
      const href = `/${parts.slice(0, index + 1).join("/")}`;
      const page = pages.find((page) => page.href === href);
      return { title: page.title, href: href };
    });
    return items;
  };
  return (
    <Stack bgColor={"yellow"}>
      <BreadContainer>
        <Flex gap={10} align={"center"} justifyContent={"space-between"}>
          <Text fontSize={"2rem"}>{currentPage.title}</Text>
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            {getBreadcrumb().map((item, index) => (
              <BreadcrumbItem
                key={index}
                isCurrentPage={index === getBreadcrumb().length - 1}
              >
                <BreadcrumbLink as={Link} to={item.href}>
                  {item.title}
                </BreadcrumbLink>
              </BreadcrumbItem>
            ))}
          </Breadcrumb>
        </Flex>
      </BreadContainer>
    </Stack>
  );
};

export default PageNavbar;
