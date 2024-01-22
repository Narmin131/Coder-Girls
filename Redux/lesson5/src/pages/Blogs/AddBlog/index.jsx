import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBlogFunction } from "../../../redux/actions";
import { v4 as uuidv4 } from "uuid";
const AddBlog = () => {
  const [myBlog, setMyBlog] = useState({
    id: uuidv4(),
    title: "",
    desc: "",
    image: "",
  });

  const dispatch = useDispatch();
  const location = useNavigate();
  const handleChange = (e) => {
    setMyBlog({ ...myBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBlogFunction(myBlog));
    console.log(myBlog);
    location("/blogs");
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Ttile
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="desc"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              onChange={handleChange}
              name="image"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
