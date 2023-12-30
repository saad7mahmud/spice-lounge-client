import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";

const useOrders = () => {
  const { user } = useContext(AuthContext);

  const axiosPublic = useAxiosPublic();
  const {
    data: orders = [],
    refetch,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/orders/${user?.email}`);
      return res.data;
    },
  });
  return [orders, refetch, isLoading, error];
};

export default useOrders;
