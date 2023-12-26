import { Link } from "react-router-dom";
import useFoods from "../Hooks/useFoods";

const AllFoods = () => {
  const [foods] = useFoods();
  console.log(foods);

  return (
    <div>
      <h1 className="text-3xl font-medium text-center m-10">
        Showing All foods
      </h1>
      <h1 className=" font-medium text-center mb-10">
        Total Admin Verified food: {foods.length}
      </h1>
      <div className="flex flex-wrap justify-center gap-5 m-10">
        {foods.map((food) => (
          <div key={food.foodID}>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={food?.foodImage}
                  alt="Shoes"
                  className="rounded-xl  max-h-40 object-contain w-full h-full"
                />
              </figure>
              <div className="card-body  ">
                <p className="text-xl font-bold text-center">
                  {food.foodTitle}
                </p>
                <div className="flex flex-row-reverse items-center gap-3">
                  <div>
                    {" "}
                    <p className="">manager Name: {food.managerName}</p>
                    <p className="">manager Mail: {food.managerEmail}</p>
                  </div>
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={food.managerImage}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>

                <div className="card-actions ">
                  <Link to={`/all-foods/${food.foodID}`}>
                    {" "}
                    <button className="btn w-full btn-neutral">Details</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
