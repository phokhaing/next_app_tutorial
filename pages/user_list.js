import React from "react";
import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <>
      <h1>List Of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
};
export default UserList;

// will pre-render or generated the page at build time ahead of a user’s request
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
