import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { removeBlogFunction } from "../redux/actions";
const Admin = () => {
  const blogs = useSelector((store) => store.AppReducer);
  const dispatch = useDispatch();
  return (
    <>
      <NavLink to="/addBlog" className="btn btn-success">
        Add new blog
      </NavLink>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.desc}</td>
                  <td>
                    <img src={item.image} alt="" style={{ width: "60px" }} />
                  </td>
                  <td>
                    <NavLink
                      className="btn btn-warning"
                      to={`/blog/${item.id}`}
                    >
                      edit
                    </NavLink>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeBlogFunction(item.id))}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
