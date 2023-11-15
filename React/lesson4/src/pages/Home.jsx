import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  // hook - qarmaq (useState, useEffect)

  const [counter, setCounter] = useState(0); // counter = 0  setCounter(0) => counter = 0  ; setCounter(counter + 1) => counter + 1

  const [msg, setMsg] = useState("Hello");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/sneakers?_limit=10")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  console.log(data);

  // 3 islenme yeri ve mentiqi

  // 1.useEffect(()=>{
  //yalniz bir defe ise dusecek
  // }, [])

  // 2.useEffect(()=>{
  //her renderda ise dusur
  // })

  // 3.useEffect(()=>{
  //  parametrden asili olaraq ise dusur
  // }, [parametr])

  useEffect(() => {
    console.log("sen counteri deyisdin");
  }, [counter]);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{msg}</p>
      <button onClick={() => setMsg("Bye-bye")}>Change text</button>
    </>
  );
};

export default Home;
