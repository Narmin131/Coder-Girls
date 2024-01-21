import React, { useEffect, useState } from "react";
import "./style.scss";
import { useContext } from "react";
import { GlobalState } from "../../Context/GlobalContext";
import ShopCard from "../../components/ShopCard";
import { Select } from "antd";

const Shop = () => {
  const { data } = useContext(GlobalState);

  const [state, setState] = useState(data);

  // Search

  const [query, setQuery] = useState("");

  // Filter

  const myCategories = [
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
    "all",
  ];

  const filterForCategory = (myCategory) => {
    if (myCategory == "all") {
      setState(data);
      return;
    }

    const filteredState = data.filter((item) => item.category === myCategory);
    setState(filteredState);
  };

  // Sort

  const sortProducts = (value) => {
    console.log(value);
    if (value === "all") {
      setState(data);
      return;
    } else if (value === "lowest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => a.price - b.price);
      setState(sortedProducts);
    } else if (value === "highest-price") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) => b.price - a.price);
      setState(sortedProducts);
    } else if (value === "a-z") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>a.title.localeCompare(b.title));
      setState(sortedProducts);
    } else if (value === "z-a") {
      let copyState = [...state];
      let sortedProducts = copyState.sort((a, b) =>b.title.localeCompare(a.title));
      setState(sortedProducts);
    }
  };

  return (
    <div className="shop-section">
      <Select
        defaultValue="All"
        style={{
          width: 120,
        }}
        onChange={sortProducts}
        options={[
          {
            value: "all",
            label: "All",
          },
          {
            value: "lowest-price",
            label: "Lowest-price",
          },
          {
            value: "highest-price",
            label: "Highest-price",
          },
          {
            value: "a-z",
            label: "A-Z",
          },
          {
            value: "z-a",
            label: "Z-A",
          },
        ]}
      />

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {myCategories.map((item, index) => {
        return (
          <button
            onClick={() => filterForCategory(item)}
            className="btn btn-light m-2"
          >
            {item}
          </button>
        );
      })}
      <div className="container">
        <div className="row">
          {state
            .filter((word) =>
              word.title.toLowerCase().includes(query.toLowerCase())
            )
            .map((item, index) => {
              return <ShopCard shopProduct={item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
