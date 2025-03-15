import useData from "@/hooks/useData";
import {
  Box,
  HStack,
  List,
  SkeletonCircle,
  SkeletonText,
  Text,
} from "@chakra-ui/react";

export interface Comment {
  id: number;
  name: string;
  postId: number;
  email: string;
}
const Comments = () => {
  const { data, error, isLoading } = useData<Comment>({
    endpoint: "/comments",
  });
  const skeletons = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Box>
      {error && <Text>Error getting comments</Text>}
      {isLoading && (
        <Box>
          {skeletons.map((val) => {
            return (
              <HStack key={val} margin={5}>
                <SkeletonText noOfLines={1}></SkeletonText>
              </HStack>
            );
          })}
        </Box>
      )}
      <List.Root>
        {data.map((item) => (
          <List.Item key={item.id}>{item.name}</List.Item>
        ))}
      </List.Root>
    </Box>
  );
};
export default Comments;
