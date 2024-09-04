import React from "react";
import { useQuery } from "@tanstack/react-query";
import { me } from "../api/auth";
import { useMutation } from "@tanstack/react-query";
import { updateProfileImage } from "../api/auth";
const Profile = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["me"],
    queryFn: me, // Pass the function reference, not the invocation
  });
  const { mutate } = useMutation({
    mutationKey: ["updateProfileImage"],
    mutationFn: () => {
      updateProfileImage(user?.image);
    },
    onSuccess: () => {
      console.log(user.image);
    },
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    mutate();
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile data</div>;
  }

  return (
    <div className="">
      {/*card container */}
      <div className="flex items-center justify-center  h-lvh ">
        <div
          style={{ height: "500px" }}
          className="flex flex-col items-center justify-center border-solid border-black  rounded-5 w-80 shadow-md gap-5"
        >
          <img
            src={user?.image}
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />

          <h1 className="font-bold">{user?.username}</h1>
          <h1 className="font-bold">Balance:{user?.balance}</h1>

          <p>Uploade a Profile Pictuer</p>
          <form className="w-full flex flex-col items-center gap-5">
            <input
              type="file"
              id="image"
              name="image"
              // onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              className="w-32 h-10 rounded-m font-bold border-black border-solid shadow-md hover:bg-blue-500 text-black"
              onClick={handleFormSubmit}
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
