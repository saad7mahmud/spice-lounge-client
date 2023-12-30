import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";

const useManagerFoods = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const {
    data: managerFoods = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["managerFoods"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/foods/manager/${user?.email}`);
      return res.data;
    },
  });
  return [managerFoods, refetch, isLoading, error];
};

export default useManagerFoods;
