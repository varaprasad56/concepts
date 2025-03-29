import useData from "@/hooks/useData";
import { Card, GridItem, HStack, SimpleGrid, Text } from "@chakra-ui/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Posts = () => {
  const { data, error, isLoading, setData } = useData<Post>({
    endpoint: "/posts",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    getValues,
  } = useForm<FieldVals>();

  interface FieldVals {
    searchText: string;
    filterText: string;
  }
  const onSearchSubmit: SubmitHandler<FieldVals> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <SimpleGrid columns={12} gap={5}>
      {error && <Text>Some issue with POSTS API</Text>}
      <GridItem colSpan={12}>
        <form onSubmit={handleSubmit(onSearchSubmit)}>
          <HStack marginY={5}>
            <input {...register("searchText")} />
            <input {...register("filterText")} />
            <input type="submit" />
          </HStack>
        </form>
      </GridItem>
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
