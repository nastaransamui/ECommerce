import React, { useEffect } from "react";
import { addToCart } from "../actions/cartActions";
import { useDispatch } from "react-redux";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  useEffect(() => {
    let isMount = true;
    if (isMount) {
      if (productId) {
        dispatch(addToCart(productId, qty));
      }
    }
    return () => {
      isMount = false;
    };
  }, [dispatch, qty, productId]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        Add To Cart : ProductID : {productId} and QTY: {qty}{" "}
      </p>
    </div>
  );
};

export default CartScreen;
