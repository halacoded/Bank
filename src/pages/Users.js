import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getAllUsers, Transfermoney } from "../api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
const User = () => {
  //store the amount when typed in the input
  const [userAmount, setUserAmount] = useState(0);
  const queryClient = useQueryClient();

  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });

  //<h2 className="text-3xl text-white font-semibold mb-6 ">Users</h2>
  const { mutate } = useMutation({
    mutationKey: ["Transfermoney"],
    //empty becuse its will get input value
    mutationFn: (username) => Transfermoney(userAmount, username),
    onSuccess: () => {
      queryClient.invalidateQueries([""]);
    },
  });

  const handleChange = (e) => {
    setUserAmount(e.target.value);
  };
  return (
    <div className="bg-white min-h-screen h-screen flex items-center justify-center absolute inset-0 z-[-1]">
      <div className="max-w-[90%] overflow-scroll w-full px-6 py-8 bg-white rounded-md shadow-lg max-h-[80%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {users?.map((user) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-md flex flex-col items-center justify-center shadow-xl"
            >
              <img
                src={
                  "https://react-bank-project.eapi.joincoded.com/" + user.image
                }
                alt="User"
                className="w-24 h-24 rounded-full mb-4"
              />

              <div className="text-center">
                <h3 className="text-lg text-black font-semibold mb-2">
                  {user.name}
                </h3>
                <p className="text-black">{user?.balance}</p>
                <form>
                  <label>Enter amount:</label>
                  <input
                    type="amount"
                    id="balance"
                    onChange={handleChange}
                    className="border  rounded-md hover:justify-center"
                  />
                </form>
                <button
                  onClick={() => mutate(user.username)}
                  className=" text-black  rounded-md hover:bg-blue-500 justify-center h-7   bg-sky-800 "
                >
                  transfer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
