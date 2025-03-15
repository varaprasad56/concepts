import useUsers from "@/hooks/userUsers";

const UserDetails = () => {
  const { data, error, isLoading } = useUsers();

  return (
    <div>
      {error && <p>There is no data for users api</p>}
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
export default UserDetails;
