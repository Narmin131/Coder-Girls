import React, { useEffect, useState } from "react";
import "./style.scss";
import { useContext } from "react";
import { GlobalState } from "../../Context/GlobalContext";
import ShopCard from "../../components/ShopCard";

const Shop = () => {
  const { data } = useContext(GlobalState);

  const [state, setState] = useState(data)

  const [query, setQuery] = useState("")

  // useEffect(() => {
  //   Aos.init();
  // }, []);

  // Filter

  const myCategories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
    "all",
  ];

  const filterForCategory = (myCategory)=>{
      if(myCategory  == 'all'){
        setState(data)
        return
      }

      const filteredState = data.filter((item)=>item.category === myCategory)
      setState(filteredState)
  } 

  // 

  return (
    <div className="shop-section">

      <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>

      {myCategories.map((item, index) => {
        return <button onClick={()=>filterForCategory(item)} className="btn btn-light m-2">{item}</button>;
      })}
      <div className="container">
        <div className="row">
          {state
          .filter((word)=>word.title.toLowerCase().includes(query.toLowerCase()))
          .map((item, index) => {
            return <ShopCard shopProduct={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
