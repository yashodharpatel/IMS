"use client";
import React, { useState } from "react";
import "../../style.css";
import "./add.css";

const Add = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    quantity: "",
  });
  const [quantity, setQuantity] = useState(1);

  const handleChange = () => {
    setProduct({
      ...product,
      quantity: quantity,
      [e.target.name]: e.target.value,
    });
  };

  console.log(product);

  return (
    <div className="rightbar">
      <div className="add-container">
        <h2>Easily Add Your Inventory</h2>
        <form>
          <div className="input">
            <label htmlFor="">
              Inventory Name
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Acer pc"
              className="box"
              required
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">
              Category
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input
              name="category"
              type="text"
              placeholder="Hardware"
              className="box"
              required
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="input">
            <label htmlFor="">
              Description
              <span>
                <sup>*</sup>
              </span>
            </label>
            <input
              name="description"
              type="text"
              placeholder="Acer pc"
              className="box"
              required
              autoComplete="off"
              onChange={handleChange}
            />
          </div>
          <div className="input quantity">
            <button
              onClick={() => setQuantity((prev) => (prev == 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}> +</button>
          </div>
          <button type="submit" className="btn">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
