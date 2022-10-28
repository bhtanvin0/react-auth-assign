import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Categoris from "./Categoris";

const Home = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courses/")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 grid-cols-3 ml-10">
        {courses.map((c) => (
          <Categoris c={c} key={c.id}></Categoris>
        ))}
      </div>
    </div>
  );
};

export default Home;
