// fruiList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchFruits } from "../fruitSlice";

const FruitList = () => {
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruit.fruitList);
  const isLoading = useSelector((state) => state.fruit.isLoading);
  const error = useSelector((state) => state.fruit.error);

  useEffect(() => {
    dispatch(fetchFruits());
  }, [dispatch]);

  const handleAddToCart = (fruit) => {
    const fruitFound = fruits.find((f) => f.id == fruit.id);
    console.log("fruitFound", fruitFound);
    dispatch(addToCart(fruitFound));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Available Fruits:</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            {fruit.name} - {fruit.price} $ - Quantity available:
            {fruit.quantity}
            <button onClick={() => handleAddToCart(fruit)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
