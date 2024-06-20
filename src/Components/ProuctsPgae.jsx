import React from "react";
import { products } from "../Data/ProductsDetail";
import { useParams } from "react-router-dom";

export default function ProuctsPgae() {
  let { pid } = useParams();
  let items = products.find(p => p.id == pid);
  return (
    <>
    <div className="container">

      <h1>Product Details</h1>
      <h3>ID : {items.id}</h3>
      <h3>NAME : {items.name}</h3>
      <h3>PRICE : {items.price}</h3>
      </div>

    </>
  );
}
