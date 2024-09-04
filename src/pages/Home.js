import React from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
const Home = () => {
  //   const { data: user } = useQuery({
  //     queryKey: ["me"],
  //     queryFn: me,
  //   });

  return (
    <div>
      {/* <div>
        <h1>{user.balance}</h1>
      </div> */}
    </div>
  );
};

export default Home;
