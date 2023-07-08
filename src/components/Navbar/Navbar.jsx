import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  Stack,
  Box,
  Icon,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  SearchIcon,
} from "@chakra-ui/icons";
import { Input } from "@chakra-ui/react";
import { NAV_ITEMS } from "./NavItem";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/UserReducer/userReducer";
import { useNavigate } from "react-router-dom";

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;

  width: 100vw;
  background-color: #f0ece6;
  color: #000;
`;
const Container = styled.div`
  width: 90vw;
  margin: 0 auto;
`;
const FirstNav = styled.div`
  background-color: #1a0b5c;
  color: #fff;
  padding: 1rem;
  font-size: 1rem;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SecondNav = styled.div`
  background-color: #fff;
  padding: 2rem 0;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
`;

const LogoText = styled.h2`
  font-size: 5rem;
  color: #3b3141;

  span {
    color: #fff700;
  }
`;

const NavIconBox = styled.div`
  padding: 0.5rem;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-left: 0.5rem;
  }

  div p {
    font-size: 1.5rem;
    font-weight: 500;
  }
  div span {
    font-size: 1rem;
    font-style: italic;
    font-weight: 400;
    color: #3b3141;
    text-align: left;
  }
  div span p {
    color: #3b3141;
    font-size: 1.2rem;
    display: inline;
  }
`;

const NavIcon = styled.div`
  padding: 1rem;
  background-color: #fff700;
  border-right: 1px solid #777;
`;

const Flex1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  align-items: center;
`;

const CartBadge = styled.span`
  position: absolute;
  top: -4px;
  right: -10px;
  background-color: #fff700;

  font-size: 25px;
  border-radius: 20px;
  padding: 2px 4px;
  line-height: 1;
  font-weight: 800;
`;

const CartBtn = styled.span`
  display: block;
  position: relative;
  color: #fff;
  font-size: 6rem;
  padding: "10px";
