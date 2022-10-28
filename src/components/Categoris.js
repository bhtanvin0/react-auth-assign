import React from "react";
import { Link } from "react-router-dom";

const Categoris = ({ c }) => {
  return (
    <div className="">
      <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
        <img
          src={c.image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            {c.course_title}
          </h2>
        </div>
        <p className="dark:text-gray-200">{c.description}</p>
        <Link to={`/course/${c.id}`}> Buy</Link>
      </div>
    </div>
  );
};

export default Categoris;


// Tlad fljflk asjfl ajsdfl jaslfkasldf lkas flkas jflk aslkfjalsfjajfl;afja
