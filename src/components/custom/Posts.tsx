import useData from "@/hooks/useData";
import { Card, GridItem, SimpleGrid, Text } from "@chakra-ui/react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const { data, error, isLoading } = useData<Post>({ endpoint: "/posts" });
  return (
    <SimpleGrid columns={12} gap={5}>
      {error && <Text>Some issue with POSTS API</Text>}
      {data.map((post) => {
        return (
          <GridItem key={post.id} colSpan={{ base: 12, sm: 6, md: 4 }}>
            <Card.Root>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Description>{post.body}</Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
        );
      })}
    </SimpleGrid>
  );
};
export default Posts;
