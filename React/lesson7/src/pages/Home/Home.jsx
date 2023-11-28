import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.scss";
import SingleProduct from "../../components/SingleProduct";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Aos from "aos";
import Test from "../../components/Test";
const Home = ({oturduyumMesaj}) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  // hook - qarmaq (useState, useEffect)

  const [counter, setCounter] = useState(0); // counter = 0  setCounter(0) => counter = 0  ; setCounter(counter + 1) => counter + 1

  const [msg, setMsg] = useState("Hello");

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/products?_limit=10")
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
      <section className="home-section">
        <Container>
          <Row>
            {data.map((item, index) => {
              return <SingleProduct product={item} />;
            })}
          </Row>
        </Container>
      </section>

      <span className="span">{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <p>{oturduyumMesaj}</p>
      <button onClick={() => setMsg("Bye-bye")}>Change text</button>

      <Test oturduyumMesaj={oturduyumMesaj}/>
    </>
  );
};

export default Home;
