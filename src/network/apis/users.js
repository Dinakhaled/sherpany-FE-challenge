import { axiosInstance } from "./";

const getUsers = async ({ limit, page }) => {
  return await axiosInstance.get(`api/?results=${limit}&page=${page}`);
};

export { getUsers };