`;

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
            fontSize={"1.5rem"}
          >
            {label}
          </Text>
          <Text fontSize={"1rem"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const Navbar = () => {
  const wishlist = useSelector((store) => store.wishReducer.wishlist);
  const cart = useSelector((store) => store.cart.cart);
  const isLoggedIn = useSelector((store) => store.user.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());

    // Navigate to the desired page
    navigate("/authenticate");
  };
  return (
    <>
      <NavbarContainer>
        <FirstNav>
          <Container>
            <Flex>
              <p>24/7 support: 00 113 332 455 677</p>
              <Flex gap="5rem" width="100%">
                <div>
                  <Menu>
                    <MenuButton
                      px={2}
                      py={1}
                      transition="all 0.2s"
                      marginRight="8px"
                      borderRadius="md"
                      borderWidth="1px"
                      _hover={{ bg: "gray.400" }}
                      _expanded={{ bg: "blue.400" }}
                      _focus={{ boxShadow: "none" }}
                    >
                      English <ChevronDownIcon />
                    </MenuButton>
                    <MenuList boxSize="5px 10px">
                      <MenuItem size="sm">Myanmar</MenuItem>
                    </MenuList>
                  </Menu>

                  <Menu>
                    <MenuButton
                      px={2}
                      py={1}
                      transition="all 0.2s"
                      marginRight="8px"
                      borderRadius="md"
                      borderWidth="1px"
                      _hover={{ bg: "gray.400" }}
                      _expanded={{ bg: "blue.400" }}
                      _focus={{ boxShadow: "none" }}
                    >
                      Dollar <ChevronDownIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem fontSize="sm" py={1}>
                        Kyats
                      </MenuItem>
                    </MenuList>
                  </Menu>
                  {isLoggedIn === true ? (
                    <button onClick={handleLogout}>logout</button>
                  ) : (
                    <Link to="/authenticate">Sign Up</Link>
                  )}
                </div>
              </Flex>
            </Flex>
          </Container>
        </FirstNav>
        <SecondNav>
          <Container>
            <FlexBox>
              <LogoText>
                HANDY <span>Men</span>
              </LogoText>
              <NavIconBox>
                <NavIcon>
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gray"
                    stroke="gray"
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
                </NavIcon>
                <div>
                  <p>Free Shipping</p>
                  <span>for orders over $100.00</span>
                </div>
              </NavIconBox>
              <NavIconBox>
                <NavIcon>
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="3"
                    stroke="gray"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M54.89,26.73A23.52,23.52,0,0,1,15.6,49"
                        stroke-linecap="round"
                      ></path>
                      <path
                        d="M9,37.17a23.75,23.75,0,0,1-.53-5A23.51,23.51,0,0,1,48.3,15.2"
                        stroke-linecap="round"
                      ></path>
                      <polyline
                        points="37.73 16.24 48.62 15.44 47.77 5.24"
                        stroke-linecap="round"
                      ></polyline>
                      <polyline
                        points="25.91 47.76 15.03 48.56 15.88 58.76"
                        stroke-linecap="round"
                      ></polyline>
                    </g>
                  </svg>
                </NavIcon>
                <div>
                  <p>Free Return</p>
                  <span>for 100 days return</span>
                </div>
              </NavIconBox>

              <NavIconBox>
                <NavIcon>
                  <svg
                    fill="gray"
                    width="35px"
                    height="35px"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M10.09 4.37a.62.62 0 0 0-.85.23l-3.57 6.18a.62.62 0 0 0 .23.85.55.55 0 0 0 .31.08.63.63 0 0 0 .54-.31l3.57-6.18a.61.61 0 0 0-.23-.85zM7.35 6.43a2.16 2.16 0 0 0-2.06-2.24 2.17 2.17 0 0 0-2.07 2.24 2.17 2.17 0 0 0 2.07 2.25 2.16 2.16 0 0 0 2.06-2.25zm-2.06 1a.93.93 0 0 1-.82-1 .92.92 0 0 1 .82-1 .91.91 0 0 1 .81 1 .92.92 0 0 1-.81 1zm5.42-.11a2.16 2.16 0 0 0-2.06 2.24 2.16 2.16 0 0 0 2.06 2.25 2.17 2.17 0 0 0 2.07-2.25 2.17 2.17 0 0 0-2.07-2.24zm0 3.24a.92.92 0 0 1-.81-1 .92.92 0 0 1 .81-1 .92.92 0 0 1 .82 1 .93.93 0 0 1-.82 1z"></path>
                      <path d="M8 .5A7.76 7.76 0 0 0 0 8a7.76 7.76 0 0 0 8 7.5A7.76 7.76 0 0 0 16 8 7.76 7.76 0 0 0 8 .5zm0 13.75A6.52 6.52 0 0 1 1.25 8 6.52 6.52 0 0 1 8 1.75 6.52 6.52 0 0 1 14.75 8 6.52 6.52 0 0 1 8 14.25z"></path>
                    </g>
                  </svg>
                </NavIcon>
                <div>
                  <p>Free DISCOUNT</p>
                  <span>free registration</span>
                </div>
              </NavIconBox>

              <NavIconBox>
                <NavIcon>
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142M4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2M4.78571 5L6.07142 14M6.07142 14L6.25469 15.2828C6.39545 16.2681 7.23929 17 8.23459 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z"
                        stroke="gray"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                </NavIcon>
                <Link to="/cart">
                  <div>
                    <p>Shopping Cart</p>
                    <span>
                      No items - <p>$0.00</p>
                    </span>
                  </div>
                </Link>
              </NavIconBox>
              <NavIconBox>
                <Flex align={"center"} gap={"0.3rem"}>
                  <CartBtn>
                    <Link to="/wishlist">
                      <svg
                        fill="#3b3141"
                        width="25px"
                        height="25px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z" />
                      </svg>
                    </Link>
                    <CartBadge>{wishlist.length}</CartBadge>
                  </CartBtn>

                  <CartBtn>
                    <Link to="/cart">
                      <svg
                        fill="#3b3141"
                        width="25px"
                        height="25px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                      </svg>
                    </Link>
                    <CartBadge>{cart.length}</CartBadge>
                  </CartBtn>
                </Flex>
              </NavIconBox>
            </FlexBox>
            <Flex1>
              <Tabs variant="enclosed" marginTop="2rem">
                <TabList isFitted colorScheme="yellow">
                  {NAV_ITEMS.map((navItem) => (
                    <Popover
                      key={navItem.label}
                      trigger={"hover"}
                      placement={"bottom-start"}
                    >
                      <PopoverTrigger>
                        <Tab
                          fontSize="2rem"
                          padding="1rem"
                          marginRight="1rem"
                          _selected={{ backgroundColor: "#FFF700" }}
                          _hover={{ backgroundColor: "#FFF700" }}
                          as={Link}
                          to={navItem.href}
                        >
                          {navItem.label}
                        </Tab>
                      </PopoverTrigger>
                      {navItem.children && (
                        <PopoverContent
                          border={0}
                          boxShadow={"xl"}
                          bg={"white"}
                          p={4}
                          rounded={"xl"}
                          minW={"sm"}
                        >
                          <TabPanels>
                            {navItem.children.map((child) => (
                              <DesktopSubNav key={child.label} {...child} />
                            ))}
                          </TabPanels>
                        </PopoverContent>
                      )}
                    </Popover>
                  ))}
                </TabList>
              </Tabs>

              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  padding="2rem 0 2rem 0.5rem"
                  fontSize="1.5rem"
                  placeholder="Search Here"
                />
                <InputRightElement
                  width="4.5rem"
                  size="md"
                  padding="2rem 0.5rem"
                  marginBottom="-1.7rem"
                  backgroundColor="#fff"
                  border="1px solid gray"
                  _hover={{ bg: "gray.100" }}
                >
                  {<SearchIcon />}
                </InputRightElement>
              </InputGroup>
            </Flex1>
          </Container>
        </SecondNav>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
