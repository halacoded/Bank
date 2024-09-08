import instance from ".";
import { storeToken } from "./storage";

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const register = async (userInfo) => {
  try {
    const formData = new FormData();
    for (const key in userInfo) formData.append(key, userInfo[key]);
    // END
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      formData
    );
    storeToken(data.token); // <--- This
    return data;
  } catch (error) {
    console.log(error);
  }
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};
const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const updateProfileImage = async (Profileimage) => {
  try {
    const formData = new FormData();
    formData.append("image", Profileimage);
    // END
    const { data } = await instance.put(
      "/mini-project/api/auth/profile",
      formData
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Deposit = async (amount) => {
  try {
    const { data } = await instance.put(
      "/mini-project/api/transactions/deposit",
      { amount }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

const Withdraw = async (amount) => {
  try {
    const { data } = await instance.put(
      "/mini-project/api/transactions/withdraw",
      { amount }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const Transfermoney = async (amount, username) => {
  const { data } = await instance.put(
    `/mini-project/api/transactions/transfer/${username}`,
    amount
  );
  return data;
};

const Transactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

export {
  login,
  register,
  me,
  getAllUsers,
  Withdraw,
  Deposit,
  updateProfileImage,
  Transfermoney,
  Transactions,
};
