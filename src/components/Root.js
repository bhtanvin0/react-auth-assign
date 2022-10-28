import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";

const Root = () => {
  const list = useLoaderData();
  return (
    <div>
      <Header></Header>
      <div className="flex">
        <div className="w-fit flex flex-col">
          {list.map((li) => (
            <Link li={li} to={`course/${li.id}`} className="bg-orange-400 my-3">
              {" "}
              {li.course_title.slice(0, 15)}
            </Link>
          ))}
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Root;
