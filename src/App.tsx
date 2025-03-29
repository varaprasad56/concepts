import "./App.css";
import UserDetails from "./components/custom/UserDetails";
import Comments from "./components/custom/Comments";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import Header from "./components/custom/Header";
import Posts from "./components/custom/Posts";

const App = () => {
  return (
    <Container fluid maxW="1200px" backgroundColor={"green.200"} p={0}>
      <Header></Header>
      <SimpleGrid columns={12}>
        <GridItem
          colSpan={{ base: 12, sm: 3 }}
          backgroundColor={"yellow.300"}
          p={5}
        >
          <UserDetails></UserDetails>
        </GridItem>
        <GridItem colSpan={{ base: 12, sm: 9 }} px={10} py={5}>
          {/* <Comments></Comments> */}
          <Posts></Posts>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default App;
