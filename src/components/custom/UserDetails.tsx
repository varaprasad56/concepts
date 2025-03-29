import userDetailsQueryOption from "@/queries/UserQuery";
import { Loader } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

const UserDetails = () => {
  const { data, isFetching, isError } = useQuery(userDetailsQueryOption());

  return (
    <div>
      {isError && <p>There is some error in users component</p>}
      {isFetching && <Loader></Loader>}
      {data?.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
export default UserDetails;
