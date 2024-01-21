import React, { useEffect, useState } from "react";
import Form from "./Form/Form";
import Todos from "./Todos/Todos";

const TodosPage = () => {
  const [myTodoList, setMyTodoList] = useState(
    localStorage.getItem("Todos")
      ? JSON.parse(localStorage.getItem("Todos"))
      : []
  );

  useEffect(()=>{
    localStorage.setItem('Todos', JSON.stringify(myTodoList))
  }, [myTodoList])

  return (
    <>
      <Form myTodoList={myTodoList} setMyTodoList={setMyTodoList} />
      <Todos myTodoList={myTodoList} setMyTodoList={setMyTodoList} />
    </>
  );
};

export default TodosPage;
