import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchInpur = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />}></InputLeftElement>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
};

export default SearchInpur;
