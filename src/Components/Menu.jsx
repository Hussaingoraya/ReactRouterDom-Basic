import React from "react";
import { products } from "../Data/ProductsDetail";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="container my-5">
      <div className="row">
        {products.map((item) => (
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{item.id}</h5>
                <p className="card-text">{item.name}</p>
                <p className="card-text">
                  PRICE: RS
                  {" " + item.price}
                </p>
                <Link to={`/products/${item.id}`}>View Details</Link>              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
