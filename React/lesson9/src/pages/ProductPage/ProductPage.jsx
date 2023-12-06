import React from "react";
import { products } from "../../data/Data";
import Card from "../../components/Card";

const ProductPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            {
                products.map((item, index)=>{
                    return <Card product={item}/>
                })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
