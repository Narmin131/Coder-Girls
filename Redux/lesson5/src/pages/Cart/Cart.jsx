import React from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { items, removeItem, updateItemQuantity, cartTotal, setItems } =
    useCart();
  console.log(items);
  const location = useNavigate();
  const checkUser = () => {
    let user = JSON.parse(localStorage.getItem("User"));
    if (user !== null) {
      location("/checkout");
    } else {
      toast.warning("accounta daxil edin");
    }
  };
  return (
    <>
      <div className="container">
        {items.length == 0 ? (
          "Your cart is empty"
        ) : (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>
                      <img src={item.image} alt="" style={{ width: "60px" }} />
                    </td>
                    <td>
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      {item.quantity}
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </td>
                    <td>{item.price * item.quantity}$</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          removeItem(item.id);
                          toast.error("Product succesfully removed");
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <h1>Cart Total : {cartTotal}$</h1>
            <button onClick={checkUser}>Buy now</button>
          </table>
        )}
      </div>
    </>
  );
};

export default Cart;
