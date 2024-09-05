import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { me, updateProfileImage } from "../api/auth";
import { useMutation } from "@tanstack/react-query";

const Profile = () => {
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState(null);

  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["me"],
    queryFn: me,
  });

  const { mutate } = useMutation({
    mutationKey: ["updateProfileImage"],
    mutationFn: (file) => updateProfileImage(file),
    onSuccess: () => {
      queryClient.invalidateQueries(["me"]);
    },
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      mutate(selectedFile);
    }
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading profile data</div>;
  }

  return (
    <div className="">
      <div className="flex items-center justify-center h-lvh">
        <div
          style={{ height: "500px" }}
          className="flex flex-col items-center justify-center border-solid border-black rounded-5 w-80 shadow-md gap-5"
        >
          <img
            src={"https://react-bank-project.eapi.joincoded.com/" + user?.image}
            alt="User"
            className="w-10 h-10 rounded-full mr-2"
          />
          <h1 className="font-bold">{user?.username}</h1>
          <h1 className="font-bold">Balance: {user?.balance}</h1>
          <p>Upload a Profile Picture</p>
          <form
            className="w-full flex flex-col items-center gap-5"
            onSubmit={handleFormSubmit}
          >
            <input
              type="file"
              id="image"
              name="image"
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleFileChange}
              required
            />
            <button
              className="w-32 h-10 rounded-m font-bold border-black border-solid shadow-md hover:bg-blue-500 text-black"
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
