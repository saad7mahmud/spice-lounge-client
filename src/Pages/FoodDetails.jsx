// food.js

import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  console.log(food);
  const requestDateMs = new Date().getTime();
  const requestDate = new Date();
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  // Send this user to DB

  const orderInfo = {
    foodID: food.foodID,
    foodTitle: food.foodTitle,
    foodDescription: food.foodDescription,
    managerName: food.managerName,
    managerEmail: food.managerEmail,
    managerImage: food.managerImage,
    customerName: user?.displayName,
    customerEmail: user?.email,
    customerImage: user?.photoURL,
    foodImage: food.foodImage,
    foodPrice: food.foodPrice,
    foodCategory: food.foodCategory,
    foodAddedDate: food.currentDate,
    foodAddedDateMs: food.timeInMS,
    requestDate: requestDate,
    requestDateMs: requestDateMs,
    deliveryStatus: "pending",
  };
  // Make Admin
  const handleOrder = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Place Order",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .post("/orders", orderInfo)
          .then((data) => {
            console.log(data);
            if (data.status === 200) {
              Swal.fire({
                title: "Order Confirmed",
                text: "Please wait for the waiter.",
                icon: "success",
              });
              navigate("/dashboard/my-orders");
            }
          })
          .catch((error) => {
            console.error(error);
            if (error.request.status == 409) {
              Swal.fire({
                title: "Already Ordered",
                text: "You already have a pending order for this food.",
                icon: "error",
              });
            } else {
              Swal.fire({
                title: "Error Encountered",
                text: `${error.message}`,
                icon: "error",
              });
            }
          });
      }
    });
  };

  return (
    <div className=" m-10 bg-base-200 rounded-lg  p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl  font-semibold">{food.foodTitle}</h1>
          <div className="flex items-center">
            <span className="mr-2">Manager: {food.managerName}</span>
            <img
              src={food.managerImage}
              alt={food.managerName}
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="mb-8 md:mb-0">
            <img
              src={food.foodImage}
              alt={food.foodTitle}
              className="w-full rounded-lg"
            />
          </div>
          <div>
            <div className="mb-4">
              <p className="text-gray-400">Food ID: {food.foodID}</p>
              <p className="text-gray-400">Category: {food.foodCategory}</p>
              <p className="text-gray-400">Price: {food.foodPrice} BDT</p>
              <p className="text-gray-400">Added On: {food.currentDate}</p>
            </div>

            <p className="mb-6">Description: {food.foodDescription}</p>

            <p className="text-gray-400">Contact Manager:</p>
            <p className="mb-4">
              {food.managerName} - {food.managerEmail}
            </p>

            <button
              onClick={() => handleOrder(food.foodID)}
              className="rounded-lg my-4 bg-[#00a28f] py-3 px-6 text-white"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
