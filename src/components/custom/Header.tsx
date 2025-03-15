import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      p={10}
      backgroundColor={"blue.300"}
    >
      <Text textStyle="2xl">Concepts!</Text>
    </Box>
  );
};
export default Header;
