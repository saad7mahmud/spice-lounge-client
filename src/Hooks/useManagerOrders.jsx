import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";

const useManagerOrders = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const {
    data: managerOrders = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["managerOrders"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/orders/manager/${user?.email}`);
      return res.data;
    },
  });
  return [managerOrders, refetch, isLoading, error];
};

export default useManagerOrders;
