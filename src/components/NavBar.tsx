import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInpur from "./SearchInpur";
const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize={"60px"} />
      <SearchInpur></SearchInpur>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
