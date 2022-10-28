import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Card = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="ml-20 ">
      <h1>{data.course_title}</h1>
      <img
        src={data.image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <Link
        className="px-10 py-5 ml-8 mb-10 bg-slate-900 text-white"
        to={`/course/chackout`}
      >
        {" "}
        Buy now
      </Link>
    </div>
  );
};

export default Card;
