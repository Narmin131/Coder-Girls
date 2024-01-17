import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ myTodoList, setMyTodoList }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo == "") {
      alert("Please fill all the places");
    }
    setMyTodoList([...myTodoList, todo]);
    setTodo("");
    toast.success('Item added')
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Todo
            </label>
            <input
              type="text"
              className="form-control"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
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

export default Form;
