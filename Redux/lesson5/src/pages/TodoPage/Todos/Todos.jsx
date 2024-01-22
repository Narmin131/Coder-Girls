import React from "react";
import {  toast } from 'react-toastify';

const Todos = ({ myTodoList, setMyTodoList}) => {

    const handleDelete = (item)=>{
          const filteredArray = myTodoList.filter((todo)=> todo !== item)
          setMyTodoList(filteredArray)
    }

  return (
    <>
      <ol>
        {myTodoList.map((item) => {
          return <li>{item} <button className="btn btn-danger" onClick={()=>{
            handleDelete(item)
            toast.error('Item deleted')
          }}>X</button></li>;
        })}
      </ol>
    </>
  );
};

export default Todos;
