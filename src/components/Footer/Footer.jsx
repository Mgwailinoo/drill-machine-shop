import { ReactNode } from "react";
import {
  Box,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaFacebookSquare,
  FaPinterestSquare,
  FaCcPaypal,
  FaCcMastercard,
  FaCcVisa,
} from "react-icons/fa";
import Container from "../Container";
import {
  AiFillGooglePlusSquare,
  AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { ChevronRightIcon } from "@chakra-ui/icons";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"20px"} mb={2} color={"#ffffffbd"}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      fontSize={"20px"}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box bgColor={"black"} color={useColorModeValue("gray.700", "gray.200")}>
      <Container>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingBottom={"5rem"}
        >
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
            <SocialButton label={"facebook"} href={"#"}>
              <FaFacebookSquare />
            </SocialButton>
            <SocialButton label={"pintreset"} href={"#"}>
              <FaPinterestSquare />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <AiFillGooglePlusSquare />
            </SocialButton>
          </Stack>
          <Box>
            <InputGroup size="lg">
              <Input
                padding="2rem 0 2rem 0.5rem"
                fontSize="1.5rem"
                outline={"none"}
                border={"1px solid gray"}
                borderRadius={"0"}
                placeholder="Search Here"
                width={"500px"}
              />
              <InputRightElement
                width="8rem"
                size="md"
                padding="2rem 0.5rem"
                marginBottom="-1.7rem"
                backgroundColor="transparent"
                border="none"
                color="gray"
                _hover={{ bg: "yellow", transition: "0.5s" }}
              >
                Sign Up <ChevronRightIcon fontSize={"20px"} />
              </InputRightElement>
            </InputGroup>
          </Box>
        </Box>

        <Box>
          <SimpleGrid
            columns={{ base: 1, sm: 2, md: 4 }}
            spacing={20}
            pb={"6rem"}
            textAlign={"justify"}
            fontSize={"15px"}
            display={"flex"}
          >
            <Stack align={"flex-start"} flex={2}>
              <ListHeader>About Us</ListHeader>
              <Text>
                Took a gallery of type and scrambled it to make a type specimen
                book. it has survived not only five centuries, but also the leap
                into electronictook a gallery of type and scrambled it to make
              </Text>
            </Stack>

            <Stack align={"flex-start"} flex={1}>
              <ListHeader>Information</ListHeader>

              <Link href={"#"}>Specials</Link>
              <Link href={"#"}>Our stores</Link>
              <Link href={"#"}>Contact Us</Link>
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Sitemap</Link>
            </Stack>

            <Stack align={"flex-start"} flex={1}>
              <ListHeader>My account</ListHeader>
              <Link href={"#"}>My Orders</Link>
              <Link href={"#"}>My credit slips</Link>
              <Link href={"#"}>My addresses</Link>
              <Link href={"#"}>My personal info</Link>
              <Link href={"#"}>My vouchers</Link>
            </Stack>

            <Stack align={"flex-start"} flex={3}>
              <ListHeader>Store Information</ListHeader>
              <Link href={"#"} display={"flex"} alignItems={"center"} gap="7px">
                <ImLocation />
                My Company, 42 Avenue Street
              </Link>
              <Link href={"#"} display={"flex"} alignItems={"center"} gap="7px">
                <BsFillTelephoneFill />
                Call us now : 0123-456-789
              </Link>
              <Link href={"#"} display={"flex"} alignItems={"center"} gap="7px">
                <AiOutlineMail />
                Email : sales@yourcompany.com
              </Link>
            </Stack>
          </SimpleGrid>
        </Box>

        <Box
          borderTopWidth={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Stack
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "space-between" }}
            align={{ md: "center" }}
          >
            <Text fontSize={"1.2rem"}>
              © 2023 dynasity. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Paypal"} href={"#"}>
                <FaCcPaypal fontSize={"30px"} />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaCcMastercard fontSize={"30px"} />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaCcVisa fontSize={"30px"} />
              </SocialButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
