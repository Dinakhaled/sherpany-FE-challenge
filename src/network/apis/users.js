import { axiosInstance } from "./";

const getUsers = async ({ limit, page, nat }) => {
  return await axiosInstance.get(
    `api/?results=${limit}&page=${page}&nat=${nat}`
  );
};

export { getUsers };
