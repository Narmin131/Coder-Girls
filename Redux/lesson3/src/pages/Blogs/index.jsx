import React from "react";
import { useSelector } from "react-redux";
const Blogs = () => {
  const blogs = useSelector((store) => store.AppReducer);
  return (
    <div>
      {blogs.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
          </>
        );
      })}
    </div>
  );
};

export default Blogs;
